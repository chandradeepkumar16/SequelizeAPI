const express = require('express');
const sequelize = require('sequelize');
const router = express.Router();

const {User} = require('../models')

router.get('/users' , async(req,res) =>{
    var userList =  await User.findAll();
    return res.send(userList)
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
            'firstName' : req.body.firstName,
            'lastName' : req.body.lastName,
            'email' : req.body.email
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
            'firstName' : req.body.firstName,
            'lastName' : req.body.lastName,
            'email' : req.body.email
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