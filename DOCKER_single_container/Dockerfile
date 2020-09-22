# specify base image
FROM node:alpine

# this ensures that inside of the container we don't just dump our folders and accidentally ovedrride something
 WORKDIR /usr/iljasapp

# copy everything from current working dir to container - need to do before npm install
# COPY ./ ./

# only copying package.json, not the other files. We need this for npm install
COPY ./package.json ./

# install dependencies
RUN npm install

# now copying the rest. in this way if we make changes to files inside the project we don't have to reinstall all dependcies during rebuild
COPY ./ ./

# Default command
CMD ["npm", "start"]
