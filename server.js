const express = require('express');
const path = require("path");
const Pizza = require('./models/pizzaModel')

const db = require("./db");

const app = express()

app.use(express.json());

const pizzasRoute = require('./routes/pizzasRoute')
const userRoute = require('./routes/userRoute')
const ordersRoute = require('./routes/ordersRoute')



app.use('/api/pizzas',pizzasRoute)
app.use('/api/users/', userRoute)
app.use('/api/orders/',ordersRoute)

// app.get('/',(req,res)=>{
//     res.send("Server working " + port);
// });

if (process.env.NODE_ENV === "production") {  app.use(express.static(path.join(__dirname, "/client/build")));  app.get("*", (req, res) => {    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));  });} else {  app.get("/", (req, res) => {    res.send("<h1>Hello From Node Server vai nodemon</h1>");  });}

const port = process.env.PORT || 8000

app.listen(port, () => 'Server running on port');