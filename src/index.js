import "./styles.css";
import { homeDiv } from "./home.js";
import { menuDiv } from "./menu.js";
import { contactDiv } from "./contact.js";

const buttons = document.querySelectorAll("button");
const homeButton = document.querySelector("#home");
const contentDiv = document.querySelector("#content");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    buttons.forEach((otherButton) => {
      if (otherButton !== button) {
        otherButton.classList.remove("active"); // Replace 'active' with the class to remove
      }
    });
    button.classList.add("active");
    switch (e.target.id) {
      case "home":
        contentDiv.innerHTML = "";
        contentDiv.appendChild(homeDiv);
        break;

      case "menu":
        contentDiv.innerHTML = "";
        contentDiv.appendChild(menuDiv);
        break;

      case "contact":
        contentDiv.innerHTML = "";
        contentDiv.appendChild(contactDiv);
        break;

      default:
        break;
    }
  });
});

contentDiv.innerHTML = "";
contentDiv.appendChild(homeDiv);
homeButton.classList.add("active");
