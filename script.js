 function  signup(){
 const name=document.getElementById("name").value;
 const email=document.getElementById("email").value;
 const password=document.getElementById("password").value;
 const confirmpassword=document.getElementById("confirmpassword").value;
 const rememberme = document.getElementById("rememberme").checked;
 const error=document.getElementById("error");
 const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


if (!name || !email || !password || !confirmpassword) {
        error.textContent = "All fields are required.";
        return;
      }

if(!emailPattern.test(email)){
    error.textContent="Please Enter Valid Email-Id";
    return;
}



if (password.length < 6) {
        error.textContent = "Password must be at least 6 characters.";
        return;
      }


if (password !== confirmpassword) {
        error.textContent = "Passwords do not match.";
        return;
      }

localStorage.setItem("user",JSON.stringify({name,email,password}));
alert("Sign Up Succesfully");

if(rememberme){
    localStorage.setItem("rememberemail",email);
}else{
    localStorage.removeItem("rememberemail");
}

window.location.href = "login.html" ;

}



function signin(){
 const email=document.getElementById("email").value;
 const password=document.getElementById("password").value;
 const rememberme=document.getElementById("rememberme").checked;
 const error=document.getElementById("error");

 const  userdata=JSON.parse(localStorage.getItem("user"));

if(!email || !password){
    error.textContent="Please Enter Email-Id and Password";
    return;
}

if(!userdata || userdata.email !== email || userdata.password !== password){
   error.textContent="Please Enter Valid Credentials. ";
   return;
}


localStorage.setItem("currentuser",userdata.name);
alert("Login Succesfull");

if(rememberme){
    localStorage.setItem("rememberemail",email);
}else{
    localStorage.removeItem("rememberemail");
}

window.location.href="welcome.html";

}

function showmessage(){
const user=localStorage.getItem("currentuser");
const welcomemessage=document.getElementById("welcome");

if(user){
    welcomemessage.textContent=`Welcome,${user}`;
}else{
    window.location.href="login.html";
}

}

function autofillemail(){
    const remembered = localStorage.getItem("rememberemail");

    if (remembered && document.getElementById("email")) {
    document.getElementById("email").value = remembered;
    const rememberCheckbox = document.getElementById("rememberMe");
    if (rememberCheckbox) rememberCheckbox.checked = true;
  }
}
 
 window.onload = function () {
  if (document.getElementById("email")) {
    autofillemail();
  }

  if (document.getElementById("welcome")) {
    showmessage();
  }
};