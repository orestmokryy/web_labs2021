const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");


toggle.addEventListener("click", function(){
    if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fa fa-bars'></i>";
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = "<i class='fa fa-times'></i>";
  }
});