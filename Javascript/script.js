let manu=document.querySelector("#manu-bar");
let navbar=document.querySelector(".navbar");

const scriptURL = 'https://script.google.com/macros/s/AKfycbw5Gtb91yv3ESDsCeD2u12cvxtAb193p3zQVvgKey9Z1Gnfi91opxR0MwNp9xoNd48j4g/exec'
const form = document.forms['contact-form']

manu.onclick =() =>{
    manu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! your form is submitted successfully." ))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
  })