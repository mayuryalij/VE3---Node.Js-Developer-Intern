const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
dotenv.config();

const PORT = process.env.PORT || 3000;

const connectToDatabase = require("./src/Database/db"); 
connectToDatabase();

const app = express();
app.use(bodyParser.json());

const corsOptions = {
    origin: 'https://ve3-node-js-developer-intern.onrender.com',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));

const taskRoutes = require('./src/Routes/taskRoutes');
const authRoutes = require('./src/Routes/authRoutes');


const swaggerDocs = require('./swagger');
swaggerDocs(app);

app.use('/tasks', taskRoutes);
app.use('/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});