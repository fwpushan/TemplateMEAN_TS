FROM node:9

# Create app directory
# Creating Working Dir
RUN mkdir -p /usr/src/AngularApp
WORKDIR /usr/src/AngularApp

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./AngularApp/package*.json ./

RUN npm install -d -y
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY ./AngularApp .

# Remove dist
RUN rm -rf ./dist
#RUN npm run build-client
RUN npm run build


# Export Volume
VOLUME /usr/src/AngularApp
#ENTRYPOINT ["npm", "run", "build"]
#ENTRYPOINT /usr/bin/tail -f /dev/null
