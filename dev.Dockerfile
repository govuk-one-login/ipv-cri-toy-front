FROM --platform="linux/arm64" arm64v8/node@sha256:2db41d5788125e1ac12004a27162cab6005576d0efded9595e56cc262d26dc6a AS builder

WORKDIR /app

COPY package.json package-lock.json ./
COPY /src ./src

RUN npm install
RUN npm run build

RUN npm prune

FROM --platform="linux/arm64" arm64v8/node@sha256:2db41d5788125e1ac12004a27162cab6005576d0efded9595e56cc262d26dc6a AS final
RUN ["apt-get", "update"]
RUN ["apt-get", "install", "-y", "tini"]

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
