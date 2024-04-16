// import the Express.js framework into our application
const express = require("express")

const mongoose = require('mongoose')

const app = express()

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


// app.use(express.urlencoded({ extended:true }));
//app.use(bodyparser.json())
//connection to mongodb


mongoose.connect("mongodb://localhost/todo_express",{
    useUnifiedTopology: true,

});

// middlewares



// app.use(express.static("public"));

app.set("view engine", "ejs");

app.use(require("./routes/index"));

app.use(require("./routes/todo"));



app.listen(3000, () => console.log("server started listening on port 3000"))


