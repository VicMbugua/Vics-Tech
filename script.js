let date = new Date();
let year = date.getFullYear();
document.getElementById("year").innerHTML = year;

let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n){
    showSlides(slideIndex += n);
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("image");
    if(n > slides.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

let mybutton = document.getElementById("top-btn");
window.onscroll = function(){scrollFunction()};
function scrollFunction(){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        mybutton.style.display = "block";
    }
    else{
        mybutton.style.display = "none";
    }
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let laptopheader = document.getElementById("products-header").innerHTML;
function boughtMessage(){
    alert("Successfully bought " + laptopheader);
}

