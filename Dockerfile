FROM node:14

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install --production
RUN npm i install-peers -D

COPY . .
EXPOSE 3000

RUN npm run generate

CMD [ "npm", "run", "start" ]
