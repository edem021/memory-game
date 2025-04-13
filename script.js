import fruits from "./fruits.js";

const fruitComponent = image => `
  <img src="${image}" alt="${image}"/>
`;

const displayFruits = fruits => fruits.map(({ image }) => fruitComponent(image)).join("");

const createDOM = (root) => {
  root.insertAdjacentHTML("beforeend", `
    <div class="fruits">
      ${displayFruits(fruits)}
    </div>
  `);
}

const loadEvent = () => {
  const root = document.querySelector("#root");
  createDOM(root);
}

window.addEventListener("load", loadEvent);