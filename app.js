//mongodb connection code

//importing required packages

const express = require("express") //framework for nodejs
const cors = require("cors") //allow or restrict requested resources on a web server depend on  request
const bodyParser = require("body-parser")
const mongoose = require("mongoose") // object modeling tool designed to work in an asynchronous environment
const dotenv = require("dotenv") //automatically loads environment variables from a . env file into the process. env object
dotenv.config() //cofiguring dotenv
const productRoute = require("./models/routes/products.routes");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use("/api/product/",productRoute)
port=process.env.PORT 

app.get('/' , async(req,res) =>{
    console.log("connected");
    res.send({"status" : "true"});
})
//mongoose connection
mongoose
  .connect(process.env.dburl,{
    useNewUrlparser:true, // to avoid deprication error
    useUnifiedtopology:true
  })
  .then((data) => {
    console.log("database connected");
  })
  .catch((error) => {
    console.log(error.message);
});

//server connection
app.listen(port , () =>{
    console.log("server created at : http://localhost:3000")
})