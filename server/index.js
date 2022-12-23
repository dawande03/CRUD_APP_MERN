import  express  from "express";
import dotenv from "dotenv";
const app = express()
import Connection from "./database/db.js"
import Routes from "./routes/route.js"
import cors from "cors"
import bodyParser from "body-parser"

dotenv.config();    
app.use(cors());
// default router
app.use(bodyParser.json({extented:true}));
//app.use(bodyParser.urlencoded({extended:true}));
app.use("/",Routes); 
app.get("/",(req,res)=>{   
    res.send("MERNCRUD2 server called")
});
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username,password)
app.listen(4008,()=>{
    console.log("Hi shubham your MERNCRUD2 SERVER CREATED : 4008");
});


//const { Connection } = require("mongoose");
//  const username = process.env.DB_USERNAME;
//  const userpassword = process.env.DB_PASSWORD
//   Connection(username,userpassword)