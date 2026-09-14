// server.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');   //without use express.json()
const mongoose = require('mongoose');
const nodemailer = require("nodemailer")
// const jwt=require('jsonwebtoken')
const cors = require("cors")
const dns = require("dns");  //import dns module for resolve domain name to IP address
dns.setServers(["8.8.8.8","8.8.4.4", "1.1.1.1"]);
const app = express();
app.use(cors())
const transporter=nodemailer.createTransport({
  service:"gmail",
  auth:{
    user:process.env.EMAIL_USER,
    pass:process.env.EMAIL_PASS
  }
})
console.log("MongoURI:",process.env.MONGO_URI)
console.log("Email user:",process.env.EMAIL_USER)
console.log("PORT:",process.env.PORT)
// Middleware
app.use(bodyParser.json());

let isMongoConnected=false

async function connectDB(){
  if(isMongoConnected) return
     await mongoose.connect(process.env.MONGO_URI)
     isMongoConnected=true
     console.log("MongoDB connected successfully")
  }
  

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI).then(()=>{
//     console.log("Connection Successfull")
// }).catch((err)=>{
//   console.log("error in db  connection")
//   console.log(err)
// })


// Define Schema
const blogSchema = new mongoose.Schema({
  newTitle: String,
  newContent: String,
  date:String,
  likes:Number
});

const Blog = mongoose.model('Blog', blogSchema);  //model for data add

// Routes   fetch all data from db to frontend
// Routes - fetch all blogs from MongoDB and show them to everyone
app.get('/api/blogs', async (req, res) => {
  try {
    await connectDB() // Connect to MongoDB before fetching blogs

    const blogs = await Blog.find({}) // Get all blog documents from MongoDB

    console.log(blogs)
    res.json(blogs) // Send blogs to frontend
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err.message })
  }
})


// Like a blog post - this route can be used by users
app.patch('/api/blogs/like/:id', async (req, res) => {
  try {
    await connectDB() // Connect to MongoDB before updating likes

    const blog = await Blog.findById(req.params.id) // Find blog using its ID

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' })
    }

    // Increase the likes count by 1
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $inc: { likes: 1 } },
      { new: true } // Return the updated blog
    )

    res.json(updatedBlog)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err.message })
  }
})


// Add a new blog - currently used by the admin
app.post('/api/blogs', async (req, res) => {
  try {
    await connectDB() // Connect to MongoDB before adding a blog

    const blog = new Blog({
      newTitle: req.body.newTitle,
      newContent: req.body.newContent,
      date: req.body.date,
      likes: req.body.likes
    })

    const newBlog = await blog.save() // Save the new blog in MongoDB

    res.status(201).json(newBlog)
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: err.message })
  }
})
  //new keyword creates a new object/instances from a class or mongoose model(Blog) new onj->new Blog(...)
   

//contact schema
const contactSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  message:{
    type:String,
    required:true
  },
  date:{
    type:Date,
    default:Date.now
  }
},{
  collection:'contact'
})

const Contact=mongoose.model('contact',contactSchema)

//JWT Middleware
const authMiddleware=(req,res,next)=>{
  const authHeader=req.headers.authorization
  const token =authHeader?.split(" ")[1]

  if(!token){
    return res.status(401).json({
      success:false,
      message:"Unauthorized"
    })
  }
  try{
    const decoded=jwt.verify(token,
      process.env.JWT_SECRET
    )
    req.user=decoded
    next()
  }
  catch (error){
    return res.status(401).json({
      success:false,
      message:"Invalid or expired token"
    })
  }
}

//save contact message to mongoDB
app.post('/api/contact',async (req,res)=>{
  try{
    await connectDB()
    const contact=new Contact({
      name:req.body.name,
      email:req.body.email,
      message:req.body.message
    })

    const newContact=await contact.save()

    await transporter.sendMail({
      from:process.env.EMAIL_USER,
      to:process.env.EMAIL_USER,
      replyTo: req.body.email,
      subject:`New contact message from ${req.body.name}`,
      text:`Name:${req.body.name}
      Email:${req.body.email}
      Message:${req.body.message}`
    })

    res.status(201).json({
      success:true,
      message:"Message sent successfully",
      contact:newContact
    })
  }
  catch (err){
    console.log(err)
    console.log("failed to send message")
    res.status(500).json({
      success:false,
      message:err.message
    }) 
  }
})

//get all contact messages
app.get('/api/contact',async (req,res)=>{
  try{
    await connectDB()
    
    const contacts=await Contact.find({}).toSorted({
      date:-1
    })
    console.log(contacts)
    res.json({
      success:true,contacts
    })
  }catch (err){
    res.status(500).json({
      success:false,
        message:err.message
      })
    }
    })
 
// Start server
app.listen(process.env.PORT || 5000, () => console.log('Server running on port 5000'));
