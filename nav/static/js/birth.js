// show / hide menu
let navbar = document.querySelector("#nav_container");
let menuBtn = document.querySelector(".menu");
let closeBtn = document.querySelector(".close");

menuBtn.addEventListener("click", function () {
  navbar.style.display = "block";
  menuBtn.style.display = "none";
  closeBtn.style.display = "block";
  window.addEventListener("resize", function () {
    location.reload(); // refresh when resizing with clicked button menu
  });
});

closeBtn.addEventListener("click", function () {
  closeBtn.style.display = "none";
  menuBtn.style.display = "block";
  navbar.style.display = "none";
});

// slide gallery
let sliderRight = document.querySelector("#right_slider");
let sliderLeft = document.querySelector("#left_slider");
let images = document.querySelectorAll(".single_img");

imgNumber = 0;

sliderRight.addEventListener("click", function () {
  images.forEach((image) => {
    image.style.display = "none";
  });
  imgNumber++;
  if (imgNumber === images.length) {
    imgNumber = 0;
  }
  images[imgNumber].style.display = "block";
});

sliderLeft.addEventListener("click", function () {
  images.forEach((image) => {
    image.style.display = "none";
  });
  imgNumber--;
  if (imgNumber === -1) {
    imgNumber = images.length - 1;
  }
  images[imgNumber].style.display = "block";
});

// select pasta type with matching sauces
let pastas = document.querySelectorAll(".pasta_btn");
let sauces = document.querySelectorAll(".category");

pastas.forEach((pasta) => {
  pasta.addEventListener("click", function () {
    sauces.forEach((sauce) => {
      sauce.style.display = "none";

      if (pasta.getAttribute("data-category") === "all") {
        sauces.forEach((sauce) => {
          sauce.style.display = "block";
        });
      }

      if (
        sauce
          .getAttribute("data-category")
          .includes(pasta.getAttribute("data-category"))
      ) {
        sauce.style.display = "block";
      }
    });
  });
});

// open / close message
let contacts = document.querySelectorAll(".fa-lg");
let opacity = document.querySelector(".opacity");
let popUp = document.querySelector(".pop_up");
let close = document.querySelector(".close_message");

contacts.forEach((contact) => {
  contact.addEventListener("click", function () {
    opacity.style.display = "block";
    popUp.style.display = "block";
  });
});

close.addEventListener("click", function () {
  opacity.style.display = "none";
  popUp.style.display = "none";
});


// text slider
