import express from 'express';
const router = express.Router();

// Sample route
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from Try-On-Me backend!' });
});


export default router;
