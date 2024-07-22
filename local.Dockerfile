FROM node:22.5.1-alpine3.19@sha256:5c01902dee6236b66476116fbc4c3603d532edd130fa0a1bb8c7396304939228

ENV PORT 5050

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . ./

RUN npm run build

CMD npm run dev

EXPOSE $PORT
