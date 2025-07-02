let deptmodel=require("../models/savedeptmodel.js");

exports.saveDept=((req,res)=>{
    let {name}=req.body;
    // console.log(name);
        let promise=deptmodel.saveDept(name);
        promise.then((result)=>{
            res.render("adddept.ejs",{msg:result});
        }).catch((err)=>{
             res.render("adddept.ejs",{msg:err});
        });
    
});
exports.homePage=(req,res)=>{
    res.render("home.ejs");
}
exports.newDept=(req,res)=>{
    res.render("adddept.ejs",{msg:""});
}
exports.getAllDept=(req,res)=>{
   let promise=deptmodel.getAllDept();
   promise.then((result)=>{
    res.render("viewdept.ejs",{deptList:result});
   });
   promise.catch((err)=>{
    res.send(err);
   });
}
exports.delDept=(req,res)=>{
   let did=parseInt(req.query.did);
   let promise=deptmodel.delDeptById(did);
   promise.then((result)=>{
    let p=deptmodel.getAllDept();
   p.then((result)=>{
    res.render("viewdept.ejs",{deptList:result});
   });
   p.catch((err)=>{
    res.send(err);
   });
   });
   promise.catch((err)=>{
   
   });
}
  
exports.updateDept = (req,res) =>{
    res.render("updatedept.ejs",{deptName:req.query.dn, 
                              deptId:req.query.did});
   
}

exports.deptFinalUpdate=(req,res)=>{
    let {id,name}=req.body;
    let promise=deptmodel.finalUpdateDept(id,name);
    promise.then((result)=>{
         let p=deptmodel.getAllDept();
    p.then((result)=>{
    res.render("viewdept.ejs",{deptList:result});
    })
    });
    promise.catch((err)=>{
        res.send("Dept not updated");
    });
}
exports.searchDeptByName = (req, res) => {
    let name = req.query.dn;
    let promise = deptmodel.getDeptByName(name);
    promise.then((result) => {
        res.json({ array: result }); // Send proper JSON format
        console.log(result);
    }).catch((err) => {
        res.status(500).send("Something went wrong");
    });
};
