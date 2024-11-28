
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const authenticateToken = require('../middlewares/auth'); // Corrected path
const multer = require('multer');
const path = require('path');

// Configure multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Directory to store uploaded images
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    },
  });
  
  const upload = multer({ storage });

router.get('/', (req,res)=>{
    res.render('homepage')
});


router.get('/media',authenticateToken, async (req,res)=>{
   
    const user = await User.findById(req.user.id);
    const totalCO2 = user.co2Reduced.reduce((sum, entry) => sum + entry.amount, 0);
    const users = await User.find().sort({ points: -1 }).limit(10).select('username points');

    res.render('profile',{user,tot:totalCO2, users})
})

router.post('/upload-profile-image', authenticateToken, upload.single('profileImage'), async (req, res) => {
  try {
    const userId = req.user.id; // Get user ID from the authenticated token
    const profileImagePath = `/uploads/${req.file.filename}`; // Path to uploaded file

    // Update user's profileImage in the database
    await User.findByIdAndUpdate(userId, { profileImage: profileImagePath });

    res.redirect('/profile/media'); // Redirect back to the profile page
  } catch (error) {
    console.error(error);
    res.status(500).send('Error uploading profile image');
  }
});

module.exports=router;
