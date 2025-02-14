export const contactDiv = document.createElement("div");
const h1 = document.createElement("h1");
const addressDiv = document.createElement("div");
const nameDiv = document.createElement("div");
const streetDiv = document.createElement("div");
const cityStreetZipDiv = document.createElement("div");
const phoneDiv = document.createElement("div");
const emailDiv = document.createElement("div");

contactDiv.id = "contactUs";
h1.textContent = "Contact Us";
addressDiv.id = "address";
nameDiv.id = "name";
streetDiv.id = "street";
cityStreetZipDiv.id = "cityStateZip";
phoneDiv.id = "phone";
emailDiv.id = "email";
nameDiv.textContent = "Joey Parshley";
streetDiv.textContent = "25 Governors Road";
cityStreetZipDiv.textContent = "Groveland, MA 01834";
phoneDiv.textContent = "978-766-2742";
emailDiv.textContent = "joeyparshley@gmail.com";

addressDiv.appendChild(nameDiv);
addressDiv.appendChild(streetDiv);
addressDiv.appendChild(cityStreetZipDiv);
addressDiv.appendChild(phoneDiv);
addressDiv.appendChild(emailDiv);

contactDiv.appendChild(h1);
contactDiv.appendChild(addressDiv);
