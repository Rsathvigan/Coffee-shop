const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// API Route Example (Contact Form)
app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: "All fields required" });
    }

    console.log("New Contact Message:");
    console.log(name, email, message);

    res.json({ message: "Message received successfully ☕" });
});

// Login API (No DB)
app.post("/api/login", (req, res) => {
    const { email, password } = req.body;

    if (email === "admin@gmail.com" && password === "123456") {
        return res.json({ message: "Login Successful" });
    }

    res.status(401).json({ message: "Invalid credentials" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
