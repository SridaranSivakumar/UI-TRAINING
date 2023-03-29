validate =(element, regexChecking) => {
    var flag = true; 
   if(element.value=="") {
        document.getElementById(element.name).innerHTML = "is required";
        let getId=document.getElementById(element.id);
       getId.style.borderColor = "red";
       flag = false;                
    }else if (!(regexChecking).test(element.value)) {
        document.getElementById(element.name).innerHTML = "not valid";
        let getId=document.getElementById(element.id);
        getId.style.borderColor = "red";
        flag = false;
    } else{
        let getId=document.getElementById(element.id);
        getId.style.borderColor = "blue";
        document.getElementById(element.name).innerHTML = "";
        flag= true;
    }
    return flag;
    }
    document.querySelector(".complete-btn").addEventListener("click", (event) => {
    event.preventDefault();
    var formFields = document.querySelectorAll("form input");
   
    var flag = true;
    formFields.forEach(element => {
        console.log(regexChecking[element.name]);
        if (validate(element, regexChecking[element.name]) == false) {
            
            flag = false;
        }
    });

    if (flag) {
        document.getElementById("form").submit();
    }
});
    
const regexChecking = {
    fname: /^[a-zA-z]{0,30}$/,
    lname: /^[a-zA-z]{0,30}$/,
    email: /^[a-z][a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/,
    Contactnumber:/^[0-9]{10}$/,
    pincode: /^[0-9]{6}$/,
    cardnumber: /^[0-9]{16}$/,
    cardexpiry: /^[0-9]{4}$/,
    ccv: /^[0-9]{3}$/,
}
