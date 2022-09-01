FROM node:16

WORKDIR /nest-server

COPY package*.json ./

RUN npm install

COPY ..

CMD [ "node", "dist/main.js" ]