#!/bin/bash
 mkdir -p ./mongo_data && docker-compose down -v && docker-compose build && docker-compose up
