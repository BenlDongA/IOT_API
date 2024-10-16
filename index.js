const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');


const MONGODB_URL='mongodb+srv://cuong:cuong@cluster0.ya5c7.mongodb.net/IOT?retryWrites=true&w=majority&appName=Cluster0'



const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URL);
        console.log('Connected to the database successfully');
    } catch (error) {
        console.error('Error connecting to the database', error);
        process.exit(1); 
    }
};

connectDB();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(cors());

const locationRoute = require('./api/routes/location.route')
app.use("/v1/api/location",locationRoute)
app.get('/',(req,res) => res.send("weclome"))

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    
});