const dotenv = require('dotenv');
dotenv.config();

const cloudinary = require('cloudinary');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const db = process.env.MONGODB_URI;
const db = 'mongodb://admin1:admin123@ds163014.mlab.com:63014/mern-project';

const Users = require('./models/User');


app.use(express.json());

app.get('/', (req, res)=>{
  res.send('HELLO backend');
})


mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started on port ${port}`));

cloudinary.config({ 
  cloud_name: 'cloudinary-thomas-lawrence', 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});