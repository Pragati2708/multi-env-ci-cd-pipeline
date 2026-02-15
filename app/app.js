const express = require("express");
const os = require("os");

const app = express();
const PORT = 3000;

// Root endpoint
app.get("/", (req, res) => {
  res.send("🚀 DevOps CI/CD Pipeline - DEV Environment");
});

// Health check endpoint (very important in real projects)
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    hostname: os.hostname(),
    uptime: process.uptime()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
