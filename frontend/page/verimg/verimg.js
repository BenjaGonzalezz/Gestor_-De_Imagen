window.onload=()=>{
    obtenerimg();
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
        <button onclick="eliminarimg('${imagen.id}')" class="boton-eliminar">eliminar</button>
        </div>
        `
    });
}

async function eliminarimg(id) {

        let formdata = new FormData();
        formdata.append("id", id);
        let url = 'http://localhost/Gestor_-De_Imagen/backend/controlador/controlador.php?request=eliminarimg';
        
        let config = {
            method: 'POST',
            body: formdata
        };

        let respuesta = await fetch(url, config);
        let datos = await respuesta.json();

        if(datos){
            alert("se elimino la imagen")
            obtenerimg()
        }
        else{
            alert("no se elimino la imagen")
        }
}

