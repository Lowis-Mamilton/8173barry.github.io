let manu=document.querySelector("#manu-bar");
let navbar=document.querySelector(".navbar");

manu.onclick =() =>{
    manu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}