<?php
require_once  '../controlador/controlador.php';

class imagen {

    public function cargarimg($nombre, $imagen){
        $connection = connection();
        $sql = "INSERT INTO imagen VALUES(0, '$nombre', '$imagen')";
        $respuesta = $connection->query($sql);
        return $respuesta;
    }
    function obtenerimg(){
        $connection = connection();
        $sql = "SELECT * FROM imagen";
        $respuesta = $connection->query($sql);
        $imagen = $respuesta->fetch_all(MYSQLI_ASSOC);
        return $imagen;
    }
    function verimg(){
        $connection = connection();
        $sql = "SELECT * FROM imagen";
        $respuesta = $connection->query($sql);
        $imagen = $respuesta->fetch_all(MYSQLI_ASSOC);
        return $imagen;
    }
}