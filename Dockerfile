FROM node:14

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install
RUN npm i install-peers -D

COPY . .
EXPOSE 3000

RUN npm run generate
RUN npm run build

CMD [ "npm", "run", "start" ]
