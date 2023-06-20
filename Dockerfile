# Base image
FROM node:16-alpine AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project directory
COPY . .

# Build the Angular app
RUN npm run build

# Production image
FROM nginx:alpine

# Copy the build files to the NGINX public directory
COPY --from=build /usr/src/app/dist/clustering /usr/share/nginx/html

# Expose port 80 for the NGINX server
EXPOSE 4200

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]