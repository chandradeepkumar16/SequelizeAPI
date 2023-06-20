const {User} = require("../models")

exports.users = () =>{
    return User.findAll();
}