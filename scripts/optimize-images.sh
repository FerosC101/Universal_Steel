#!/bin/bash
# ============================================================
# Image Optimization Script for Universal Steel
# Converts large JPG/PNG images to optimized WebP format
# and resizes oversized images for web use
# ============================================================

set -e

PUBLIC_DIR="$(cd "$(dirname "$0")/../public/images" && pwd)"
BACKUP_DIR="$(cd "$(dirname "$0")/.." && pwd)/public/images_backup"

# Max dimensions for different image categories
HERO_MAX_WIDTH=1920
FACILITY_MAX_WIDTH=1600
GENERAL_MAX_WIDTH=1200
QUALITY=80  # WebP quality (0-100, 80 is excellent for photos)

echo "🔧 Universal Steel Image Optimizer"
echo "===================================="
echo ""

# Count images to process
TOTAL_JPG=$(find "$PUBLIC_DIR" -name "*.jpg" -o -name "*.jpeg" | wc -l | tr -d ' ')
TOTAL_PNG=$(find "$PUBLIC_DIR" -name "*.png" -size +100k | wc -l | tr -d ' ')
echo "📊 Found $TOTAL_JPG JPG and $TOTAL_PNG large PNG images"
echo ""

# Create backup
echo "📦 Backing up original images to images_backup/..."
if [ ! -d "$BACKUP_DIR" ]; then
    cp -R "$PUBLIC_DIR" "$BACKUP_DIR"
    echo "   ✅ Backup created"
else
    echo "   ⏭️  Backup already exists, skipping"
fi
echo ""

# Function to get file size in human-readable format
file_size() {
    if [[ "$OSTYPE" == "darwin"* ]]; then
        stat -f%z "$1" 2>/dev/null | awk '{
            if ($1 >= 1048576) printf "%.1f MB", $1/1048576
            else if ($1 >= 1024) printf "%.0f KB", $1/1024
            else printf "%d B", $1
        }'
    else
        stat --printf="%s" "$1" 2>/dev/null | awk '{
            if ($1 >= 1048576) printf "%.1f MB", $1/1048576
            else if ($1 >= 1024) printf "%.0f KB", $1/1024
            else printf "%d B", $1
        }'
    fi
}

SAVED_TOTAL=0
PROCESSED=0

# Process hero images (resize to 1920px wide, convert to WebP)
echo "🖼️  Processing hero images..."
for img in "$PUBLIC_DIR"/hero/*.jpg "$PUBLIC_DIR"/hero/*.jpeg; do
    [ -f "$img" ] || continue
    
    filename=$(basename "$img")
    name="${filename%.*}"
    output="$PUBLIC_DIR/hero/${name}.webp"
    
    # Skip if already small (< 500KB)
    size=$(stat -f%z "$img" 2>/dev/null || stat --printf="%s" "$img" 2>/dev/null)
    if [ "$size" -lt 512000 ]; then
        echo "   ⏭️  $filename ($(file_size "$img")) - already small, skipping"
        continue
    fi
    
    old_size=$(file_size "$img")
    
    # Resize with sips first, then convert to WebP
    TEMP="/tmp/optimized_${name}.jpg"
    sips --resampleWidth $HERO_MAX_WIDTH "$img" --out "$TEMP" > /dev/null 2>&1
    cwebp -q $QUALITY "$TEMP" -o "$output" > /dev/null 2>&1
    rm -f "$TEMP"
    
    new_size=$(file_size "$output")
    echo "   ✅ $filename ($old_size) → ${name}.webp ($new_size)"
    PROCESSED=$((PROCESSED + 1))
done
echo ""

# Process facility images (resize to 1600px wide)
echo "🏭 Processing facility images..."
for img in "$PUBLIC_DIR"/facility/*.jpg "$PUBLIC_DIR"/facility/**/*.jpg; do
    [ -f "$img" ] || continue
    
    filename=$(basename "$img")
    name="${filename%.*}"
    dirpath=$(dirname "$img")
    output="${dirpath}/${name}.webp"
    
    # Skip if WebP already exists and is reasonable size
    if [ -f "$output" ]; then
        size=$(stat -f%z "$output" 2>/dev/null || stat --printf="%s" "$output" 2>/dev/null)
        if [ "$size" -lt 1048576 ]; then
            echo "   ⏭️  $filename - webp exists and is small"
            continue
        fi
    fi
    
    # Skip if JPG is already small
    size=$(stat -f%z "$img" 2>/dev/null || stat --printf="%s" "$img" 2>/dev/null)
    if [ "$size" -lt 512000 ]; then
        continue
    fi
    
    old_size=$(file_size "$img")
    
    TEMP="/tmp/optimized_${name}.jpg"
    sips --resampleWidth $FACILITY_MAX_WIDTH "$img" --out "$TEMP" > /dev/null 2>&1
    cwebp -q $QUALITY "$TEMP" -o "$output" > /dev/null 2>&1
    rm -f "$TEMP"
    
    new_size=$(file_size "$output")
    echo "   ✅ $filename ($old_size) → ${name}.webp ($new_size)"
    PROCESSED=$((PROCESSED + 1))
done
echo ""

# Also optimize any oversized WebP files (> 2MB)
echo "📐 Optimizing oversized WebP files..."
find "$PUBLIC_DIR" -name "*.webp" -size +2M | while read img; do
    filename=$(basename "$img")
    name="${filename%.*}"
    dirpath=$(dirname "$img")
    old_size=$(file_size "$img")
    
    # Re-encode with lower quality and resize
    TEMP="/tmp/re_${name}.png"
    sips -s format png "$img" --out "$TEMP" > /dev/null 2>&1
    sips --resampleWidth $FACILITY_MAX_WIDTH "$TEMP" --out "$TEMP" > /dev/null 2>&1
    cwebp -q $QUALITY "$TEMP" -o "$img" > /dev/null 2>&1
    rm -f "$TEMP"
    
    new_size=$(file_size "$img")
    echo "   ✅ $filename ($old_size) → ($new_size)"
    PROCESSED=$((PROCESSED + 1))
done
echo ""

echo "===================================="
echo "✅ Done! Processed $PROCESSED images"
echo ""
echo "📋 Next steps:"
echo "   1. Update your code to reference .webp files instead of .jpg"
echo "   2. Test locally with: npm run dev"
echo "   3. Delete original .jpg files once confirmed working"
echo ""

# Show before/after sizes
echo "📊 Directory sizes after optimization:"
du -sh "$PUBLIC_DIR"/hero/ "$PUBLIC_DIR"/facility/ 2>/dev/null
