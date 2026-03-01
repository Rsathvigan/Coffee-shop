# Coffee Shop - Dockerized Application

## Description
This is a static Coffee Shop web application built using HTML, CSS, and JavaScript.

## Docker Setup Instructions

### Prerequisites
- Docker installed
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