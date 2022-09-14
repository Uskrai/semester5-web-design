window.onscroll = function () {
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  if (window.pageOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.add("sticky");
  }
};
