const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const session = require('express-session');

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));


// Session
app.use(session({
  secret: 'blank',
  resave: false,
  saveUninitialized: false,
}));

// Routes
const walkRoutes = require('./routes/walkRoutes');
const userRoutes = require('./routes/userRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const dogRoute = require('.routes/dogs');

app.use('/api/walks', walkRoutes);
app.use('/api/users', userRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/api/dogs', dogRoute);

// Export the app instead of listening here
module.exports = app;