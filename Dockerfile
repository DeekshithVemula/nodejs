FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./


RUN npm install request

RUN npm install express

COPY . .


EXPOSE 80

CMD ["node" ,"node.js"]
