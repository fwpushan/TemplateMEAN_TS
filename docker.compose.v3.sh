#!/bin/bash
docker-compose -f docker-compose.v3.yml down -v && docker-compose -f docker-compose.v3.yml build && docker-compose -f docker-compose.v3.yml up
