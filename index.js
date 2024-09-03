const express = require("express");

const app = express();
const PORT = process.env.PORT || 4040;

app.get("/", (_req, res) => {
  return res.json({
    status: 200,
    message: "Welcome to the API",
  });
});

app.get("/api", (_req, res) => {
  return res.json({
    status: 200,
    message: "Welcome to the API Endpoint",
  });
});

app.listen();
