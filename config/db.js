const mongoose = require('mongoose')

const connectDB = async ()=>{
  try {
    mongoose.connect(process.env.MONGO_URL);
    return  `MongoDB Connected`
  } catch (error) {
    console.error(error.message);
    return "error connecting to db"
  }
}

module.exports = connectDB
