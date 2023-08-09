const express= require('express')
const app=express()

const mongoose = require('mongoose')
const cors = require('cors')
const User = require('./model/users')
// middleware
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())


// connect to database
const db_url = 'mongodb://localhost:27017/users'
mongoose.connect(db_url).then(()=>{
    console.log("connsection established")
})

app.post('/register', async(req,res)=>{

    User.findOne({email:req.body.email}).then((userData)=>{
        if (userData) {
         // err message
         res.send({message:"user alredy exists"})            

        } else {
              // add the data

              let uData = new User({
                fname:req.body.fname,
                lname:req.body.lname,
                email:req.body.email,
                password:req.body.password
              }) 
  
              uData.save().then(()=>{
                res.send({message:"user registered succesfully"})
              }).catch(()=>{
                res.send({message:"user registraion failed. try after sometime"})
              })
        }
    })
})


app.post('/login',(req,res)=>{
  User.findOne({email:req.body.email})
  .then((userData)=>{
      if(userData){
        if(req.body.password === userData.password){
          res.send({message:"login succenfull" , status:200})
        }else{
          res.send({message:"invalid user id or passowrd"})
        }
      }
      else{
        res.send({message:'user not found'})
      }
    }
  )
})

app.listen(4000,()=>{
console.log('server is running at the port 4000')
})

