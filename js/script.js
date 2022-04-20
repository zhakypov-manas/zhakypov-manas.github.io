function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Читать больше";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Читать меньше";
    moreText.style.display = "inline";
  }
}
function oneClick() {
  var desc = document.getElementById("desc");
  var moreText = document.getElementById("more");
  if(moreText.style.display === "inline"){
    desc.style.paddingBottom = "400px";
  }else {
    desc.style.paddingBottom = "0";
  }
}

function mainOneClick() {
  var nature = document.getElementById("nature");
  var moreText = document.getElementById("more");
  if(moreText.style.display === "inline"){
    nature.style.paddingBottom = "200px";
  }else {
    nature.style.paddingBottom = "0";
  }
  
}