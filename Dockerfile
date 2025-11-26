# Multi-stage build
# Stage 1: Build frontend
FROM node:18-alpine AS frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# Stage 2: Build Spring Boot backend
FROM maven:3.9-openjdk-21-slim AS backend-build
WORKDIR /app
COPY backend-spring/pom.xml ./
COPY backend-spring/src ./src
RUN mvn clean package -DskipTests

# Stage 3: Runtime
FROM openjdk:21-jre-slim
WORKDIR /app

# Copy built JAR from backend build stage
COPY --from=backend-build /app/target/notes-app-1.0.0.jar app.jar

# Copy built frontend from frontend build stage
COPY --from=frontend-build /app/frontend/dist ./static

# Expose port
EXPOSE 5050

# Start the application
CMD ["java", "-jar", "app.jar"]