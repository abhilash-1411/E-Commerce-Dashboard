const express=require('express');
const mongoose=require('mongoose');
const app=express();
app.use(express.json());

// Connect to MongoDB and fetch products
const connectDB = async () => {
        await mongoose.connect('mongodb://localhost:27017/E-comm');
        const productSchema = new mongoose.Schema({  });
        const Product = mongoose.model('products', productSchema);
        const data=await Product.find();
        console.log(data);
};
connectDB();




app.get('/',(req,resp)=>{
    resp.send("App is working")
})

app.listen(8080)