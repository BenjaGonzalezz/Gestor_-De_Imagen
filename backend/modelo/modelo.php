<?php

require_once "../conection/conexion.php";

class imagen{

    public function obtenerimg(){
        $connection = conection();
        $sql = "SELECT * FROM imagen";
        $respuesta = $connection->query($sql);
        $imagenes = $respuesta->fetch_all(MYSQLI_ASSOC);
        return $imagenes;
    }

    public function agregarimg($nombre, $imagen){
        $connection = conection();
        $nomImg = $imagen['name'];
        $extension = pathinfo($nomImg, PATHINFO_EXTENSION);
        $sql = "INSERT INTO imagen VALUES(0, '$nombre', '$extension');";
        $connection->query($sql);
        $id = $connection->insert_id;
        $rutaTemp = $imagen['tmp_name'];
        move_uploaded_file($rutaTemp, "../imagenes/$id.$extension");

    }
}

?>