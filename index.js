const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hi , This is emon morol");
});

app.listen(port, () => {
  console.log(`Server Running @${port}`);
});
