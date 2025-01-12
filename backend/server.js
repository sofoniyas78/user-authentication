const express = require("express");
const port = 5000;
import { protect } from '../middleware/authMiddleware.js';

router
  .route('/profile')
  .get(protect, getUserProfile)
const app = express();
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 5000;

app.get("/", req, res) => res.send("API running");
app.listen(port, () => console.log(`Server started on port ${port}`));