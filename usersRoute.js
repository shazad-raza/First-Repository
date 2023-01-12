var express = require("express");

var User = require("../Model/UserSchema");
var userroute = express.Router();

userroute.get("/", (req, res) => {
  res.send("User routes is working");
}); // http://localhost:5001/user



userroute.get("/getdata",(req,res)=>{
    User.find({},(err,data)=>{

        if (err){
            res.json({
                status:"failed",
                msg :"failed to retrived the data"
            });
        }
        else { 
            res.json({
                status:"Sucess",
                msg : data
            })

        }
        

    })
})

userroute.post("/newuser", (req, res) => {   //  http://localhost:5001/user/newuser
  var Newuser = new User({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone, 
  });

        Newuser.save()
        .then(()=>{
            res.json({
                status: "sucessfull",
                msg: "Data inserted Sucessful"
            })
        })
        .catch(()=>{
            res.json({
                status: "Failed",
                msg: "Failed Please Try Again"
            })
        })
});  

module.exports = userroute;
