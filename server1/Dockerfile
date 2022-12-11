FROM node:alpine

WORKDIR /server1

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "./index.js"] 
