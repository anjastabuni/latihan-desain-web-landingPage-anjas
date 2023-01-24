var acc = document.getElementsByClassName("detail");
var d;
for (d = 0; d < acc.length; d++) {
  acc[d].onclick = function () {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show");
  };
}

// slide galery
