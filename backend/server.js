const express=require('express');
const app=express();
const cors=require('cors');
app.use(express.json());
app.use(cors());
app.use("/api/product",require('./routes/product_route'))
app.listen(5000,()=>{
    console.log("Server started on the PORT no 5000")
})
