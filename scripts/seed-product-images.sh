#!/usr/bin/env bash
set -euo pipefail

# Adjust if your repo lives somewhere else
REPO_DIR="${REPO_DIR:-$HOME/Desktop/microsite-repo}"
cd "$REPO_DIR"

echo "▶ Seeding product image structure in: $REPO_DIR"

# Product directory slugs expected by your code:
# (Matches images.variants paths in data: /products/<dirSlug>/...)
DIR_SLUGS=(
  "crewneck-beige"
  "crewneck-navy"
  "poster-breathwork"
)

# Variant filenames we support per product
VARIANTS=( "front.png" "back.png" "l1.jpg" "l2.jpg" )

# Resolve / create a placeholder
PLACEHOLDER=""
CANDIDATES=(
  "public/assets/Comingsoon.png"
  "public/assets/coming-soon.png"
  "public/assets/placeholder.png"
)
for c in "${CANDIDATES[@]}"; do
  if [[ -f "$c" ]]; then
    PLACEHOLDER="$c"
    break
  fi
done

if [[ -z "$PLACEHOLDER" ]]; then
  echo "ℹ No existing placeholder found. Creating tiny placeholder at public/assets/placeholder.png"
  mkdir -p public/assets
  # 1x1 PNG (transparent), base64-decoded into file
  base64 -d > public/assets/placeholder.png << 'B64'
iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=
B64
  PLACEHOLDER="public/assets/placeholder.png"
fi

echo "✔ Using placeholder: $PLACEHOLDER"
echo

# Report accumulators
created_dirs=()
seeded_files=()
skipped_files=()

for dir in "${DIR_SLUGS[@]}"; do
  TARGET_DIR="public/products/$dir"
  mkdir -p "$TARGET_DIR"
  if [[ ! -e "$TARGET_DIR/.gitkeep" ]]; then
    touch "$TARGET_DIR/.gitkeep"
    created_dirs+=("$TARGET_DIR")
  fi

  for v in "${VARIANTS[@]}"; do
    DEST="$TARGET_DIR/$v"
    if [[ -f "$DEST" ]]; then
      skipped_files+=("$DEST (exists)")
      continue
    fi
    # Copy placeholder so Netlify doesn’t have to follow symlinks
    cp "$PLACEHOLDER" "$DEST"
    seeded_files+=("$DEST")
  done
done

echo "──── Summary ─────────────────────────────────────────"
echo "Created product dirs:"
for d in "${created_dirs[@]:-}"; do echo "  • $d"; done
[[ ${#created_dirs[@]:-0} -eq 0 ]] && echo "  • (none newly created)"

echo
echo "Seeded variant image slots with placeholder:"
for f in "${seeded_files[@]:-}"; do echo "  • $f"; done
[[ ${#seeded_files[@]:-0} -eq 0 ]] && echo "  • (none – all present)"

echo
echo "Skipped (already existed):"
for f in "${skipped_files[@]:-}"; do echo "  • $f"; done
[[ ${#skipped_files[@]:-0} -eq 0 ]] && echo "  • (none)"

echo
read -r -p "Git commit scaffolding now? [y/N] " ans
if [[ "${ans:-N}" =~ ^[Yy]$ ]]; then
  git add public/products public/assets/placeholder.png 2>/dev/null || true
  git commit -m "chore(products): seed variant image slots with placeholder & scaffold folders" || true
  echo "✔ Committed."
else
  echo "⏭  Skipped commit."
fi