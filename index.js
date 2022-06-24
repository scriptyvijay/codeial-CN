const express = require("express");
const app = express();
const port = 8000;

//use a router
app.use("/", require("./routes"));
app.use("/users", require("./routes/users"));

//set views engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
