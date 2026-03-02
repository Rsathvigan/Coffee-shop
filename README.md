# ☕ Coffee Shop Website  
## Dockerized Frontend Web Application  
<img width="1900" height="912" alt="2" src="https://github.com/user-attachments/assets/559d5044-f2ea-4cbc-9842-3b19b04c908e" />

---

## 👥 Group Members

- **ITBNM-2313-0076** – R. Sathvigan  
- **ITBNM-2313-0076** – P. Dhilukshan  

---

## 📌 Project Description

This project is a modern and responsive **Coffee Shop Website** developed using HTML, CSS, and JavaScript.  

The application provides an interactive frontend experience including product showcase, testimonials, gallery, login system, and contact form.  

The project has been containerized using **Docker** and deployed using an **Nginx lightweight Alpine image**.

---

## 🎯 Project Objectives

- Develop a fully responsive coffee shop website  
- Implement interactive frontend features using JavaScript  
- Containerize the application using Docker  
- Deploy using a lightweight and optimized Docker image  

---

## 🛠️ Technologies Used

- HTML5  
- CSS3  
- JavaScript (Vanilla JS)  
- Font Awesome  
- Docker  
- Docker Compose  
- Nginx (Alpine Image)

---

## 📂 Project Structure
<img width="605" height="511" alt="3" src="https://github.com/user-attachments/assets/6425b0c2-6cf1-4fce-840f-8b5e56991fd8" />


---

## ✨ Application Features

### 🏠 Home Section
- Hero banner
- Smooth navigation scroll
- Modern UI layout

### ☕ Products Section
- Coffee product cards
- Hover animation effects
- Add-to-cart alert functionality

### 🖼️ Gallery Section
- Responsive grid layout
- Image modal preview on click

### 💬 Testimonials Section
- Dynamic testimonial slider
- Previous and Next navigation buttons

### 📖 About Us Section
- Centered content layout
- Styled description panel

### 📩 Contact Form
- Form validation
- Fetch API integration (`/api/contact`)
- Alert confirmation message

### 🔐 Login & Register Page
- Animated sign-in and sign-up form
- Social media icon integration

---

# 🐳 Docker Implementation

The application is containerized using Docker for portability and consistency.

---

## 🔹 Docker Architecture

- **Base Image:** nginx:alpine  
- **Architecture Type:** Single-container  
- **Port Exposed:** 80  
- **Mapped Port:** 8080  
- **Static files location inside container:** `/usr/share/nginx/html`  

---

## 🔹 Dockerfile Overview

- Uses lightweight Alpine version of Nginx  
- Removes default Nginx files  
- Copies project files into container  
- Exposes port 80  
- Runs Nginx in foreground mode  

---

### Run Container
docker run -p 8080:80 coffee-shop
## 📌 Project Description

Then open:
http://localhost:8080
This project is a modern and responsive **Coffee Shop Website** developed using HTML, CSS, and JavaScript.  

### Using Docker Compose
docker-compose up --build
The application provides an interactive frontend experience including product showcase, testimonials, gallery, login system, and contact form.  

Stop:
docker-compose down
The project has been containerized using **Docker** and deployed using an **Nginx lightweight Alpine image**.

## 🔹 Build Docker Image

```bash
docker build -t coffee-shop .
<img width="1918" height="1017" alt="1" src="https://github.com/user-attachments/assets/c950b33f-d0f6-4b37-8bff-b11b466886f5" />
