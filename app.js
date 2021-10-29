const form = document.getElementById("form");
const username = document.getElementById("username");
const username2 = document.getElementById("username2");
const email = document.getElementById("email");
const password = document.getElementById("password");

function checkInputs() {
  //get values from the input
  const usernameValue = username.value.trim();
  const usernameValue2 = username2.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue === "") {
    //show error
    //add error class
    setErrorFor(username, "First Name cannot be empty");
  } else {
    //add success class
    setSuccessFor(username);
    }
    
    if (usernameValue2 === "") {
    //show error
    //add error class
    setErrorFor(username2, "Last Name cannot be empty");
  } else {
    //add success class
    setSuccessFor(username2);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be empty");
  }else if(!isEmail(emailValue)){
    setErrorFor(email, "Email is invalid");
  }else{
    setSuccessFor(email);
  }


  if(passwordValue === ""){
    setErrorFor(password, "Password cannot be empty");
  }else{
    setSuccessFor(password);
  }

}

// ------------X--------------

function setErrorFor(input, message) {
  const formControl = input.parentElement; // .form-control div

  const small = formControl.querySelector("small");

  //add error message for the small tag
  small.innerText = message;

  //add error class
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement; // .form-control div

  //add error class
  formControl.className = "form-control success";
}

// -------------X-------------


form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

// ------------X----------
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}