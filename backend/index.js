const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors()); // allow frontend to connect
app.use(express.json());

// Example API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Node.js backend!" });
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
