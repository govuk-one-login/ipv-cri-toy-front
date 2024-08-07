FROM node:22.6.0-alpine3.19@sha256:eff1d6375c1f6102f1a39553aec1be773e3a62cf39251bc2517c3a95a4f28af3 AS builder

WORKDIR /app

COPY package.json package-lock.json ./
COPY /src ./src

RUN npm install
RUN npm run build

RUN npm prune

FROM node:22.6.0-alpine3.19@sha256:eff1d6375c1f6102f1a39553aec1be773e3a62cf39251bc2517c3a95a4f28af3 AS final

RUN ["apk", "--no-cache", "upgrade"]
RUN ["apk", "add", "--no-cache", "tini"]

WORKDIR /app

# Copy in compile assets and deps from build container
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/src ./src

# Add in dynatrace layer
COPY --from=khw46367.live.dynatrace.com/linux/oneagent-codemodules-musl:nodejs / /
ENV LD_PRELOAD /opt/dynatrace/oneagent/agent/lib64/liboneagentproc.so

ENV PORT 8080
EXPOSE $PORT

ENTRYPOINT ["tini", "--"]

CMD ["npm", "start"]
