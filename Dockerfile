# Use Node.js as the base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy the package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React app
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
