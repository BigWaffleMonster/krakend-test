FROM node:alpine

WORKDIR /server2

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "./index.js"] 
