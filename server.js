const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));

app.get("/", (req, res) => {
  res.send("Student Login API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

/* const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/User");

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/student-login")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// Register API
app.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if all fields are provided
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save user
        const user = new User({
            name,
            email,
            password: hashedPassword
        });

        await user.save();

        res.status(201).json({
            message: "Registration successful"
        });

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

// Login API
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "User not found"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid password"
            });
        }

        res.status(200).json({
            message: "Login successful"
        });

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

// Start server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); */