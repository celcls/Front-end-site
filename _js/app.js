var btnCad = document.querySelector("#login");
var btnLogin = document.querySelector("#cad");


var body = document.querySelector("body");

btnCad.addEventListener("click", function(){
    body.className = "logar";

});

btnLogin.addEventListener("click", function(){
    body.className = "deslogar";

});