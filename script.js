const images = document.getElementsByTagName("img");
for (let image of images) {
  image.setAttribute("draggable", "false");
}

let typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  typeSpeed: 40,
  backSpeed: 40,
  backDelay: 2000,
  loop: true,
  showCursor: false,
});

ScrollReveal().reveal(".right1", {
  delay: 500,
  duration: 800,
  opacity: 0.2,
  origin: "left",
  distance: "100%",
  easing: "ease-in",
  viewFactor: 0.5,
});
ScrollReveal().reveal(".right2", {
  delay: 500,
  duration: 800,
  opacity: 0.2,
  origin: "right",
  distance: "100%",
  easing: "ease-in",
  viewFactor: 0.5,
});
ScrollReveal().reveal(".right3", {
  delay: 500,
  duration: 800,
  opacity: 0.2,
  origin: "left",
  distance: "100%",
  easing: "ease-in",
  viewFactor: 0.5,
});
ScrollReveal().reveal(".image2", {
  delay: 800,
  duration: 1000,
  opacity: 0.8,
  origin: "left",
  distance: "100%",
  easing: "ease-in-out",
  viewFactor: 0.5,
});

ScrollReveal().reveal(".image3", {
  delay: 800,
  duration: 1000,
  opacity: 0.8,
  origin: "right",
  distance: "100%",
  easing: "ease-in-out",
  viewFactor: 0.5,
});

ScrollReveal().reveal(".image4", {
  delay: 800,
  duration: 1000,
  opacity: 0.8,
  origin: "left",
  distance: "100%",
  easing: "ease-in-out",
  viewFactor: 0.5,
});

ScrollReveal().reveal(".inline-text", {
  delay: 1000,
  duration: 1500,
  opacity: 0,
  easing: "ease-in",
});

ScrollReveal().reveal(".fa-heart", {
  delay: 800,
  opacity: 0,
  easing: "ease-in",
  interval: 400,
});
