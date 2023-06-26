FROM node:16.14

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN chown -R node:node /app

USER node

ENTRYPOINT [ "npm" ]
CMD ["run", "dev"]