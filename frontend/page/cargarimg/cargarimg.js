window.onload=()=>{
    cargarimg();
}
    function cargarimg(){
        let formElement = document.querySelector("#formularioimg");
        formElement.onsumbit = async (e)=>{
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
        }
    }
  