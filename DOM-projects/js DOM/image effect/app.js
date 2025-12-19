let elem = document.querySelectorAll(".elem");

elem.forEach(function (l) {
  l.addEventListener("mouseenter", () => {
    l.childNodes[3].style.opacity = 1;
  });
  l.addEventListener("mouseleave", function () {
    l.childNodes[3].style.opacity = 0;
  });
  l.addEventListener("mousemove", function (dets) {
    l.childNodes[3].style.left = dets.x + "px";
    l.childNodes[3].style.top = dets.y + "px";
  });
});
