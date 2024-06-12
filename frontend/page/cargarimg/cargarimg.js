window.onload=()=>{
    agregarimg();
}
    function agregarimg(){
        let formElement = document.querySelector("#formularioimg");
        formElement.onsubmit = async (e)=>{
            e.preventDefault()
            let formData =  new FormData(formElement);
            let url = "http://localhost/Gestor_-De_Imagen/backend/controlador/controlador.php?request=agregarimg";
    
            let config = {
                method: 'POST',
                body: formData
            }
            
            let respuesta = await fetch(url, config);
            let datos = await respuesta.json();
            console.log(datos);
            formElement.reset();
        }
    }
  