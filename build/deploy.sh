#!/bin/bash
REPOURL=$( echo $npm_package_repository_url | cut -d '+' -f 2 )
REPOBRANCH=$npm_package_repository_ghbranch

if [ $REPOURL ] && [ $REPOBRANCH ]
then
  npm run build
  cp -r ./dist ./.publish
  cd .publish
  git init
  git checkout -b $REPOBRANCH
  git add .
  git commit -m "Update $(date +"%FT%XZ")"
  git status
  git push $REPOURL $REPOBRANCH -f
  cd ..
  rm -rf .publish

else
  echo "Please specify origin and branch in package.json"
fi
