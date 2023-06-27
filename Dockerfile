FROM node:16.14

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install --ignore-scripts

COPY package.json .
COPY package-lock.json .
COPY src/ ./src/
COPY public/ ./public/

RUN chown -R node:node /app

USER node

ENTRYPOINT [ "npm" ]
CMD ["run", "dev"]