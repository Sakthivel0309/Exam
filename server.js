const express = require("express");
const path = require("path");

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// HOME ROUTE (THIS FIXES "Cannot GET /")
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Protected PDF route
app.get("/full-notes", (req, res) => {
  res.sendFile(path.join(__dirname, "pdfs", "full-notes.pdf"));
});

// Render uses PORT env
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
