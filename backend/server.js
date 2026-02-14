const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// Middleware
// CORS Configuration - Allow specific origins
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  process.env.FRONTEND_URL,
  // We'll add your Vercel URL here after deployment
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (mobile apps, Postman, curl)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions)); // Enable CORS with custom configuration // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Import Routes
const contactRoutes = require('./routes/contactRoutes');
const projectRoutes = require('./routes/projectRoutes');

// Mount Routes - Connect routes to URLs
app.use('/api/contact', contactRoutes);
app.use('/api/projects', projectRoutes);

// Test Route - Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: '🚀 Portfolio API is running!',
    status: 'success',
    endpoints: {
      contact: {
        submit: 'POST /api/contact',
        getAll: 'GET /api/contact'
      },
      projects: {
        getAll: 'GET /api/projects',
        getFeatured: 'GET /api/projects/featured',
        getById: 'GET /api/projects/:id',
        create: 'POST /api/projects'
      }
    }
  });
});

// Health Check Route
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK',
    timestamp: new Date().toISOString() 
  });
});

// 404 Handler - Catch unmatched routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Error Handler - Catch server errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
});

// Server Configuration
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV}`);
  console.log(`📡 API Endpoints:`);
  console.log(`   - Contact: http://localhost:${PORT}/api/contact`);
  console.log(`   - Projects: http://localhost:${PORT}/api/projects`);
});