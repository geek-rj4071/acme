#!/usr/bin/env bash
set -euo pipefail

ESLINT_CONFIG="eslint.config.strict.mjs"
TARGETS=("apps" "libs")
MIN_DUP_LINES=4

if [ ! -f "$ESLINT_CONFIG" ]; then
  echo "❌ Missing $ESLINT_CONFIG. Create it first."
  exit 1
fi

npx eslint "${TARGETS[@]}" --ext .ts --config "$ESLINT_CONFIG"

if rg -n --hidden \
  --glob '!**/dist/**' --glob '!**/coverage/**' --glob '!**/node_modules/**' \
  -g '*.ts' -g '*.html' \
  -e '(^[[:space:]]*//|/\*|\*/|<!--|-->)' \
  "${TARGETS[@]}"; then
  echo "❌ Comment rule violated: comments are not allowed."
  exit 1
fi

if ! npx -y -- jscpd --version >/dev/null 2>&1; then
  echo "❌ Missing jscpd. Install it with: npm install -D jscpd"
  exit 1
fi

npx -y -- jscpd \
  --min-lines "$MIN_DUP_LINES" \
  --pattern "apps/**/*.{ts,js,html},libs/**/*.{ts,js,html}" \
  --ignore "node_modules" \
  --reporters "console" \
  --no-progress

echo "✅ Strict MFE rules passed"
