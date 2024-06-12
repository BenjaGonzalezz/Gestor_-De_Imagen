<?php
require_once  '../controlador/controlador.php';

class imagen {
    
    function connection (){
        $host = "localhost";
        $usuario = "root";
        $password = "";
        $bd = "gestorimg";
        $puerto = 3306;
        return new mysqli($host,$usuario,$password, $bd, $puerto);

    }

    public function cargarimg($nombre, $imagen){
        $rutaTemporal=$imagen['tmp_name'];
        $nombreImagen = $imagen['name'];
        $extension = pathinfo($nombreImagen, PATHINFO_EXTENSION);
        $sql = "INSERT INTO imagen(nombre,extension) values('$nombre','$extension')";
        $connection = $this->connection();
        $connection->query($sql);
        $id = $connection->insert_id;
        move_uploaded_file($rutaTemporal,"../imagenes/$id.$extension");
    }
    public function obtenerimg(){
        $sql = "SELECT * FROM imagen";
        $connection = $this->connection();
        $resultado = $connection->query($sql);
        return $resultado->fetch_all(MYSQLI_ASSOC);
        
    }
}

?>