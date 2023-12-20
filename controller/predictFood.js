require('dotenv').config();
const predict = require("../util/predictImage");
const recommendation = require("../util/recommendation");
const jwt = require('jsonwebtoken');
const db = require('../util/connect_db');

const jwtKey = process.env.JWT_KEY;

const getToken = (headers) => {
  const authorizationHeader = headers.authorization;
  if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
      return (authorizationHeader.substring(7)); // Remove 'Bearer ' from the header
  }
  else {
      const error = new Error("You need to login");
      error.status = 401;
      throw error;
  }
}


const predictFood = async(req,res,next)=>{
  try {
    const token = getToken(req.headers);
    const decoded = jwt.verify(token, jwtKey);
    const loggedUserRef = await db.collection('users').doc(decoded.userId).get();
    if (!loggedUserRef.exists) {
      const error = new Error("User doesn't exist!");
      error.status = 400;
      throw error;
    }
    if(req.file){
      const predictResult = await predict(req.file.buffer);
      const result = []

      for (const predicted of predictResult) {
        const data =  await recommendation(predicted);
        result.push(data);
      }

      res.status(200).json({
        status: "Success",
        result
      })
    }else{
      const error = new Error("image is empty");
      error.status = 400;
      throw error;
    }
  } catch (error) {
    res.status(error.status || 500).json({
      status: "Error",
      message: error.message
    })
  }
}

module.exports = predictFood;