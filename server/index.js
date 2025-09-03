require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");

const authRoutes = require("./routes/auth");
const secureRoutes = require("./routes/secure");

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// connect DB
connectDB();

// routes
app.use("/api/auth", authRoutes);
app.use("/api/secure", secureRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("🚀 Server running on port", PORT));
