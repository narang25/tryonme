import express from 'express';

const router = express.Router();

// ✅ Sample test route
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from Try-On-Me backend!' });
});

// 🧠 You will add more API routes here later like:
// - /upload
// - /color-compatibility
// - /suggest-pairing

export default router;
