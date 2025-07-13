// routes/base.routes.js
import express from 'express';

const router = express.Router();

// Test route to check if server is running
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from Try-On-Me backend!' });
});

export default router;
