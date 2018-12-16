#!/bin/bash

read -p "是否需要更新 npm run docs: (y/N)" run_docs
if [ "$run_docs" == 'y' -o "$run_docs" == 'Y' ]
then
  echo 'npm run docs...'
  npm run docs
  echo 'npm run docs... done'
else
  echo 'npm run docs... canceled...'
fi

git status

read -p "请输入 commit 信息(n 取消; 回车默认): " commitMsg
if [ "$commitMsg" == 'n' ]
then
  echo '操作取消...'
  exit 0
fi

if [ "$commitMsg" == '' ]
then
  commitMsg='add something...'
fi

echo "Exec: git commit -am $commitMsg"

git add .

git commit -am "$commitMsg"

git push

echo 'done...'
