const express = require('express');
const sequelize = require('sequelize');
const router=express.Router()

const {Address} = require('../models')
const addressRepo = require('../repo/address.repo');

// const address = require('../models/address');
// const { users } = require('../repo/user.repo');


// router.get('/address' , (req,res)=>{

//     addressRepo.addresses().then(
//         users=>{
//         res.json({data: users , message:"list success"});

//     }).catch( err=>{
//         res.status(400).json({message:err.message})
//     })
// })


router.get('/address' , async(req,res) =>{

    var addressList =  await addressRepo.addresses();
    return res.send(addressList)
})


module.exports=router;