require("dotenv").config();
const mongoose = require("mongoose");
function connectDB() {
  // Database connection 🥳
  mongoose.connect(process.env.MONGO_CONNECTION_URL);

  mongoose.connection
  .once('open', () => console.log("Database connected 🥳🥳🥳🥳"))
  .on('error',  (err) => {console.log(err)});
}

module.exports = connectDB;

// Aditya9695:bJK4acELXwVIhMCE