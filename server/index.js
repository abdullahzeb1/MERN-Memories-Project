import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTING_URL = 'mongodb://127.0.0.1:27017/Memories-Project';
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTING_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port:${PORT}`));
    console.log('Database is connected');
  })
  .catch((error) => console.log(error.message));
