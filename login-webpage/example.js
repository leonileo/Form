const login = document.getElementById("login")
const form = document.getElementById("form")
const submit = document.getElementById("submit")
const msgBox = document.getElementById("msg-box")
const rmv = document.getElementById("remove")
const rmvLogin = document.getElementById("rmvlogin")
const error1 = document.getElementById("error1")

let userName = document.getElementById("userName")
let lastName = document.getElementById("lastName")

let message;

login.addEventListener('click', opnLogin)
submit.addEventListener('click', clsLogin)
rmv.addEventListener('click', remove)
rmvLogin.addEventListener('click', removeLogin)

function opnLogin(){
    form.removeAttribute('style')
    msgBox.innerHTML = "";
}    
function clsLogin(){
    if(userName.value == "") {
        error1.innerHTML = "Please enter your username."
    }else if(lastName.value == ""){
        error1.innerHTML = "Please enter your lastname."
    }
    else{
        form.setAttribute('style', "display:none;")
        message = `Hello <b>${userName.value + " " + lastName.value}</b> Your very Welcome Here! <br> Explore.` 
        msgBox.innerHTML = message;
        setTimeout(remove,4000)
    }
}
function remove() {
    let m = `<h2>Hello ${userName.value + " " + lastName.value}</h2>`
    msgBox.innerHTML = m;
}

function removeLogin() {
    form.setAttribute('style', "display:none;")
    let m = `<h2>Hello ${userName.value}</h2>`
    msgBox.innerHTML = m;
        userName.value = ""
        lastName.value = ""
        if(error1){
            error1 = ""   
        }
}



