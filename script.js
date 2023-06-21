let bars = document.querySelector(".bars");
let navBar = document.querySelector(".menu");
let banner = document.querySelector(".banner");
let menuOptions = document.querySelectorAll(".menu__link");
let button = document.querySelectorAll(".salsa__boton");

bars.onclick = function() {

    navBar.classList.toggle("active");
    banner.classList.toggle("hide");
}

Array.from(menuOptions).forEach(function(option) {

    option.onclick = function() {
        navBar.classList.remove("active");
        banner.classList.remove("hide");
    }
    
});

button.forEach(function(boton) {

    boton.addEventListener("click", function() {
      let target = this.getAttribute("data-target");
      let ingrediente = document.getElementById(target);
      ingrediente.classList.toggle("show");
    });

  });

