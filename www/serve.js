const express = require("express");
const app = express();

const port = 3002;

app.listen(port, () => {
  console.log("Application started and Listening on port " + port);
});

// serve your css as static
app.use(express.static(__dirname + "/dist"));

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/dist" + "/index.html");
});
