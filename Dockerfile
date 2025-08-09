FROM oven/bun:1-alpine AS base
WORKDIR /app

# By copying only the package.json and bun.lockb here, we ensure that the following `-deps` steps are independent of the source code.
# Therefore, the `-deps` steps will be skipped if only the source code changes.
COPY package.json bun.lock ./

FROM base AS prod-deps
RUN bun install --frozen-lockfile --production

FROM base AS build-deps
RUN bun install --frozen-lockfile

FROM build-deps AS build
COPY . .
RUN bun run build

FROM base AS runtime
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/astro.config.mjs ./

# Bind to all interfaces
ENV HOST=0.0.0.0
# Port to listen on
ENV PORT=4321
# Just convention, not required
EXPOSE 4321

CMD bun run preview --port $PORT --host $HOST --allowed-hosts justin-arnold.com