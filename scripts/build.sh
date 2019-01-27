#!/bin/bash
 cd ./AngularApp && npm run build && cd .. && mongod --dbpath ./mongo_data_local
