# Coffee Shop - Dockerized Application

## Description
This is a static Coffee Shop web application built using HTML, CSS, and JavaScript.

## Docker Setup Instructions
-<img width="373" height="183" alt="Screenshot 2026-03-01 224143" src="https://github.com/user-attachments/assets/2c999513-0432-404a-a426-7d532441e8f7" />

### Prerequisites
 Docker installed
- Docker Compose installed

### Build Docker Image
docker build -t coffee-shop .

### Run Container
docker run -p 8080:80 coffee-shop

Then open:
http://localhost:8080

### Using Docker Compose
docker-compose up --build

Stop:
docker-compose down
