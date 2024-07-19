import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
const PORT=process.env.PORT || 4000;

// connect to mongodb
const URI=process.env.MongoDBURI;
try {
    mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
    console.log("Connected to Mongodb");
    
} catch (error) {
    console.log("Error",error);
    
    
}


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})