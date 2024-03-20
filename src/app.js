/* eslint-disable 
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
*/

import "./style.css";

window.onload = function() {
  const button = document.getElementById("generator");
  let excuse = document.getElementById("excuse");

  button.addEventListener("click", function() {
    let who = ["El perro", "Mi abuela", "Su tortuga", "Mi pájaro"];
    let action = ["se comió", "orinó", "aplastó", "rompió"];
    let what = ["mi tarea", "las llaves", "el coche"];
    let when = [
      "antes de la clase",
      "justo a tiempo",
      "cuando terminé",
      "durante mi almuerzo",
      "mientras rezaba"
    ];

    let whoIndex = Math.floor(Math.random() * who.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let whatIndex = Math.floor(Math.random() * what.length);
    let whenIndex = Math.floor(Math.random() * when.length);

    excuse.innerHTML =
      who[whoIndex] +
      " " +
      action[actionIndex] +
      " " +
      what[whatIndex] +
      " " +
      when[whenIndex] +
      ".";
  });
};
