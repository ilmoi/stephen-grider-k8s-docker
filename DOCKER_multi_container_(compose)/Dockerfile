# not actually used in docker compose. remnant file.

FROM node:alpine

WORKDIR '/app'

COPY ./package.json .
RUN npm install
COPY . .

CMD ["npm", "start"]
