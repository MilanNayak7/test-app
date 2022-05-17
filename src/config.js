require('dotenv').config();
const mongoose = require('mongoose');
const db = process.env.DB;
mongoose.connect(db);