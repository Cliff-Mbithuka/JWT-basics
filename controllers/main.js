//check username, password in post(login) request
// if exist create new JWT
//Send back to front-end
//setup authentication so only the request with JWT can access the dashboard

const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')

const login = async (req, res) => {
    const {username, password} = req.body;
    //check in the controller
if(!username || !password){
    throw new CustomAPIError('Please Provide Username and Password', 400)
}

//Just for Demo, normally provided by DB!!!
const id = new Date().getDate()

//try to keep payload small, better experience for user
//just for demo, in production use long, complex and unguessable string Value!!!!!
const token = jwt.sign({id, username}, process.env.JWT_SECRET,{expiresIn: '30d'})

res.status(200).json({msg: 'user created', token})

};

const dashboard = async (req, res) => {
  const authHeader = req.headers.authorization;
  if(!authHeader || !authHeader.startsWith('Bearer ')){
    throw new CustomAPIError('No Token Provided', 401)
  }

const token = authHeader.split(' ')[1];



console.log(token);
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, John Doe`,
    secret: `Here is your authorised data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = { login, dashboard}