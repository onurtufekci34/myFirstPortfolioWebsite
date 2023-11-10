let date = new Date;
let year = date.getFullYear();
console.log(year);
document.getElementById("year").innerHTML = year;


  document.addEventListener("DOMContentLoaded", function () {
    var img = document.getElementById("myPhoto");
    img.src = img.getAttribute("data-src");
  });

