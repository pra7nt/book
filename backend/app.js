const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books

mongoose
  .connect(
    "mongodb://admin:uhmNELg8MHgTmaix@ac-1yfuebq-shard-00-00.gv8cqys.mongodb.net:27017,ac-1yfuebq-shard-00-01.gv8cqys.mongodb.net:27017,ac-1yfuebq-shard-00-02.gv8cqys.mongodb.net:27017/?ssl=true&replicaSet=atlas-sd2s59-shard-0&authSource=admin&retryWrites=true&w=majority"

    
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
// const express= require('express') ;
// const mongoose = require('mongoose') ;
// const router = require("./routes/book-routes") ;
// const cors = require ("cors") ;

// const app= express() ;
// app.use(cors()) ;
// app.use(express.json());
// // middlewares 
// // app.use("/",(req,res,next)=>{
// // res.send("this is our startig app") ;
// // });
// app.use("/books",router)//localhost:5000/books
// mongoose.connect("mongodb://admin:txeSamSF6pRhthJz@ac-ecml0yn-shard-00-00.uephyz8.mongodb.net:27017,ac-ecml0yn-shard-00-01.uephyz8.mongodb.net:27017,ac-ecml0yn-shard-00-02.uephyz8.mongodb.net:27017/?ssl=true&replicaSet=atlas-o3qk4v-shard-0&authSource=admin&retryWrites=true&w=majority").then(()=>console.log("Connnected to database")).then(()=>{
//     app.listen(6000) ; 

// }).catch((err)=>console.log(err)) ;


// // "name":"Sample",
// // "author":"ABC",
// // "description":"this is the sample book" ,
// // "price":1203,
// // "available":true



// // mongodb+srv://admin:txeSamSF6pRhthJz@cluster0.uephyz8.mongodb.net/bookStore?retryWrites=true&w=majority


// uhmNELg8MHgTmaix









// // txeSamSF6pRhthJz
// //xuEY3nrMZVvrIi4y
// "mongodb+srv://admin:xuEY3nrMZVvrIi4y@cluster0.gfr8ug2.mongodb.net/book-store?retryWrites=true&w=majority"

// "mongodb://admin:xuEY3nrMZVvrIi4y@ac-nmyahbv-shard-00-00.gfr8ug2.mongodb.net:27017,ac-nmyahbv-shard-00-01.gfr8ug2.mongodb.net:27017,ac-nmyahbv-shard-00-02.gfr8ug2.mongodb.net:27017/?ssl=true&replicaSet=atlas-dvj1hy-shard-0&authSource=admin&retryWrites=true&w=majority"