#!/bin/sh
echo "Shell Running"
echo $PG_DATABASE
npm run migration:generate -- my_init
npm run migration:run
echo "Migration Successfully"
echo "START SERVER";
npm run start:prod