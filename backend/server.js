const app = require('./app'); // import your app
const connectDatabase  = require('./config/database');

// Connect to MongoDB
connectDatabase();

const PORT = process.env.PORT || 5000;

// Listen on Render-assigned port
const server = app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT} | NODE_ENV=${process.env.NODE_ENV}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    console.log('Server shutting down due to unhandledRejection');
    server.close(() => process.exit(1));
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    console.log('Server shutting down due to uncaughtException');
    server.close(() => process.exit(1));
});
