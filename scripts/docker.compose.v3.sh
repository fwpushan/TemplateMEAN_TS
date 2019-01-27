#!/bin/bash
mkdir -p ./mongo_data && docker-compose -f docker-compose.v3.yml down -v && docker-compose -f docker-compose.v3.yml build && docker-compose -f docker-compose.v3.yml up
