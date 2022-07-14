function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("w3-bar").style.marginLeft = "250px";
  document.getElementById("主頁").style.marginLeft = "250px";
  document.getElementById("HTML").style.marginLeft = "250px";
  document.getElementById("CSS").style.marginLeft = "250px";
  document.getElementById("Javascript").style.marginLeft = "250px";
  document.getElementById("學習歷程").style.marginLeft = "250px";
  document.getElementById("舊版網頁").style.marginLeft = "250px";

}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.getElementById("w3-bar").style.marginLeft= "0";
  document.getElementById("主頁").style.marginLeft= "0";
  document.getElementById("HTML").style.marginLeft= "0";
  document.getElementById("CSS").style.marginLeft= "0";
  document.getElementById("Javascript").style.marginLeft= "0";
  document.getElementById("學習歷程").style.marginLeft= "0";
  document.getElementById("舊版網頁").style.marginLeft= "0";
}

function openCity(cityName) {
var i;
var x = document.getElementsByClassName("link");
for (i = 0; i < x.length; i++) {
x[i].style.display = "none";
}
document.getElementById(cityName).style.display = "block";
}

//--------------------------------------------------------------

var dropdown = document.getElementsByClassName("dropdown-btn");
var k;

for (k = 0; k < dropdown.length; k++) {
  dropdown[k].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
