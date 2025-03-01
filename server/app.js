import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./database/db.js";
import productRoutes from "./routes/productRoute.js";

dotenv.config();
const app = express();
let PORT = process.env.PORT;


//MiddleWare
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));  

//Connect with db
connectDb();


//test route
app.get("/test",(req,res)=>{
    res.send("Test successfull");
})


//Routes

app.use("/api",productRoutes);


app.listen(PORT,()=>{
    console.log(`App listening on port ${PORT}`);
})
