require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const routes = require("./routes/index.js");

app.use(express.json());
app.use(express.urlencoded( { extended: true } ));

//Routes
app.use(routes);

//Listen
app.listen(port, () => {
	console.log(`Todos App is running at port http://localhost:${port}`)
})