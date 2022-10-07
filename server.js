const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.resolve(__dirname, "front-end")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "front-end", "index.html"));
});

app.listen(process.env.PORT || 7000, () => {
});
