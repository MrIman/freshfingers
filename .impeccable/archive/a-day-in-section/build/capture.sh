#!/bin/zsh
# usage: capture.sh <out.png> <width> <height> [query]
cd "$(dirname "$0")/../.."
OUT="$1"; W="$2"; H="$3"; Q="$4"
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 --window-size=${W},${H} --virtual-time-budget=4000 --screenshot="$OUT" "http://127.0.0.1:8791/index.html$Q" >/dev/null 2>&1
sips -g pixelWidth -g pixelHeight "$OUT" | tail -2 | tr '\n' ' '; echo
