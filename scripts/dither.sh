#!/usr/bin/env bash
# Converts any image to the site's 1-bit look: only ink #1A1A1A on paper
# #FEFCF8, with an ordered (Bayer) dot pattern for the mid-tones.
#
#   scripts/dither.sh <input> <output.png> <width> [height] [pre-filters] [mode]
#
# Show the output at exactly its own pixel size in CSS, with
# `image-rendering: pixelated`, so one dot is one CSS pixel everywhere on the
# site. Transparent areas become paper. Optional pre-filters run on the grey
# image before the resize, e.g. "crop=628:700:224:188,eq=contrast=1.2,".
# mode "threshold" gives hard ink lines with no dots (for thin line logos).
set -euo pipefail

in=$1 out=$2 w=$3 h=${4:--1} pre=${5:-} mode=${6:-dither}
pal=$(mktemp -t palette).png
trap 'rm -f "$pal"' EXIT

# paletteuse needs a 256-pixel palette. Write the exact RGB bytes: a lavfi
# colour source goes through YUV and comes out as #181818 / #FCFBF7.
python3 -c 'import sys; sys.stdout.buffer.write(bytes.fromhex("1A1A1A") * 128 + bytes.fromhex("FEFCF8") * 128)' |
  ffmpeg -v error -y -f rawvideo -pix_fmt rgb24 -s 16x16 -i - "$pal"

if [ "$mode" = threshold ]; then
  quant="lut=c0='if(lt(val,200),0,255)',format=rgb24[g];[g][1]paletteuse=dither=none"
else
  # bayer_scale=0 is the only setting that keeps a visible dot pattern with
  # a two-colour palette; higher values flatten mid-tones into solid areas.
  quant="format=rgb24[g];[g][1]paletteuse=dither=bayer:bayer_scale=0"
fi

ffmpeg -v error -y -i "$in" -i "$pal" -filter_complex \
  "[0]format=rgba,split[a][b];[b]drawbox=c=white:t=fill[w];[w][a]overlay,format=gray,${pre}scale=${w}:${h}:flags=area,${quant}" \
  -frames:v 1 "$out"
