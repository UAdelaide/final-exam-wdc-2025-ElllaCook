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

app.use('/api/walks', walkRoutes);
app.use('/api/users', userRoutes);
app.use('/dashboard', dashboardRoutes);

// Export the app instead of listening here
module.exports = app;