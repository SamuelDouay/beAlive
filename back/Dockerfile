# syntax=docker/dockerfile:1

FROM node:17.3.0

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "node", "build/index.js" ]