let searchDept = (str) => {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let jsonObj = JSON.parse(this.responseText);
      

      let tablebody = document.getElementById("tblBody");
      tablebody.innerHTML = "";

      jsonObj.array.forEach((element, index) => {
        let row = document.createElement("tr");

        let col = document.createElement("td");
        col.innerHTML = index + 1;
        row.appendChild(col);

        col = document.createElement("td");
        col.innerHTML = element.deptname;
        row.appendChild(col);

        col = document.createElement("td");
        col.innerHTML = "<a href=''>DELETE</a>";
        row.appendChild(col);

        col = document.createElement("td");
        col.innerHTML = "<a href=''>UPDATE</a>";
        row.appendChild(col);

        tablebody.appendChild(row);
      });
    }
  };
  xhttp.open("get", "/searchDeptByName?dn=" + str, true);
  xhttp.send();
};

let checkEmailExistance=(str)=>{
   let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200){
      if(this.responseText.length>0)
      {
        document.getElementById("labelMsg").innerHTML=this.responseText;
        document.getElementById("uemail").focus();
      }
      else{
        document.getElementById("labelMsg").innerHTML="";
      }
    }
  };
  xhttp.open("get","/searchEmail?e="+str,true);
  xhttp.send();
}
