const express = require('express')
const app = express();
const cors = require('cors');
app.use(express.json());
require('dotenv').config(); //it is neccessary to get the env variables from .env
const dbConfig = require("./config/dbConfig");
app.use(cors());

const port = process.env.PORT || 5000;


const blogsRoute = require("./routes/blogRoute") 
app.use("/api/blogs", blogsRoute);

app.listen(port , ()=> console.log(`Node Js server started at ${port}`))