// routes/upload.routes.js
import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Create uploads folder if it doesn't exist
const uploadDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// Route: POST /api/upload
router.post('/', upload.single('image'), (req, res) => {
  console.log('🔵 Upload endpoint hit!');
  const image = req.file;
  const productColor = req.body.productColor;

  if (!image || !productColor) {
    return res.status(400).json({ error: 'Missing image or productColor' });
  }

  res.status(200).json({
    message: 'Upload received successfully!',
    image: image.filename,
    color: productColor,
  });
});

export default router;
