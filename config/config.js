const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://dhruvin770725:dhruvin770725@cluster0.9zrqnha.mongodb.net/MarketPlace?retryWrites=true&w=majority&appName=Cluster0'

const connectDatabase = ()=>{
    const connect = mongoose.connect(mongoURI);

        if(connect){
            console.log("Database connected successfully");
        }
        else{
            console.log("Database connection failed");
        }
}

module.exports = connectDatabase;

