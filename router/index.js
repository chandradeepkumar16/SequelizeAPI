const express = require('express');
const sequelize = require('sequelize');
const router=express.Router()
const userRouter = require('../router/user_route')

router.use(userRouter)

module.exports=router;