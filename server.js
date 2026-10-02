const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.json({
    message: "Hello from OpenChoreo Node.js backend!"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "UP"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on port ${PORT}`);
});
