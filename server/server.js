const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const mongoose = require('mongoose')
const dns = require('dns')
const passport = require('passport')

// Override DNS servers to fix ECONNREFUSED with MongoDB Atlas SRV records
dns.setServers(['8.8.8.8', '8.8.4.4']);
const authRoute = require('./routes/authRoute')

//Passport configuration
require('./config/passport')


const PORT = process.env.PORT || 5000;
const app = express();

console.log('Connecting to:', process.env.MONGODB_URI);
mongoose.connect(`${process.env.MONGODB_URI}/google-auth`, { family: 4 })
.then(()=> console.log('Database connected'))
.catch((err)=> console.log('Database connection error:', err));

app.use(cors({
    origin: process.env.UI_URL,
    credentials: true
}))

app.use(cookieParser());
app.use(express.json());
app.use(passport.initialize())

//routes
app.use('/auth', authRoute)

// Export the app for Vercel
module.exports = app;

// Only listen if not running as a Vercel serverless function
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
}