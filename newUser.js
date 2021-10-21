var tabl = document.querySelector(".table");
var alluser = document.querySelector("#alluser");

var tbl = document.querySelector("table");
tabl.style.display = "none";


var noco = document.querySelector(".containerco");
noco.style.display = "none";
var add = document.querySelectorAll(".btn-green");
var remove = document.querySelectorAll(".btn-red");
function adm(e) {
      var copn = noco.cloneNode(true);
      copn.style.display = "flex";
      var co = e.target.parentElement.parentElement;
      co.parentElement.insertBefore(copn, co.nextSibling);
}
function removeaa(e) {
      e.target.parentElement.parentElement.style.display = "none";
}
//  for(let i=0;i<add.length;i++){
//            add[i].addEventListener("click",function(e){

//            });
//            remove[i].addEventListener("click",function(e){});
//  }
function checkValiData() {
      var b=0;
      var userData = [];
      let allrequiredField = document.querySelectorAll(".wi");
      for (let i = 0; i < allrequiredField.length; i++) {
            allrequiredField[i].style.color = "black";
      }
      var emailVal = document.querySelectorAll("#user #email");
      var phonNumVal = document.querySelectorAll("#user #tel");
      var userVal = document.querySelectorAll("#user #text");
      var userPass = document.querySelectorAll("#user #password");
      var alre = document.querySelectorAll(".re-fi");
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      var phoneno = /^\d{10}$/;
      // console.log("first");
      // console.log(emailVal);
      // let newEmailarray = Array.from(emailVal).filter((ev) => ev.parentElement.parentElement.style.display != 'none');
      // let newPasswordarray = Array.from(userPass).filter((ev) => ev.parentElement.parentElement.style.display != 'none');
      // let newPhonearray = Array.from(phonNumVal).filter((ev) => ev.parentElement.parentElement.style.display != 'none');
      // let newUserarray = Array.from(userVal).filter((ev) => ev.parentElement.parentElement.style.display != 'none');
      // console.log("after");
      //console.log() me agar invalid variable use kerte hai ya phir koi error dete hai console se 
      //ya debugging kerte hai console se toe agar koi bhi error aayi toe uske aage vaala code run nahi
      //hoga phele console.log me jo bhi error dikh rahi hai phele use sahi kerenge phir hi uske aage 
      //vale code run ho payenge.
      // console.log(newEmailarray); error no variable of newEmailArray
      // console.log("chala kya");
      // console.log(newArray[0]);
      for (let i = 0; i < emailVal.length; i++) {
            if (emailVal[i].parentElement.parentElement.style.display != 'none') {

                  // let c = 0;
                  // console.log("x");
                  // console.log(emailVal[i]);
                  let ema = emailVal[i].value;
                  var reru = emailVal[i].parentElement.lastElementChild;
                  reru.children[1].innerHTML ="Required";
                  reru.children[2].innerHTML ="Required";
                  let pho = phonNumVal[i].value;
                  let user = userVal[i].value;
                  let pass = userPass[i].value;
                  if (user == "" || user == null) {

                        c = 1;
                        console.log(reru.children[0]);
                        reru.children[0].style.color = "red";
                        userVal[i].focus();

                  }
                  if (ema == "" || ema == null) {
                        c = 1;
                        reru.children[1].style.color = "red";
                        emailVal[i].focus();

                  }
                  if (!(ema == "" || ema == null) && !(ema.match(mailformat))) {
                        c = 1;
                     
                        reru.children[1].innerHTML = "Not Valid Email";
                        reru.children[1].style.color = "red";
                        emailVal[i].focus();


                  }
                  if (pho == "" || pho == null) {
                        c = 1;
                        reru.children[2].style.color = "red";
                        phonNumVal[i].focus();

                  }
                  if (!(pho.match(phoneno)) && !(pho == "" || pho == null)) {
                        c = 1;
                        
                        reru.children[2].innerHTML = "Not Valid Number";
                        reru.children[2].style.color = "red";
                        phonNumVal[i].focus();

                  }

                  if (pass == "" || pass == null) {
                        c = 1;
                        reru.children[3].style.color = "red";
                        userPass[i].focus();


                  }

                 
                  console.log(userData);
                  console.log(i);
                  if (i > 0 && i < emailVal.length) {
                        for (let k = 0; k < b; k++) {
                              let checkUsername = userData[k][0];
                              let checkEmail = userData[k][1];
                              let checkPhon = userData[k][2];
                              let checkpass = userData[k][3];
                            
                              if (checkUsername == user && user!="") {
                                    reru.children[0].innerHTML = "Already Used";
                                    reru.children[0].style.color = "red";

                              }
                              if (checkEmail == ema && ema!="" && !(reru.children[1].innerHTML == "Not Valid Email")) {
                                    reru.children[1].innerHTML = "Already Used Email";
                                    reru.children[1].style.color = "red";
                              }
                              if (checkPhon == pho && checkPhon!="" && !(reru.children[2].innerHTML == "Not Valid Number")) {
                                    reru.children[2].innerHTML = "Already Used Number";
                                    reru.children[2].style.color = "red";
                              }
                              if (checkpass == pass && pass!="") {
                                    reru.children[3].innerHTML = "Already Used Password";
                                    reru.children[3].style.color = "red";
                              }

                        }
                  }
                
                  userData[b] = new Array(4);
                 
                  userData[b][0] = user;
                  userData[b][1] = ema;
                  userData[b][2] = pho;
                  userData[b][3] = pass;
                  console.log(userData);
                  console.log(userData[1])
                  //javascript me array ki value hamesha ek hi dikhti hai . jab debugg kerte hai 
                  // us vakt array ki value dhhere dheere loop ke saath badti hai lekin javascript me 
                  // vo array ki future value ko hi show kerata rehta hai.
                  b++;


            }


      }
      for (let v = 0; v < allrequiredField.length; v++) {
            if (allrequiredField[v].style.color == "red") {
                  return;
            }
      }

      alluser.style.display = "none";
      tabl.style.display = "block";
      for (let z = 0; z < userData.length; z++) {
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            td1.innerHTML = userData[z][0];
            let td2 = document.createElement("td");
            td2.innerHTML = userData[z][1];
            let td3 = document.createElement("td");
            td3.innerHTML = userData[z][2];
            let td4 = document.createElement("td");
            td4.innerHTML = userData[z][3];
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tbl.appendChild(tr);
            console.log(tr);

      }



      // console.log(userData);

}