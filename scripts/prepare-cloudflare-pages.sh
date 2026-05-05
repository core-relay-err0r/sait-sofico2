#!/bin/bash
# Prepare the .open-next/cloudflare directory for Cloudflare Pages deployment

set -e

OUTPUT_DIR=".open-next/cloudflare"

# Copy the worker.js as _worker.js (required by Cloudflare Pages)
cp .open-next/worker.js "$OUTPUT_DIR/_worker.js"

# Remove durable object exports that cause errors without proper wrangler config
sed -i '/export { DOQueueHandler }/d' "$OUTPUT_DIR/_worker.js"
sed -i '/export { DOShardedTagCache }/d' "$OUTPUT_DIR/_worker.js"
sed -i '/export { BucketCachePurge }/d' "$OUTPUT_DIR/_worker.js"

# Create cloudflare subdirectory and copy required files
mkdir -p "$OUTPUT_DIR/cloudflare"
cp "$OUTPUT_DIR/images.js" "$OUTPUT_DIR/cloudflare/"
cp "$OUTPUT_DIR/init.js" "$OUTPUT_DIR/cloudflare/"
cp "$OUTPUT_DIR/next-env.mjs" "$OUTPUT_DIR/cloudflare/"
cp "$OUTPUT_DIR/skew-protection.js" "$OUTPUT_DIR/cloudflare/"

# Copy middleware directory
cp -r .open-next/middleware "$OUTPUT_DIR/"

# Copy .build directory (contains durable-objects)
cp -r .open-next/.build "$OUTPUT_DIR/"

# Copy server-functions directory
cp -r .open-next/server-functions "$OUTPUT_DIR/"

echo "Cloudflare Pages output prepared in $OUTPUT_DIR"
