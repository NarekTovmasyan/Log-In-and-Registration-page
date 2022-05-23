//const formReg = document.getElementById("formReg")

//login and registration button
const mainPageH1 = document.getElementById("mainPageH1")
const btnLog = document.getElementById("login"); //login button
const btnReg = document.getElementById("registration"); //registracion button

const image = document.getElementById("image");

//cancel button
const cancelButton = document.querySelector(".cancelbtn"); //cancel button

//login page dom
//username input 
const uname = document.getElementById("uname"); //username input value 
const userNameError = document.getElementById("userNameError"); // error text
const iNameOklog = document.getElementById("iNameOklog"); //ok icon
const iNameErrorlog = document.getElementById("iNameErrorlog"); //error icon
//password input
const password = document.getElementById("password");
const iPswOklog = document.getElementById("iPswOklog");
const iPswErrorlog = document.getElementById("iPswErrorlog");
const logPassError = document.getElementById("logPassError")

//const buttonToLoginUsers=document.getElementById("buttonToLoginUsers");

//registracion page dom
//name
const firstName = document.getElementById("firstName");
const iFirstNameOkReg = document.getElementById("iFirstNameOkReg");
const iFirstNameErrorReg = document.getElementById("iFirstNameErrorReg");
const nameError = document.getElementById("nameError");

//lastname
const lastName = document.getElementById("lastName");
const iLastNameOkReg = document.getElementById("iLastNameOkReg")
const iLastNameErrorReg = document.getElementById("iLastNameErrorReg")
const surnameError = document.getElementById("surnameError")


//email
const email = document.getElementById("email");
const iEmailOkReg = document.getElementById("iEmailOkReg")
const iEmailErrorReg = document.getElementById("iEmailErrorReg")
const emailError = document.getElementById("emailError")


//phone
const phone = document.getElementById("phone");
const iPhoneOkReg = document.getElementById("iPhoneOkReg")
const iPhoneErrorReg = document.getElementById("iPhoneErrorReg")
const phoneError = document.getElementById("phoneError")

//password
const psw = document.getElementById("psw");
const submitRegistration = document.getElementById('submitRegistration'); //button to registrate user




//******************************************************************************************************* */

//login, registracion and cancel button click
function loginButton(event) {
    btnLog.style.display = event
}

function registrationButton(event) {
    btnReg.style.display = event
}

function cancel(event) {
    btnLog.style.display = event
    btnReg.style.display = event
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == btnLog) {
        btnLog.style.display = "none";
    } else if (event.target == btnReg) {
        btnReg.style.display = "none";
    }
}


let set;
// username check********************************************
uname.addEventListener("keyup", (e) => {
    // console.log("image.style",image.style.visibility=);
    function isUser(uNameInputValue) {
        if (uNameInputValue && uNameInputValue.length > 5) {
            iNameErrorlog.style.display = 'none'
            userNameError.innerHTML = ""
            iNameOklog.style.display = 'block'
            uname.style.borderColor = 'green'
        } else if (uNameInputValue === "") {
            iNameOklog.style.display = 'none'
            iNameErrorlog.style.display = 'block'
            userNameError.innerHTML = "please enter username"
            uname.style.borderColor = 'red'
        } else if (uNameInputValue.length < 6) {
            iNameOklog.style.display = 'none'
            iNameErrorlog.style.display = 'block'
            userNameError.innerHTML = "the user name must be min 6 simbol"
            uname.style.borderColor = 'red'
        } else {
            iNameOklog.style.display = 'none'
            iNameErrorlog.style.display = 'block'
            userNameError.innerHTML = "incorect username"
            uname.style.borderColor = 'red'
        }
    }

    if (set !== undefined) {
        clearTimeout(set)
    }
    set = setTimeout(() => {
        isUser(e.target.value)
    }, 100)
})

password.addEventListener("keyup", (e) => {
    function isPass(passInputValue) {
        if (passInputValue && passInputValue.length >= 8) {
            iPswErrorlog.style.display = "none"
            logPassError.innerHTML = ""
            iPswOklog.style.display = "block"
            password.style.borderColor = "green"
        }
    }
    if (set !== undefined) {
        clearTimeout(set)
    }
    set = setTimeout(() => {
        isPass(e.target.value)
    }, 100)

})

function buttonToLoginUsers(event) {
    console.log("image.style", image.style);
    image.style.visibility = event
    mainPageH1.style.display = "none"
    btnLog.style.display = "none"
    btnReg.style.display = "none"
    // if(uNameInputValue && passInputValue){
    //     image.style.visibility=event
    //     mainPageH1.style.display="none"
    //     btnLog.style.display="none"
    //     btnReg.style.display="none"        
    // }
}


