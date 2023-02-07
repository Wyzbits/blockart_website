document.getElementById("nav-button").onclick = function () {
  var nav = document.getElementById("navigation-container");
  if (nav.classList.contains("open")) {
    nav.classList.toggle("open");
  } else {
    nav.classList.toggle("closed");
  }
};

document.getElementById("mode").addEventListener("click", function () {
  var devider = document.getElementById("divider");
  var body = document.getElementById("body");
  var mode = document.getElementById("mode");
  console.log(body.classList);
  if (
    body.classList.contains("dark-mode") &&
    mode.classList.contains("bi-sun")
  ) {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    devider.classList.remove("light-mode");
    devider.classList.add("dark-mode");
    mode.classList.remove("bi-sun");
    mode.classList.add("bi-moon");
  } else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    devider.classList.remove("dark-mode");
    devider.classList.add("light-mode");
    mode.classList.remove("bi-moon");
    mode.classList.add("bi-sun");
  }
});

var movedBY = 1;
var x = 0;
var elementWidth = 0;
var sliderImages = document.getElementsByClassName("slide-image");
for (var i = 0; i < sliderImages.length; i++) {
  elementWidth += sliderImages[i].offsetWidth;
}

/* function myfunc() {
    var width = window.innerWidth;

    if (x > width / 2 && movedBY < -elementWidth + width) {
        console.log(movedBY);
        movedBY -= 2;
    }
    if (x < width / 2 && movedBY > 0) {
        console.log(movedBY);
        movedBY += 3;
    }

    document.getElementById('slide-it').style = `transform: translateX(${movedBY}px)`;
}

document.getElementById("image-container").addEventListener('mousemove', (e) => {
    x = e.clientX;
});
document.getElementById("image-container").addEventListener("mouseenter", (e) => {
    var myInterval = setInterval(myfunc, 100)
});
document.getElementById("image-container").addEventListener("mouseleave", (e) => {
    clearInterval(myInterval);
}); */
