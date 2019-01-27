FROM node:9
ENV PORT 8001
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./NodeTSApp/package*.json ./

RUN npm install -d -y
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY ./NodeTSApp .

#RUN npm run build-client
RUN rm -rf ./dist-server
RUN npm run build

EXPOSE $PORT

ENTRYPOINT [ "npm", "run", "docker_start" ]

#CMD [ "npm", "run", "start" ]
#ENTRYPOINT /usr/bin/tail -f /dev/null
