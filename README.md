# ☕ Coffee Shop Website  
## Dockerized Frontend Web Application  
<img width="1900" height="912" alt="2" src="https://github.com/user-attachments/assets/559d5044-f2ea-4cbc-9842-3b19b04c908e" />

---

## 👥 Work Distribution

| Team Member | Responsibilities |
|-------------|------------------|
| R. Sathvigan | Frontend Development, Dockerfile Creation, UI Implementation, Container Testing |
| P. Dhilukshan | Login System Development, Docker Compose Setup, Documentation, Deployment Testing |

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
Coffee-shop/
│
├── index.html
├── login.html
├── style.css
├── login style.css
├── script.js
├── login script.js
├── images/
│
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
└── README.md
---
### Live Demo
The Smart Resume Builder application is deployed using GitHub Pages.

You can access the live website here: coffee-shop-one-blue.vercel.app
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
<img width="373" height="183" alt="Screenshot 2026-03-01 224143" src="https://github.com/user-attachments/assets/52157ae8-25e3-4e36-b4d7-9a3bc6d9bd37" />

