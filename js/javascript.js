var help = document.querySelector(".help");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");


help.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-content-show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-content-show");
});

var map = document.querySelector(".little-map");
var mappopup = document.querySelector(".modal-content-map");
var mapclose = document.querySelector(".modal-content-close");

map.addEventListener("click", function (evt) {
    evt.preventDefault();
    mappopup.classList.add("modal-content-show");
});
mapclose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mappopup.classList.remove("modal-content-show");
});

var cartopen = document.querySelector(".catalog-item-buy");
var cartpopup = document.querySelector("modal-content-cart");
var cartclose = document.querySelector(".modal-content-close");


cartopen.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartpopup.classList.add("modal-content-show");
});
    cartclose.addEventListener("click", function (evt) {
        evt.preventDefault();
        cartpopup.classList.remove("modal-content-show");
    });
    

/*
popup=document.querySelector(".modal-content")
close=document.querySelector(".modal-content-close");

if(popup){var form=popup.querySelector("form")
login=popup.querySelector("[name=login]")
email=popup.querySelector("[name=email]")
comment=popup.querySelector("[name=comments]");

contact.addEventListener("click", function(a){a.preventDefault(), popup.classList.add("modal-content-show"), login.focus()}),
    close.addEventListener("click", function(a){a.preventDefault()
    popup.classList.remove("modal-content-show"),
    popup.classList.remove("modal-error")})
    form.addEventListener("submit",function(a){login.value&&email.value&&comment.value||(a.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))})
    window.addEventListener("keydown",function(a){27===a.keyCode&&popup.classList.contains("modal-content-show")&&(popup.classList.remove("modal-content-show"), popup.classList.remove("modal-error"))})}

    var map=document.querySelector(".js-map")
    mapPopup=document.querySelector(".modal-content-map");

    if(mapPopup){var mapClose=mapPopup.querySelector(".modal-content-close");

    map.addEventListener("click",function(a){a.preventDefault(),
        mapPopup.classList.add("modal-content-show")})
    mapClose.addEventListener("click",function(a){a.preventDefault(),mapPopup.classList.remove("modal-content-show")})
    window.addEventListener("keydown",function(a){27===a.keyCode&&mapPopup.classList.contains("modal-content-show")&&mapPopup.classList.remove("modal-content-show")})}
    var cartOpen=document.querySelectorAll(".catalog-item-buy")
    cartPopup=document.querySelector(".modal-content-cart")
    cartClose=cartPopup.querySelector(".modal-content-close")
    cartContinue=cartPopup.querySelector(".btn-continue");
    if(cartOpen&&cartPopup&&cartClose){for(var i=0;i<cartOpen.length;i++)cartOpen[i].addEventListener("click",function(a){a.preventDefault(),cartPopup.classList.add("modal-content-show")});
    cartClose.addEventListener("click",function(a){a.preventDefault(),cartPopup.classList.remove("modal-content-show")})
    cartContinue.addEventListener("click",function(a){a.preventDefault(),cartPopup.classList.remove("modal-content-show")})
    window.addEventListener("keydown",function(a){27===a.keyCode&&cartPopup.classList.contains("modal-content-show")&&cartPopup.classList.remove("modal-content-show")})}
    */