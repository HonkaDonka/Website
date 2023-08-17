var tablinks = document.getElementsByClassName("tab-link");
var tabcontent = document.getElementsByClassName("tab-content");

function openTab(tabname) {
  for(i of tablinks) {
    i.classList.remove("active-link");
  }

  for(i of tabcontent) {
    i.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}