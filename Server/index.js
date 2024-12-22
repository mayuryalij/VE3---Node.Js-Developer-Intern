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
app.use(cors({
    origin: 'http://localhost:6000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

const taskRoutes = require('./src/Routes/taskRoutes');
const authRoutes = require('./src/Routes/authRoutes');


const swaggerDocs = require('./swagger');
swaggerDocs(app);

app.use('/tasks', taskRoutes);
app.use('/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});