const express = require('express');
const sequelize = require('sequelize');
const router = express.Router()
const fs = require('fs');
const { Media } = require('../models')

const { v4: uuidv4 } = require('uuid');

const multer = require('multer');
const storage = multer.memoryStorage();

const sharp = require('sharp');
const upload = multer({ 

    storage:storage,
    fileFilter:function(req,file,cb){
        if(file.mimetype=='image/png' || file.mimetype=='image/jpg' || file.mimetype=='image/jpeg' || file.mimetype=='image/webp'){
            cb(null,true)
        }else{
            cb(null,false)
            cb(new Error('not allowed this file'));
        }
    }

 })

router.post('/profile', upload.single('avatar'), async function (req, res, next) {
    let file = req.file;

    console.log("file :"+ file);

    let body = req.body;
    let uuid = uuidv4();

    let destination = "uploads/" + uuid;
    fs.mkdir(__basedir + "/" + destination, {}, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("folder created");
        }
    });


    let large_pic = destination + "/large_pic.webp";

    await sharp(file.buffer)
        .resize(200)
        .toBuffer()
        .then(data => {
            fs.writeFile(__basedir + "/" + large_pic, data, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("folder created");
                }
            });
        })
        .catch(err => { console.log(err) });


    Media.create({

        uuid:uuid,
        path:large_pic,
        name:file.orignalname  
    }).then(data=>{

        return res.json(data);
    }).catch(err=>{
        console.log(err);
    })


});


module.exports = router;