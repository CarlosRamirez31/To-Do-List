const fecha = document.getElementById("fecha");
const input = document.getElementById("texto");
const botonEnter = document.getElementById("enter");
const lista = document.getElementById("lista");
const uncheck = "bi bi-circle";
const check = "bi bi-check2-circle";


function agregarTarea(texto){
    const elemento = `<li>
                        <i class="bi bi-circle" data="realizado" id="0"></i>
                        <p class="texto">${texto}</p>
                        <i class="bi bi-trash-fill" data="eliminado" id="0"></i>
                      </li>
                      `
    lista.insertAdjacentHTML('beforeend', elemento);
}

function agregarTexto(){
    const tarea = input.value;
    console.log(tarea);

    if(tarea)
        agregarTarea(tarea);

    input.value = "";
}

botonEnter.addEventListener("click", agregarTexto);


document.addEventListener("keyup", function(event){
    if(event.key == "Enter")
        agregarTexto();
});