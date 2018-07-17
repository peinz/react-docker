#!/bin/sh

if [[ "${NODE_ENV}" = "production" ]]; then
  npm run compile && nginx
else
  npm run dev-start
fi