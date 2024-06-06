//check username, password in post(login) request
// if exist create new JWT
//Send back to front-end

//setup authentication so only the request with JWT can access the dashboard
const CustomAPIError = require('../errors/custom-error')

const login = async (req, res) => {
    const {username, password} = req.body
    //check in the controller
if(!username || !password){
    throw new CustomAPIError('Please Provide Email and Password', 400)
}




    
  res.send("Fake Login/Register/Signup Route");
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, John Doe`,
    secret: `Here is your authorised data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = { login, dashboard}