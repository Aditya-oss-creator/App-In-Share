require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
const cors = require('cors')

// Cors 
const corsOptions = {
  origin: process.env.ALLOWED_CLIENTS.split(',')
  // ['http://localhost:3000', 'http://localhost:5000', 'http://localhost:3300']
}

// static files & Middleware
app.use(cors(corsOptions))
app.use(express.static("public"));


// Database
const connectDB = require("./config/db");
connectDB();

app.use(express.json());

// Template Engine
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

// Routes
app.use("api/files", require("./routes/files"));
app.use("files", require("./routes/show"));
app.use("files/download", require("./routes/download"));

app.get('/',(req,res)=>{
  res.render('index')
})

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});
