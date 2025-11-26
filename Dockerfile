# Multi-stage build
# Stage 1: Build frontend
FROM node:18-alpine AS frontend-build
WORKDIR /app
COPY frontend/package*.json ./frontend/
RUN cd frontend && npm install
COPY frontend/ ./frontend/
RUN cd frontend && npm run build

# Stage 2: Build Spring Boot backend
FROM maven:3.9-openjdk-21-slim AS backend-build
WORKDIR /app
COPY backend-spring/pom.xml ./backend-spring/
COPY backend-spring/src ./backend-spring/src/
# Copy frontend build to Spring Boot static resources
COPY --from=frontend-build /app/frontend/dist ./backend-spring/src/main/resources/static/
RUN cd backend-spring && mvn clean package -DskipTests

# Stage 3: Runtime
FROM openjdk:21-slim
WORKDIR /app

# Copy built JAR from backend build stage
COPY --from=backend-build /app/backend-spring/target/notes-app-1.0.0.jar app.jar

# Expose port
EXPOSE 5050

# Start the application
CMD ["java", "-jar", "app.jar"]