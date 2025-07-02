let db=require("../../db.js");

exports.saveDept=(deptname)=>{
    return new Promise((resolve,reject)=>
    {
        db.query("insert into dept values('0',?)",[deptname],(err,result)=>{
           if(err) 
           {
            reject("Dept not save"+err);
           }
           else
           {
            resolve("dept save successfully...");
           }
        });
    });
}
exports.getAllDept=()=>{
    return new Promise((resolve,reject)=>{
        db.query("select * from dept",(err,result)=>{
            if(err)
            {
                reject(err);
            }
            else{
                resolve(result);
            }
        });
    });
}
exports.delDeptById=(did)=>{
    return new Promise((resolve,reject)=>{
        db.query("delete from dept where deptid=?",[did],(err,result)=>{
            if(err)
            {
                reject(err);
            }
            else{
                resolve("Success");
            }
        });
    });
}

exports.finalUpdateDept=(did,name)=>{
    return new Promise((resolve,reject)=>{
        db.query("Update dept set deptname=? where deptid=?",[name,did],(err,result)=>{
            if(err)
            {
                reject(err);
            }
            else{
                resolve("success");
            }
        });
    });
}
exports.getDeptByName = (deptname) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM dept WHERE deptname LIKE ?", [`${deptname}%`], (err, result) => {
            if (err) {
                reject(err); // No need to prefix with 'Hello'
            } else {
                resolve(result); // Return result as-is
            }
        });
    });
};

