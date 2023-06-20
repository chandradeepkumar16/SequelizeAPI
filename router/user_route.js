const express = require('express');
const sequelize = require('sequelize');
const router = express.Router();

const {User} = require('../models')
const userRepo = require("../repo/user.repo")

// router.get('/users' , async(req,res) =>{

//     var userList =  await userRepo.users();
//     return res.send(userList)
// })

router.get('/users' , (req,res)=>{

    userRepo.users().then(
        users=>{
        res.json({data: users , message:"list success"});

    }).catch( err=>{
        res.status(400).statusMessage({message:err.message})
    })
})



router.post('/users' , async(req, res)=>{
    console.log(req.body)
    if(req.body){
        // var user = new User({
        //     'firstName' : req.body.firstName,
        //     'lastName' : req.body.lastName,
        //     'email' : req.body.email
        // })
        var result = await User.create({
            'first_name' : req.body.first_name,
            'last_name' : req.body.last_name,
            'email' : req.body.email,
            created_at: new Date()
        });

        return res.send(result);
    }else{
        return res.send({"error" :"body not found"});
    }
});



router.put('/users' ,async (req,res)=>{
    console.log(req.body)

    if(req.body){
        var result = await User.update({
            'first_name' : req.body.first_name,
            'last_name' : req.body.last_name,
            'email' : req.body.email,
            created_at: new Date()
        },
        {
            where : {
                'id' : req.body.id
            }
        });

        return res.send(result)

    }else{

        return res.send({"error" : "body not found"});
    }
})


router.delete('/users/:id' , async(req,res)=>{
    console.log(req.body)

    if(req.params.id){
        var result = await User.destroy({
            where : {
                'id' : req.params.id
            }
        })

        return res.send({"status" : "id has been deleted Successfully"})
    }else{
        return res.send({"error" : "body not found"});
    }

})


module.exports=router;