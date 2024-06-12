window.onload=()=>{





    
}
    function agregarEventoForm(){
        let formElemento = document.querySelector("#formuimg");
        formElemento.onsumbit = (e)=>{
            e.preventDefault();
            enviarImagen(formElemento);
        }
    }
    async function enviarImagen(form){
        let formData = new FormData(form);
        let config = {
            method:"POST",
            body:formData
        }
        let url ="http://localhost/Gestor_-De_Imagen/backend/controlador/controlador.php?request=cargarimg";
        await fetch(url,config);
        let imagenes = await obtenerimg();
        mostrarImg(imagenes);
    }
    function mostrarImg(imagenes){
        let listaimgEleement = document.querySelector("#listaimg");
        listaimgEleement.innerHTML="";
        imagenes.forEach(imagen => {
            listaimgEleement.innerHTML+=`
            <div>
            <p>${imagen.nombre}</p>
            <img src"../../../backend/imagenes/${imagen.id}.${imagen.extension}">
            </div>
            `
        });
    }
     async function obtenerimg(){
        let url = "http://localhost/Gestor_-De_Imagen/backend/controlador/controlador.php?request=obtenerimg";
        let respuesta = await fetch(url);
        let imagenes = await respuesta.json();
        return imagenes;
    }


  