#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build

# Copy a custom 404 to manage github pages bug (https://github.com/rafgraph/spa-github-pages)
cp ./404.html dist

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/adrianhurt/vue-route-values-examples.git master:gh-pages

cd -