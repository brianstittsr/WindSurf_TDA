#!/bin/bash

# Create public directory if it doesn't exist
mkdir -p public

# Create a white logo placeholder with text
magick -size 400x200 xc:transparent -gravity center -pointsize 48 -fill white -font Arial-Bold -annotate 0 "SLUTTY VEGAN" "public/slutty-vegan-logo.png"
