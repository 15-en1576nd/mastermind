FROM node:16-alpine as builder

# install dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

# Copy in project
COPY . .

# Make a production build
RUN npm run build


FROM node:16-alpine as runner
WORKDIR /app
# Copy build output from builder
COPY --from=builder /app/build/ /app/build/

# Install production dependencies
COPY package.json package-lock.json ./
RUN npm ci --production

# Start the 
EXPOSE 3000
CMD ["node", "build"]