
let circle1 = document.querySelector(".circle1");
let circle2 = document.querySelector(".circle2");
let circle3 = document.querySelector(".circle3");
let circle4 = document.querySelector(".circle4");
let circle5 = document.querySelector(".circle5");
let circle6 = document.querySelector(".circle6");
let circle7 = document.querySelector(".circle7");
let circle8 = document.querySelector(".circle8");
let circle9 = document.querySelector(".circle9");
let circle10 = document.querySelector(".circle10");
let circle11 = document.querySelector(".circle11");
let circle12 = document.querySelector(".circle12");
let circle13 = document.querySelector(".circle13");
let circle14 = document.querySelector(".circle14");
let circle15 = document.querySelector(".circle15");
let circle16 = document.querySelector(".circle16");
let circle17 = document.querySelector(".circle17");
let circle18 = document.querySelector(".circle18");
let circle19 = document.querySelector(".circle19");
let circle20 = document.querySelector(".circle20");
let circle21 = document.querySelector(".circle21");
let circle22 = document.querySelector(".circle22");
let circle23 = document.querySelector(".circle23");
let circle24 = document.querySelector(".circle24");



window.onload = floatElements();


function floatElements() {

    circle1.classList.add("moveCircle1");
    circle2.classList.add("moveCircle2");
    circle3.classList.add("moveCircle3");
    circle4.classList.add("moveCircle4");
    circle5.classList.add("moveCircle5");
    circle6.classList.add("moveCircle6");
    circle7.classList.add("moveCircle7");
    circle8.classList.add("moveCircle8");
    circle9.classList.add("moveCircle9");
    circle10.classList.add("moveCircle10");
    circle11.classList.add("moveCircle11");
    circle12.classList.add("moveCircle12");
    circle13.classList.add("moveCircle13");
    circle14.classList.add("moveCircle14");
    circle15.classList.add("moveCircle15");
    circle16.classList.add("moveCircle16");
    circle17.classList.add("moveCircle17");
    circle18.classList.add("moveCircle18");
    circle19.classList.add("moveCircle19");
    circle20.classList.add("moveCircle20");
    circle21.classList.add("moveCircle21");
    circle22.classList.add("moveCircle22");
    circle23.classList.add("moveCircle23");
    circle24.classList.add("moveCircle24");
 
     
    console.log("fly");
}

function sendEmail() 
{
    window.location = "mailto:marta.grzegowska@gmail.com";
}

$(document).ready(function() {
   
    $('.arrow').click(function(){
        $('html, body').animate({scrollTop:$(document).height()}, 'slow');
        return false;
    });

});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("arrowAbout").style.display = "block";
  } else {
    document.getElementById("arrowAbout").style.display = "none";
  }
  prevScrollpos = currentScrollPos;
}