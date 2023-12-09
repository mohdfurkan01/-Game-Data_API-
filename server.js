const mongoose = require('mongoose')
const express = require('express');
const dotenv = require('dotenv');
//const gameRoutes = require('./routes/gameRoutes');
const gameRoutes = require('./routes/gameRoute');
const connectDB = require('./config/databaseConn')

//dotenv.config();
dotenv.config({path: './config/.env'})
//dotenv.config({ path: '.task2/config/.env' });
//dotenv.config({ path: "./config/.env" });


const app = express();

//connect DB
connectDB();

app.use(express.json());

//import route
app.use('/api/games', gameRoutes);


app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

