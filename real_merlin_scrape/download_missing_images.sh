#!/bin/bash
BASE_URL="https://www.merlin.computer"

echo "Downloading missing images..."

# Images with leading slash (absolute paths)
curl -s "${BASE_URL}/lock.svg" -o lock.svg
curl -s "${BASE_URL}/logo.svg" -o logo.svg
curl -s "${BASE_URL}/stay.svg" -o stay.svg
curl -s "${BASE_URL}/try%20merlin.svg" -o "try merlin.svg"
curl -s "${BASE_URL}/every.svg" -o every.svg
curl -s "${BASE_URL}/how.svg" -o how.svg

# Images without leading slash (relative paths)
curl -s "${BASE_URL}/1.png" -o 1.png
curl -s "${BASE_URL}/2.png" -o 2.png
curl -s "${BASE_URL}/3.png" -o 3.png
curl -s "${BASE_URL}/cloud-small.webp" -o cloud-small.webp
curl -s "${BASE_URL}/everybody.webp" -o everybody.webp
curl -s "${BASE_URL}/place.webp" -o place.webp
curl -s "${BASE_URL}/timeline.webp" -o timeline.webp

# External gradient image
curl -s "https://generation-sessions.s3.amazonaws.com/33569ab87b8d7c5f332f78b85feaec4e/img/gradient.png" -o gradient.png

echo "All missing images downloaded!"
ls -lh *.{png,svg,webp} 2>/dev/null | wc -l
