let db=require("../../db.js");

exports.saveEmployee=(...empData)=>{
    return new Promise((resolve,reject)=>{
        db.query("insert into employee values('0',?,?,?,?,?,?)",[...empData],(err,result)=>{
            if(err)
            {
                reject("Data not save");
            }
            else{
                resolve("Employee save successfully....");
            }
        })
    });
}

exports.verifyEmail=(req,res)=>{
    return new  Promise((resolve,reject)=>{
        db.query("select * from employee where email=?",[userEmail],(err,result)=>{
            if(err)
            {
                reject(err);
            }
            else{
                resolve(result);
            }
        })
    });
}