const h1Element = document.getElementById("verde");
const h2Element = document.getElementById("naranja");
const h3Element = document.getElementById("click");

h1Element.textContent = "Adiós";
h2Element.style.color = "orange";


h3Element.addEventListener("click", (event) =>
{
 console.log(event);
 h3Element.style.color = "brown";
})


