const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require("./config/db");
dotenv.config({ path: "./backend/.env" });

const app = express();
app.use(express.json());
connectDB();

app.use(cors());

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/posts', require('./routes/postRoutes'));

app.listen(5000,
    () => console.log('Server running on port 5000.')
);