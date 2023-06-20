const express = require('express');
const sequelize = require('sequelize');
const router=express.Router()
const userRouter = require('../router/user_route')
const addressRouter = require('../router/address.route')
const mediaRouter = require('../router/media.route')

router.use(userRouter)
router.use(addressRouter)
router.use(mediaRouter)

module.exports=router;
