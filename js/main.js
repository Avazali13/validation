const signup=document.querySelector(".signup")
const login=document.querySelector(".login")
qeydiyyat.addEventListener("click",()=>{
    signup.classList.remove("hidden")
    login.classList.add("hidden")
    daxilol.classList.remove("bgcolor")
    qeydiyyat.classList.add('bgcolor')

})

daxilol.addEventListener("click",()=>{
    signup.classList.add("hidden")
    login.classList.remove("hidden")
    daxilol.classList.add("bgcolor")
    qeydiyyat.classList.remove('bgcolor')
})


function validatelogin() {

    let x = document.forms["myForm"]["email"].value;
    let y = document.forms["myForm"]["sifre"].value;
    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    
 if (x == "" || !mailformat.test(x) ) {
        document.querySelector(".box3").innerHTML = "Zəhmət olmasa duzgun email daxil edin";
       
      return false;
    }
  
 else  if (y== "" ) {
    document.querySelector(".box4").innerHTML = "Zəhmət olmasa passworduda daxil edin)";
  return false;
}
return true;
  }


function validatesign() {

    let a = document.forms["myForm1"]["emails"].value;
    let b = document.forms["myForm1"]["sifres"].value;
    let c = document.forms["myForm1"]["sifres2"].value;
    let d = document.forms["myForm1"]["ad"].value;
    let e = document.forms["myForm1"]["soyad"].value;
    var mailformats = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    
    if (d== "" ) {
        document.querySelector(".box13").innerHTML = "Zəhmət olmasa adınızı daxil edin)";
      return false;
    }
    else if (e== "" ) {
        document.querySelector(".box0").innerHTML = "Zəhmət olmasa soyadınızı daxil edin)";
      return false;
    }

    else if (a == "" || !mailformats.test(a) ) {
        document.querySelector(".box").innerHTML = "Zəhmət olmasa duzgun email daxil edin";
       
      return false;
    }

else if (b== "" ) {
    document.querySelector(".box1").innerHTML = "Zəhmət olmasa passworduda daxil edin)";
  return false;
}

else  if (c!==b ) {
    document.querySelector(".box2").innerHTML = "Zəhmət olmasa passwordlarin eyniliyini yoxlayin)";
  return false;
}

return true;
  }













//   if (x!==/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
//   {
//     return (false)
//   }
//  alert("Name must be filled out");













// function gree() {
// var email = document.forms.RegForm.email.value;
// var password=document.forms.RegForm.sifre.value;

// if (email == "" ) {
//     window.alert("Please enter a valid e-mail address.");
//     email.focus();
//     return false;
// }
  
// if (password == "") {
//     alert("Please enter your password");
//     password.focus();
//     return false;
// }
// return true;
// }




// // const daxil=document.querySelector("#submit")
// const email=document.querySelector("#son3")
// // const sifre= document.querySelector("#son4")
// const dax=document.querySelector("#submit2")
// dax.addEventListener("submit",()=>{
//     // e.preventDefault();
//     if(email.value==""){
// alert("You must be fill email area")
//     }
// })


 

// function validateFamily()
// {
    
// const email=document.getElementById("son3")
// var stringf=document.getElementById("son3").value 
// if(stringf==''){
//     alert("Family name must be filled out");
//     return false;
//    }
//    else if(
//     /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test( stringf )
//    ){
//     alert("Family name can only contain alphanumeric characters and hypehn")
//     return false;
//    }
//    return true;
// }


// var stringf=document.getElementById("son3").value 
// const emailregex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
// if(!emailregex.test.(stringf)){
//     alert("Slama sabahiz ceyri");
//     return false
// }

//     var ck_password =  /^[A-Za-z0-9-]/;
// var stringff=document.getElementById("son4").value 
//             if(son4.value=="")
//             {

//                 alert("Family name can only contain alphanumeric characters and hypehns(-)");
              

//             }
        
