import { menuItems } from "./menuItems";

export const menuDiv = document.createElement("div");
menuDiv.id = "menu";
const menuH1 = document.createElement("h1");
menuH1.textContent = "Da Menu";
const menuUl = document.createElement("ul");

menuItems.forEach((item) => {
  let li = document.createElement("li");
  let h2 = document.createElement("h2");
  let img = document.createElement("img");
  let description = document.createElement("div");
  let price = document.createElement("div");

  img.src = item.imgUrl;
  h2.textContent = item.name;
  description.id = description;
  description.classList.add("description");
  description.textContent = item.description;
  price.classList.add("price");
  price.textContent = item.price;

  li.appendChild(img);
  li.appendChild(h2);
  li.appendChild(description);
  li.appendChild(price);

  menuUl.appendChild(li);
});

menuDiv.appendChild(menuH1);
menuDiv.appendChild(menuUl);
