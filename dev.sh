#!/bin/bash

cd app
npm run dev &
cd ..
nodemon server --host
