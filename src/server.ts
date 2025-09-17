import dotenv from 'dotenv';
import app from './app';

dotenv.config()

import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URL as string).then((data)=>{
    console.log("MongoDB connection succed");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function(){
        console.log(`The server is running on Port: ${PORT}`);
        
    })
}).catch((err)=>{
    console.log("ERROR on MongoDB connection", err);
    
})