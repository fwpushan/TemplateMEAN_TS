#!make
# ------------------------------------------------------------------------------
# Makefile -- BC WildFire
# ------------------------------------------------------------------------------

include .env

export $(shell sed 's/=.*//' .env)
export GIT_LOCAL_BRANCH?=$(shell git rev-parse --abbrev-ref HEAD)
export DEPLOY_DATE?=$(shell date '+%Y%m%d%H%M')

define deployTag
"${PROJECT}-${GIT_LOCAL_BRANCH}-${DEPLOY_DATE}"
endef

ifndef PROJECT_NAME
$(error The PROJECT_NAME variable is missing.)
endif

ifndef ENVIRONMENT
$(error The ENVIRONMENT variable is missing.)
endif

#ifndef BUILD_TARGET
#$(error The BUILD_TARGET variable is missing.)
#endif

DIR := ${CURDIR}

all 		: help
.DEFAULT 	: help
.PHONY	    : local database close-local close-production  print-status

# ------------------------------------------------------------------------------
# Task Aliases
# ------------------------------------------------------------------------------

local:      |  build-local run-local         ## Task-Alias -- Run the steps for a local-build.
local_debug: | build-local run-debug


# ------------------------------------------------------------------------------
# Status Output
# ------------------------------------------------------------------------------

print-status:
	@echo " +---------------------------------------------------------+ "
	@echo " | Current Settings                                        | "
	@echo " +---------------------------------------------------------+ "
	@echo " | PROJECT:      $(PROJECT_NAME) "
	@echo " | BRANCH:       $(GIT_LOCAL_BRANCH) "
	@echo " +---------------------------------------------------------+ "
	@echo " | BUILD_TARGET: $(BUILD_TARGET) "
	@echo " +---------------------------------------------------------+ "
	@echo " | Docker-Compose Config Output "
	@echo " +---------------------------------------------------------+ "
	@docker-compose -f docker-compose.yml config


# ------------------------------------------------------------------------------
# Development Commands
# ------------------------------------------------------------------------------

build-local: ## -- Target : Builds the local development containers.
	@echo "+\n++ Make: Building local Docker image ...\n+"
	@docker-compose -f docker-compose.yml build 

setup-local: ## -- Target : Prepares the environment variables for local development.
	@echo "+\n++ Make: Preparing project for local development ...\n+"
	@cp .config/.env.dev .env

run-local: ## -- Target : Runs the local development containers.
	@echo "+\n++ Make: Running locally ...\n+"
	@docker-compose -f docker-compose.yml up -d

run-debug: ## -- Target : Runs the local development containers.
	@echo "+\n++ Make: Running locally for debugging...\n+"
	@docker-compose -f docker-compose.yml up


close-local: ## -- Target : Closes the local development containers.
	@echo "+\n++ Make: Closing local container ...\n+"
	@docker-compose -f docker-compose.yml down




# ------------------------------------------------------------------------------
# Helper Commands
# ------------------------------------------------------------------------------
	
database: ## <Helper> :: Executes into database container.
	@echo "Make: Shelling into local database container ..."
	@docker-compose -f docker-compose.yml exec postgres psql -U $(DB_USER) -W $(DB_DATABASE)

help:  ## ** Display this help screen.
	@grep -h -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'