const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes/index.js");

app.use(express.json());
app.use(express.urlencoded( { extended: true } ));

//Routes
app.use(routes);

//Listen
app.listen(port, () => {
	console.log(`Todos App is running at port http://localhost:${port}`)
})