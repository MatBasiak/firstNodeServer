const bcrypt = require("bcrypt");
const { MD5 } = require("crypto-js");
const jwt = require("jsonwebtoken");

// bcrypt.genSalt(10,(err,salt)=>{
//    if(err) return next(err);

//    bcrypt.hash('password123',salt,(err,hash)=>{
//         if(err) return next(err);
//         console.log(hash);
//    })
// })

// const id='1010101'
// const secret='supersecret'

// const receivedToken = `eyJhbGciOiJIUzI1NiJ9.MTAxMDEwMQ.qcfU7OwATYHC3H35OquCWJunOfty8IG-N8eqZGRpYeA`;

// const token = jwt.sign(id,secret);
// const decodeToken = jwt.verify(receivedToken,secret);

// console.log(decodeToken);