//************************************************************************************ */

//registracion form

//name validation
firstName.addEventListener("keyup", (e) => {
    let regName = /^[A-Za-z]+$/;
    let fname = firstName.value;

    function checkName(nameOfUserInReg) {
        if (regName.test(fname)) {
            if (nameOfUserInReg && nameOfUserInReg.length >= 3 && nameOfUserInReg.length <= 10) {

                iFirstNameErrorReg.style.display = "none"
                nameError.innerHTML = ""
                iFirstNameOkReg.style.display = 'block'
                firstName.style.borderColor = "green"

            } else if (nameOfUserInReg === "") {
                iFirstNameOkReg.style.display = 'none'
                firstName.style.borderColor = "red"
                iFirstNameErrorReg.style.display = "block"
                nameError.innerHTML = "please enter your name"
            } else if (nameOfUserInReg.length < 3) {
                iFirstNameOkReg.style.display = 'none'
                firstName.style.borderColor = "red"
                iFirstNameErrorReg.style.display = "block"
                nameError.innerHTML = "name must be min 3 simbol"
            } else if (nameOfUserInReg.length > 10) {
                iFirstNameOkReg.style.display = 'none'
                firstName.style.borderColor = "red"
                iFirstNameErrorReg.style.display = "block"
                nameError.innerHTML = "name must be max 10 simbol"
            } else {
                iFirstNameOkReg.style.display = 'none'
                firstName.style.borderColor = "red"
                iFirstNameErrorReg.style.display = "block"
                nameError.innerHTML = "please enter correct name"
            }
        } else {
            iFirstNameOkReg.style.display = 'none'
            firstName.style.borderColor = "red"
            iFirstNameErrorReg.style.display = "block"
            nameError.innerHTML = "please enter english words"
            setTimeout(() => {
                nameError.innerHTML = ""
                //iFirstNameErrorReg.style.display = "none"
            }, 4000)
        }
    }

    if (set !== undefined) {
        clearTimeout(set)
    }
    set = setTimeout(() => {
        checkName(e.target.value)
    }, 100)

})

//surname validation
lastName.addEventListener("keyup", (e) => {

    let regSurName = /^[A-Za-z]+$/;
    let sname = lastName.value;

    function checkSurName(surnameOfUserInReg) {
        if (regSurName.test(sname)) {
            if (surnameOfUserInReg && surnameOfUserInReg.length >= 3 && surnameOfUserInReg.length <= 15) {

                iLastNameErrorReg.style.display = "none"
                surnameError.innerHTML = ""
                iLastNameOkReg.style.display = 'block'
                lastName.style.borderColor = "green"

            } else if (surnameOfUserInReg === "") {
                iLastNameOkReg.style.display = 'none'
                lastName.style.borderColor = "red"
                iLastNameErrorReg.style.display = "block"
                surnameError.innerHTML = "please enter your surname"
            } else if (surnameOfUserInReg.length < 3) {
                iLastNameOkReg.style.display = 'none'
                lastName.style.borderColor = "red"
                iLastNameErrorReg.style.display = "block"
                surnameError.innerHTML = "surname must be min 3 simbol"
            } else if (surnameOfUserInReg.length > 10) {
                iLastNameOkReg.style.display = 'none'
                lastName.style.borderColor = "red"
                iLastNameErrorReg.style.display = "block"
                surnameError.innerHTML = "surname must be max 15 simbol"
            } else {
                iLastNameOkReg.style.display = 'none'
                lastName.style.borderColor = "red"
                iLastNameErrorReg.style.display = "block"
                surnameError.innerHTML = "please enter correct surname"
            }
        } else {
            iLastNameOkReg.style.display = 'none'
            lastName.style.borderColor = "red"
            iLastNameErrorReg.style.display = "block"
            surnameError.innerHTML = "please enter english words"
            setTimeout(() => {
                surnameError.innerHTML = ""
                //iLastNameErrorReg.style.display = "none"
            }, 4000)
        }
    }

    if (set !== undefined) {
        clearTimeout(set)
    }
    set = setTimeout(() => {
        checkSurName(e.target.value)
    }, 100)

})

