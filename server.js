const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

// we'll load up node's built in file system helper library here
// (we'll be using this later to serve our JSON files

const routes = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// use routes to define api calls
app.use(routes);

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
