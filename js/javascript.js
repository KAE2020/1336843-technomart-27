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
var mapclose = mappopup.querySelector(".modal-content-close");

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
var cartclose = cartpopup.querySelector(".modal-content-close");


cartopen.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartpopup.classList.add("modal-content-show");
});
cartclose.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartpopup.classList.remove("modal-content-show");
});

