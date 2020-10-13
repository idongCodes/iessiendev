var cont = document.querySelector("#container");

cont.innerHTML = "<img src=\"images/undraw_under_construction_46pa.png\" alt=\"\" />";

var undrcon = document.createElement("div");
var subtitle = document.createElement("h4");
var title = document.createElement("h1");

title.textContent = "Under Construction";
subtitle.textContent = "Essien.dev";

cont.appendChild(undrcon);
undrcon.appendChild(subtitle);
undrcon.appendChild(title);

cont.classList.add("center");
undrcon.classList.add("center-undrcon");