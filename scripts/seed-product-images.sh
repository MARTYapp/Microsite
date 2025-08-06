#!/bin/bash
set -euo pipefail

# Adjust if your repo lives somewhere else
REPO_DIR="${REPO_DIR:-$HOME/Desktop/microsite-repo}"
cd "$REPO_DIR" || { echo "❌ REPO_DIR not found: $REPO_DIR"; exit 1; }

echo "▶ Seeding product image structure in: $REPO_DIR"

# ── Normalize accidental 'Assets' → 'assets' ───────────────────────────────────
if [ -d public/Assets ]; then
  mkdir -p public/assets
  rsync -a --remove-source-files public/Assets/ public/assets/ || true
  rmdir public/Assets 2>/dev/null || true
fi

# ── Variant filenames we support per product ───────────────────────────────────
VARIANTS=( "front.png" "back.png" "l1.jpg" "l2.jpg" )

# ── Try to auto‑discover slugs from data/products.ts; fallback to static list ──
DIR_SLUGS=()
PRODUCTS_FILE="data/products.ts"

if [ -f "$PRODUCTS_FILE" ]; then
  # Bash 3.2 compatible slug extraction
  while IFS= read -r line; do
    case "$line" in
      *slug:\ *\'*\')
        s="${line#*slug: }"   # drop leading 'slug: '
        s="${s#\'}"           # remove first single quote
        s="${s%%\'*}"         # keep until next single quote
        DIR_SLUGS+=("$s")
        ;;
    esac
  done < "$PRODUCTS_FILE"
fi

# Fallback if nothing parsed
if [ ${#DIR_SLUGS[@]} -eq 0 ]; then
  DIR_SLUGS=( "crewneck-beige" "crewneck-navy" "poster-breathwork" )
fi

# ── Resolve / create a placeholder ─────────────────────────────────────────────
PLACEHOLDER=""
CANDIDATES=(
  "public/assets/Comingsoon.png"
  "public/assets/coming-soon.png"
  "public/assets/placeholder.png"
)
for c in "${CANDIDATES[@]}"; do
  if [ -f "$c" ]; then
    PLACEHOLDER="$c"
    break
  fi
done

if [ -z "$PLACEHOLDER" ]; then
  echo "ℹ No existing placeholder found. Creating tiny placeholder at public/assets/placeholder.png"
  mkdir -p public/assets
  # 1x1 PNG (transparent), base64-decoded into file
  /usr/bin/base64 -D > public/assets/placeholder.png << 'B64'
iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=
B64
  PLACEHOLDER="public/assets/placeholder.png"
fi

echo "✔ Using placeholder: $PLACEHOLDER"
echo

# ── Reporting accumulators ─────────────────────────────────────────────────────
created_dirs=()
seeded_files=()
skipped_files=()

# ── Seed per product / variant ─────────────────────────────────────────────────
for dir in "${DIR_SLUGS[@]}"; do
  TARGET_DIR="public/products/$dir"
  mkdir -p "$TARGET_DIR"
  if [ ! -e "$TARGET_DIR/.gitkeep" ]; then
    touch "$TARGET_DIR/.gitkeep"
    created_dirs+=("$TARGET_DIR")
  fi

  for v in "${VARIANTS[@]}"; do
    DEST="$TARGET_DIR/$v"
    if [ -f "$DEST" ]; then
      skipped_files+=("$DEST (exists)")
      continue
    fi
    cp "$PLACEHOLDER" "$DEST"
    seeded_files+=("$DEST")
  done
done

# ── Summary ────────────────────────────────────────────────────────────────────
echo "──── Summary ─────────────────────────────────────────"
echo "Created product dirs:"
if [ ${#created_dirs[@]} -gt 0 ]; then
  for d in "${created_dirs[@]}"; do printf '  • %s\n' "$d"; done
else
  echo "  • (none newly created)"
fi

echo
echo "Seeded variant image slots with placeholder:"
if [ ${#seeded_files[@]} -gt 0 ]; then
  for f in "${seeded_files[@]}"; do printf '  • %s\n' "$f"; done
else
  echo "  • (none – all present)"
fi

echo
echo "Skipped (already existed):"
if [ ${#skipped_files[@]} -gt 0 ]; then
  for f in "${skipped_files[@]}"; do printf '  • %s\n' "$f"; done
else
  echo "  • (none)"
fi

echo
read -r -p "Git commit scaffolding now? [y/N] " ans
if [[ "${ans:-N}" =~ ^[Yy]$ ]]; then
  git add public/products public/assets/placeholder.png 2>/dev/null || true
  git commit -m "chore(products): seed variant image slots with placeholder & scaffold folders" || true
  echo "✔ Committed."
else
  echo "⏭  Skipped commit."
fi