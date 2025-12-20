
const PORT = process.env.PORT || 5000;
const app = require('./app');
const getDatabase  = require('./config/database');

getDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`Server listening to the port: ${PORT} and ${process.env.NODE_ENV}`)
});

process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    console.log('server is shutting down due to unhandledRejection');
    server.close(() => process.exit(1));
});

process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    console.log('server is shutting down due to uncaughtException');
    server.close(() => process.exit(1));
});
