FROM node:16

WORKDIR /usr/src/server1

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "node", "index.js" ]
