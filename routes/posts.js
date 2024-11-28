const express = require('express');
const router = express.Router();
const multer = require('multer');
const cors = require('cors');
const User = require('../models/User');
const Post = require('../models/post');
const authenticateToken = require('../middlewares/auth');

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, './uploads'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

router.get('/', (req,res)=>{
res.render('post'

)
})
// Create a post
router.post('/api/posts',authenticateToken, upload.single('image'), async (req, res) => {
  
  const user= req.user.id;
  
  const {  body } = req;
  const { content } = body;
 const userN = await User.findById(user);

  try {
    const newPost = new Post({
      user,
      username:userN.username,
      content:content,
      image: req.file ? `/uploads/${req.file.filename}` : ''
    });
   
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all posts
router.get('/api/posts', async (req, res) => {
  try {
    const posts = await Post.find().populate('user', 'username profileImage').sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports= router;
