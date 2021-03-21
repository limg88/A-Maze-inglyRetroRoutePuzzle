FROM node:14

WORKDIR /mnt/

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9090

ENTRYPOINT ["node", "server/index.js"]
