const { Address } = require("../models")

exports.addresses = () =>{
    return Address.findAll({
        
    });
}

// const { Address } = require("../models");

// exports.addresses = async () => {
//   try {
//     const addresses = await Address.findAll();
//     return addresses;
//   } catch (error) {
//     throw error;
//   }
// };