//email validation
email.addEventListener("keyup", (e) => {
   
    let regEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let emailReg = email.value;

    function checkEmail(emailOfUserInReg) {
        if (regEmail.test(emailReg)) {
            if (emailOfUserInReg) {

                iEmailErrorReg.style.display = "none"
                emailError.innerHTML = ""
                iEmailOkReg.style.display = 'block'
                email.style.borderColor = "green"

            } else if (emailOfUserInReg === "") {
                iEmailOkReg.style.display = 'none'
                email.style.borderColor = "red"
                iEmailErrorReg.style.display = "block"
                emailError.innerHTML = "please enter your email"
            }
            // else if (emailOfUserInReg.length < 3) {
            //     iEmailOkReg.style.display = 'none'
            //     iEmailErrorReg.style.display = "block"
            //     emailError.innerHTML = "surname must be min 3 simbol"
            // } else if (emailOfUserInReg.length > 10) {
            //     iEmailOkReg.style.display = 'none'
            //     iEmailErrorReg.style.display = "block"
            //     emailError.innerHTML = "surname must be max 15 simbol"
            // }
            // else {
            //     iEmailOkReg.style.display = 'none'
            //     iEmailErrorReg.style.display = "block"
            //     emailError.innerHTML = "please enter correct email"
            // }
        } else {
            iEmailOkReg.style.display = 'none'
            email.style.borderColor = "red"
            iEmailErrorReg.style.display = "block"
            emailError.innerHTML = "please enter correct email"
            setTimeout(() => {
                emailError.innerHTML = ""
                // iEmailErrorReg.style.display = "none"
            }, 4000)
        }
    }

    if (set !== undefined) {
        clearTimeout(set)
    }
    set = setTimeout(() => {
        checkEmail(e.target.value)
    }, 1000)

})

//phone validation
phone.addEventListener("keyup", (e) => {

    phone
    iPhoneOkReg
    iPhoneErrorReg
    phoneError

    let regPhone = /^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/g;
    let phoneReg = lastName.value;

    function checkPhone(phoneOfUserInReg) {
        if (regPhone.test(phoneReg)) {
            if (phoneOfUserInReg && phoneOfUserInReg.length >= 3 && phoneOfUserInReg.length <= 15) {

                iPhoneErrorReg.style.display = "none"
                phoneError.innerHTML = ""
                iPhoneOkReg.style.display = 'block'
                phone.style.borderColor = "green"

            } else if (phoneOfUserInReg === "") {
                iPhoneOkReg.style.display = 'none'
                phone.style.borderColor = "red"
                iPhoneErrorReg.style.display = "block"
                phoneError.innerHTML = "please enter your surname"
            } else if (phoneOfUserInReg.length < 3) {
                iPhoneOkReg.style.display = 'none'
                phone.style.borderColor = "red"
                iPhoneErrorReg.style.display = "block"
                phoneError.innerHTML = "surname must be min 3 simbol"
            } else if (phoneOfUserInReg.length > 10) {
                iPhoneOkReg.style.display = 'none'
                phone.style.borderColor = "red"
                iPhoneErrorReg.style.display = "block"
                phoneError.innerHTML = "surname must be max 15 simbol"
            } else {
                iPhoneOkReg.style.display = 'none'
                phone.style.borderColor = "red"
                iPhoneErrorReg.style.display = "block"
                phoneError.innerHTML = "please enter correct surname"
            }
        } else {
            iPhoneOkReg.style.display = 'none'
            phone.style.borderColor = "red"
            iPhoneErrorReg.style.display = "block"
            phoneError.innerHTML = "please enter english words"
            setTimeout(() => {
                phoneError.innerHTML = ""
                //iLastNameErrorReg.style.display = "none"
            }, 4000)
        }
    }

    if (set !== undefined) {
        clearTimeout(set)
    }
    set = setTimeout(() => {
        checkPhone(e.target.value)
    }, 100)

})



//surname validation
//email validation
//phone validation
//password validation


//***************************************************************************************************** */


// formReg.addEventListener("submit", (e)=>{
//      let message=[];
//      if(firstName.value==="" || firstName.value==null){
//          message.push("")
//      }
//     e.preventDefault();
// })



// Get the modal
// const modal = document.getElementById('login');



//validations
// function validationName(){
//     regName = /^[A-Za-z]+$/;
//     if(firstName.value){

//     }
// }

// function validation(){
// if(firstName.value && lastName.value && email.value && phone.value && psw.value){


// }else{

// }
// }

// function ValidateEmail(input) {

//     var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//     console.log(input.value.match(validRegex));
//     console.log(input.value);
//     console.log(input.value.match);


//     if (input.value.match(validRegex)) {

//       //alert("Valid email address!");

//       //document.regValid.email.focus();

//       return true;

//     } else {

//       //alert("Invalid email address!");

//       //document.regValid.email.focus();

//       return false;

//     }

// }