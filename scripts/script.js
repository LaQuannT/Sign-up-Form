let msg = document.querySelector('#msg');
let psw = document.querySelector('#password');
let pswd = document.querySelector('#confirm-password');

psw.addEventListener("focus",show);
pswd.addEventListener("focus",show);

function show(){
  msg.textContent = 'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
  hide();
}

function hide(){
  setTimeout(function(){
    msg.textContent = '';
  },7000)
}