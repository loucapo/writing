#!/usr/bin/env bash

if [ "$1" == "install-dev" ]; then
  xargs < npm_globals_dev npm install -g
fi

if [ "$1" == "grunticon" ]; then
  grunticon src/sass/image out
  cp out/icons.data.svg.css src/sass/.
fi