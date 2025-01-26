/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let arrayDomainFinal = [];

function domainGenerator(pronoun, adj, noun) {
  for (let i = 0; i < pronoun.length; i++) {
    for (let x = 0; x < adj.length; x++) {
      for (let z = 0; z < noun.length; z++) {
        let domain = pronoun[i] + adj[x] + noun[z];
        let extensiones = [".es", ".com", ".ar"];
        let randomIndex = Math.floor(Math.random() * extensiones.length);
        let seleccion = extensiones[randomIndex];
        arrayDomainFinal.push(domain + seleccion);
      }
    }
  }
  return arrayDomainFinal;
}

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let domains = domainGenerator(pronoun, adj, noun);

  let domainListContainer = document.getElementById("domainList");

  let domainListHTML = "<ul>";
  domains.forEach(function(domain) {
    domainListHTML += "<li>" + domain + "</li>";
  });
  domainListHTML += "</ul>";

  domainListContainer.innerHTML = domainListHTML;
};
