
let db=require("../../db.js");
let ddmodel=require("../models/savedeptmodel.js");
let empcrud=require("../models/empcrudmodel.js");
const e = require("express");
exports.newEmployee=(req,res)=>{
    let promise=ddmodel.getAllDept();
    promise.then(result=>{
         res.render("newEmp.ejs",{deptList:result,msg:""});
    });
}

exports.saveEmployee=(req,res)=>{
  let {name,email,contact,salary,deptid}=req.body;
  let filename=req.file.filename;
  let promise=empcrud.saveEmployee(name,email,contact,salary,filename,deptid);
  promise.then((result)=>{
    ddmodel.getAllDept().then((deptList)=>{
         res.render("newEmp.ejs",{deptList:deptList,msg:result});
    });
  }).catch((err)=>{
    ddmodel.getAllDept().then((deptList)=>{
         res.render("newEmp.ejs",{deptList:deptList,msg:err});
  });
});
}

exports.verifyEmail = (req, res) => {
  let  userEmail = req.query.e;

  db.query("SELECT * FROM employee WHERE email = ?", [userEmail], (err, result) => {
    if (err) {
      console.error(err);
      res.send("Internal Server Error"); 
    } else {
      if (result.length > 0) {
        res.send("Email already exists"); 
      } else {
        res.send(""); 
      }
    }
  });
};



