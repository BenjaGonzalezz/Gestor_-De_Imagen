window.onload=()=>{
    obtenerimg();
    modificarimg();
}

async function obtenerimg(){
   let url = "http://localhost/Gestor_-De_Imagen/backend/controlador/controlador.php?request=obtenerimg";
   let respuesta = await fetch(url);
   let datos = await respuesta.json();
   console.log(datos)
   mostrarImg(datos);
}

function mostrarImg(datos){
    let divimg = document.querySelector("#listaimg");
    divimg.innerHTML="";
    datos.forEach(imagen => {
        divimg.innerHTML+=`
        <div>
        <h3>Nombre de la imagen</h1>
        <h5>${imagen.nombre}</h5>
        <img src="../../../backend/imagenes/${imagen.id}.${imagen.extension}">
        <p>ID DE LA IMAGEN: ${imagen.id}</p>

        <button onclick="CargarDatos('${imagen.id}', '${imagen.nombre}')" class="boton-modificar">Modificar</button>

        </div>
        `
    });
}
function CargarDatos(id, nombre){

    let idinput = document.querySelector("#id");
      idinput.value = id;

    let nombreInput = document.querySelector("#nombre");
      nombreInput.value = nombre;

    window.scrollTo({
        top: 0,
        behavior: 'smooth' // TE MANDA ARRIBA DE TODO EN LA PAGGINA
    });
}
  
async function modificarimg(){
    let formElement = document.querySelector("#formularioimg")
  
    formElement.onsubmit = async (e) =>{
        e.preventDefault()
        let formData =  new FormData(formElement);
        let url = "http://localhost/Gestor_-De_Imagen/backend/controlador/controlador.php?request=modificarimg"
  
        let config = {
            method: 'POST',
            body: formData
        }
  
        let respuesta = await fetch(url, config);
        let datos = await respuesta.json();
        console.log(datos);
        alert("Se actualizó el nombre");
        obtenerimg();
        formElement.reset();
  }
}