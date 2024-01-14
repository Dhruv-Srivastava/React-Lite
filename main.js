import "./style.css";
import { formForElement, formForNumber } from "./utils/FormTemplate";
import render from "./utils/render";
const level = ["app"];

const nav = document.querySelector("#navbar .directory");
const main = document.querySelector("#main-container");
const app=document.querySelector("#app")
let dom = [];

async function displayNumberForm(level) {
  nav.textContent = level.join(">");
  main.innerHTML = formForNumber;

  const form = main.firstElementChild;

  return new Promise((resolve) => {
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      const numElements = +form.querySelector("input").value;
      main.innerHTML = "";
      resolve(numElements);
    });
  });
}

async function displaySelectElementsForm(current, numElements, level,dom_current) {
  nav.textContent = level.join(">");

  if (current > numElements) return;

  const formContainer = document.createElement("div");
  const p=document.createElement("p")
  p.textContent=`${current}/${numElements}`
  formContainer.classList.add("form-container");

  formContainer.innerHTML = formForElement;
  formContainer.prepend(p)
  main.append(formContainer);

  const mainForm = document.querySelector("#form--element");

  const result = await new Promise((resolve) => {
    mainForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const elementType = mainForm.querySelector("select").value;
      const attributes = [];
      mainForm
        .querySelectorAll("fieldset input")
        .forEach(
          (checkbox) => checkbox.checked && attributes.push(checkbox.value)
        );
      const text = mainForm.querySelector("#element-text")?.value;
      const href = mainForm.querySelector("#a-href")?.value;

      const element = {
        elementType,
        attributes,
        text,
        href,
        children:[]
      };
      dom_current.push(element);
      formContainer.remove();
      resolve(element);
    });
  });


  if (result.elementType === "div") {
    const newLevel=[...level,result.elementType];
    const numElements = await displayNumberForm(newLevel);
    await displaySelectElementsForm(1, numElements,newLevel,result.children);
  }
  await displaySelectElementsForm(current + 1, numElements,level,dom_current);
}

async function startApp() {
  const numElements = await displayNumberForm(level);
  await displaySelectElementsForm(1, numElements, level,dom);
  const button=document.createElement("button")
  button.textContent="Render the dom generated using React-Lite"
  button.classList.add("render-button")
  main.append(button)

  button.addEventListener("click",e=>{
    button.remove();
    main.remove()
    console.log(dom)
    dom.forEach(element=>render(element,app))
  })
}


startApp();
