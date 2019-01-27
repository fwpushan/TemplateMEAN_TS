# UserPortalApp
Template Angular2-Node-MongoDB application for user management


# Set-up
### Note: Please use the below instructions as written to run the app seamlessly
* Install Docker
    link: https://gist.github.com/rstacruz/297fc799f094f55d062b982f7dac9e41
* Clone repository
* Change to project dir (from command line or terminal)
## Docker
#### Unix/Linux/Mac
* Run sh scripts/docker.sh (or sh scripts/docker.compose.v3.sh for docker-compose version 3)
#### Windows
* Create mongo_data folder
* In CMD-PROMPT RUN
    - docker-compose down -v (or docker-compose -f docker-compose.v3.yml down -v for docker-compose version 3)
    - docker-compose build (or docker-compose -f docker-compose.v3.yml build for docker-compose version 3)
    - docker-compose up (or docker-compose -f docker-compose.v3.yml up for docker-compose version 3)
#### If you notice any issues with the application when navigating to the above URL, pause for a moment and hit refresh. We have noticed that deviations from the above process may result in situation where you have to refresh the page.

# Set-up without Docker
* Install node version 8 or above
* Install mongodb server
#### Unix/Linux/Mac
* Run sh scripts/setup.sh
* Run sh scripts/build.sh
* In separate terminal window Run scripts/run.sh
#### Window
* Create mongo_data_local folder
* Run mongo db
* Change Dir to AngularApp folder and run npm install
* Change Dir to NodeTSApp folder and run npm install and npm start
