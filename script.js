function orderNow(){
    alert("Thank you for ordering! ☕");
}

// Smooth scrolling for navbar links
document.querySelectorAll('.menu-links a').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault(); // prevent default jump
        const targetId = this.getAttribute('href').slice(1); // remove #
        const targetSection = document.getElementById(targetId);
        if(targetSection){
            window.scrollTo({
                top: targetSection.offsetTop - 70, // adjust for header height
                behavior: 'smooth'
            });
        }
    });
});

function goToLogin(){
    window.location.href = "login.html"; // redirect to login page
}

function sendMessage(){
    alert("Message sent successfully 📩");
}
function addToCart(product){
    alert(product + " added to cart ☕");
}
let currentTestimonial = 0;
const testimonials = document.querySelectorAll(".testimonial");

function showTestimonial(index){
    testimonials.forEach(t => t.classList.remove("active"));
    testimonials[index].classList.add("active");
}

function nextTestimonial(){
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

function prevTestimonial(){
    currentTestimonial =
    (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
}
function showMore(){
    alert("Thank you for being part of our coffee journey ☕");
}
function openImage(img){
    document.getElementById("imgModal").style.display = "block";
    document.getElementById("modalImg").src = img.src;
}

function closeImage(){
    document.getElementById("imgModal").style.display = "none";
}
function toggleHeart(event){
    event.stopPropagation(); // prevent img click
    const heart = event.target;
    heart.classList.toggle("liked");
}
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async function(e){
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
    });

    const data = await response.json();
    alert(data.message);

    contactForm.reset();
});
