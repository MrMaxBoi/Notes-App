# Use Node.js official image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY frontend/package*.json ./frontend/

# Install dependencies
RUN npm install
RUN npm install --prefix frontend

# Copy source code
COPY . .

# Build frontend
RUN npm run build

# Expose port
EXPOSE 5050

# Start the application
CMD ["npm", "start"]