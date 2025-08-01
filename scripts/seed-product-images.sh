#!/bin/bash
set -euo pipefail

REPO_DIR="${REPO_DIR:-$HOME/Desktop/microsite-repo}"
cd "$REPO_DIR" || { echo "❌ REPO_DIR not found: $REPO_DIR"; exit 1; }

echo "▶ Seeding product image structure in: $REPO_DIR"

# Normalize accidental capitalized Assets folder to assets
if [ -d public/Assets ]; then
  mkdir -p public/assets
  rsync -a --remove-source-files public/Assets/ public/assets/ || true
  rmdir public/Assets 2>/dev/null || true
fi

# Variant filenames we support per product
VARIANTS=( "front.png" "back.png" "l1.jpg" "l2.jpg" )

# Try to auto-discover slugs from data/products.ts; fallback to static list
DIR_SLUGS=()
PRODUCTS_FILE="data/products.ts"
if [[ -f "$PRODUCTS_FILE" ]]; then
  # Extract slug: '...'
  mapfile -t RAW_SLUGS < <(grep -oE "slug:\s*'[^']+'" "$PRODUCTS_FILE" | sed -E "s/slug:\s*'([^']+)'/\1/")
  map_slug_to_dir() {
    # crewneck-beige-navy -> crewneck-beige
    # poster-breathwork   -> poster-breathwork
    IFS='-' read -r a b c <<< "$1"
    if [[ "$a" == "crewneck" && -n "${b:-}" ]]; then
      echo "$a-$b"
    else
      echo "$1"
    fi
  }
  for s in "${RAW_SLUGS[@]}"; do DIR_SLUGS+=( "$(map_slug_to_dir "$s")" ); done
  # de-duplicate
  mapfile -t DIR_SLUGS < <(printf "%s\n" "${DIR_SLUGS[@]}" | awk '!seen[$0]++')
fi

# Fallback if auto-discovery produced nothing
if [[ ${#DIR_SLUGS[@]} -eq 0 ]]; then
  DIR_SLUGS=( "crewneck-beige" "crewneck-navy" "poster-breathwork" )
fi

# Resolve / create a placeholder
PLACEHOLDER=""
CANDIDATES=(
  "public/assets/Comingsoon.png"
  "public/assets/coming-soon.png"
  "public/assets/placeholder.png"
)
for c in "${CANDIDATES[@]}"; do
  if [[ -f "$c" ]]; then PLACEHOLDER="$c"; break; fi
done
if [[ -z "$PLACEHOLDER" ]]; then
  echo "ℹ No existing placeholder found. Creating tiny placeholder at public/assets/placeholder.png"
  mkdir -p public/assets
  base64 -d > public/assets/placeholder.png << 'B64'
iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=
B64
  PLACEHOLDER="public/assets/placeholder.png"
fi
echo "✔ Using placeholder: $PLACEHOLDER"
echo

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
    cp "$PLACEHOLDER" "$DEST"
    seeded_files+=("$DEST")
  done
done

echo "──── Summary ─────────────────────────────────────────"
echo "Created product dirs:"
if [[ ${#created_dirs[@]} -gt 0 ]]; then
  printf '  • %s\n' "${created_dirs[@]}"
else
  echo "  • (none newly created)"
fi

echo
echo "Seeded variant image slots with placeholder:"
if [[ ${#seeded_files[@]} -gt 0 ]]; then
  printf '  • %s\n' "${seeded_files[@]}"
else
  echo "  • (none – all present)"
fi

echo
echo "Skipped (already existed):"
if [[ ${#skipped_files[@]} -gt 0 ]]; then
  printf '  • %s\n' "${skipped_files[@]}"
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
