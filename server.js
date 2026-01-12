const express = require("express");
const path = require("path");

const app = express();
app.use(express.static("public"));

app.get("/full-notes", (req, res) => {
  res.sendFile(path.join(__dirname, "pdfs/full-notes.pdf"));
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
  