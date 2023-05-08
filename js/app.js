const fecha = document.getElementById("fecha");
const input = document.getElementById("texto");
const botonEnter = document.getElementById("enter");
const lista = document.getElementById("lista");
const uncheck = "bi-circle";
const check = "bi-check-circle";
const lineThrough = "line-through";
const FECHA = new Date();

fecha.innerHTML = FECHA.toLocaleDateString("es-ES", {weekday: "long", month: "short", day: "numeric"});

function agregarTarea(texto, realizado, finalizado){
    if(finalizado) return;

    const REALIZADO = realizado? check: uncheck; 
    const LINE = realizado? lineThrough: ""

    const elemento = `<li id="elemento">
                        <i class="bi ${REALIZADO}" data="realizado"></i>
                        <p class="texto ${LINE}">${texto}</p>
                        <i class="bi bi-trash-fill" data="eliminado"></i>
                      </li>
                      `
    lista.insertAdjacentHTML('beforeend', elemento);
}

function agregarTexto(){
    const tarea = input.value;

    if(tarea)
        agregarTarea(tarea, false, false);

    input.value = "";
}

botonEnter.addEventListener("click", agregarTexto);

document.addEventListener("keyup", function(event){
    if(event.key == "Enter")
        agregarTexto();
});

function tareaRealizada(elemento){
    elemento.classList.toggle(check)
    elemento.classList.toggle(uncheck);
    elemento.parentNode.querySelector(".texto").classList.toggle(lineThrough)
}

function tareaEliminada(elemento){
    elemento.parentNode.parentNode.removeChild(elemento.parentNode)
}


lista.addEventListener("click", function(event){
    const elemento = event.target;
    const data = elemento.attributes.data.value;

    if(data === "realizado") tareaRealizada(elemento);
    if(data === "eliminado") tareaEliminada(elemento);
});