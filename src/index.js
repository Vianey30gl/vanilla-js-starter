import { post, deleteData, getDat } from "./api.js";
//Variables.

let InformacionTarea = window.document.querySelector("#InformacionTarea");
let ul = window.document.querySelector("ul");
let empty = window.document.querySelector(".empty");
let contador = window.document.querySelector("#contador");
let datos = await getDat()

datos?.forEach((element) => {
  let text = InformacionTarea.task;
  let li = document.createElement("li")
  li.classList.add("tarea") 

  
  let p = document.createElement("p")
  p.textContent = text
  li.id = element.id;
  
  li.appendChild(btnCheck(element));
  li.appendChild(p);
  li.appendChild(AddDeleteBoton());
  ul.appendChild(li);
});


async function add(e) {
  e.preventDefault();
  let tarea = InformacionTarea.value;
  if (tarea !== "") {
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.textContent = tarea;

    let task = {task: tarea}
    let posted = await post(task);
    li.id = posted.id;
    
    li.appendChild(btnCheck(posted.id));
    li.appendChild(p);
    li.appendChild(AddDeleteBoton());
    ul.appendChild(li);

    InformacionTarea.value = "";
    empty.style.display = "none";
  } else {
    alert("Ingresar texto");
  }
}

function btnCheck(id) {
  let Checkbox = document.createElement("input");
  Checkbox.setAttribute("type", "checkbox");

  Checkbox.addEventListener("click", function () {
    if (Checkbox.checked) {
      aumentarContador();
    } else {
      disminuirContador();
    }
  });

  return Checkbox;
}

//Botón de eliminar.

function AddDeleteBoton() {
  let deleteBtn = document.createElement("button");

  deleteBtn.textContent = "🗑️";
  deleteBtn.className = "del";

  deleteBtn.addEventListener("click", async (e) => {
    let item = e.target.parentElement;
    await deleteData(item.id);

    let checkbox = item.querySelector("input");

    if (checkbox.checked) {
      disminuirContador();
    }
    ul.removeChild(item);

    let items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });
  return deleteBtn;
}
//  Disminuir Contador

function disminuirContador() {
  let cuenta = Number(contador.textContent);
  cuenta = cuenta - 1;
  contador.textContent = cuenta;
}


//Aumentar Contador

function aumentarContador() {
  let cuenta = Number(contador.textContent);
  cuenta = cuenta + 1;
  contador.textContent = cuenta;
}

export { add };