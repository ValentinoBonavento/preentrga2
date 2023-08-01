import mongoose from "mongoose";

const connectionString = 'mongodb://localhost:27017/coderhouse'

    try {
        await mongoose.connect(connectionString)
        console.log('Conectado a mongoDB');
    } catch (error) {
        console.log(error);   
    }
