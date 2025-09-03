require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const secureRoutes = require("./routes/secure");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Read MongoDB Atlas URI from env
const mongoURI = process.env.MONGODB_URI;
if (!mongoURI) {
  console.error(
    "MONGODB_URI not set. Create a .env file based on .env.example"
  );
  process.exit(1);
}

// Connect to MongoDB Atlas
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
    startServer();
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

function startServer() {
  const PORT = process.env.PORT || 4000;
  // Basic health route
  app.get("/", (req, res) => res.json({ ok: true }));
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

// routes
app.use("/api/auth", authRoutes);
app.use("/api/secure", secureRoutes);
