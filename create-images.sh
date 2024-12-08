#!/bin/bash

# Create directories if they don't exist
mkdir -p public/menu public/locations

# Create placeholder images for menu items
for i in {1..3}; do
  convert -size 800x600 xc:lightgray -gravity center -pointsize 60 -annotate 0 "Menu Item $i" "public/menu/menu-item-$i.jpg"
done

# Create placeholder images for locations
for i in {1..3}; do
  convert -size 800x600 xc:lightgray -gravity center -pointsize 60 -annotate 0 "Location $i" "public/locations/location-$i.jpg"
done
