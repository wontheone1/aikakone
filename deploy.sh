#!/bin/bash
set -e
boot build
cd target/public
git init
git add .
git commit -m "Deploy to GitHub Pages"
git push --force "git@github.com:wontheone1/aikakone.git" master:gh-pages
rm -rf .git
