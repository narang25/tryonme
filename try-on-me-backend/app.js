import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/index.js'; // make sure this file exists!

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Register your routes
app.use('/api', router); // now /api/hello will work

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
