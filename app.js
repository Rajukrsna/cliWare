const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken'); // For JWT handling
const cookieParser = require('cookie-parser');
const authenticateToken = require('./middlewares/auth');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();
app.use(cookieParser());


// Serve static files
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// Middleware
app.use(expressLayouts);

// Layout setup for EJS
app.set('layout', 'layout'); // Ensure you have the 'layout.ejs' in the views folder

// Database connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Database connected'))
    .catch(err => console.error('Database connection error:', err));


app.use('/userAuth', require('./routes/userAuth'));
app.use('/profile', require('./routes/profile'));
app.use('/viewStats',require('./routes/viewStats'))
app.use('/PhotoProofRoute', require('./routes/PhotoProofRoute'));
app.use('/posts', require('./routes/posts'));
// Root route
app.get('/', (req, res) => res.redirect('/userAuth/register'));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
