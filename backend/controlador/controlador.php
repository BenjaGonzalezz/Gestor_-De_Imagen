<?php

require_once "../modelo/modelo.php";

$request = $_GET['request'];

switch ($request){
    case "agregarimg":
        agregarimg();
        break;
    case "obtenerimg":
        obtenerimg();
        break;
}

function agregarimg(){
    $nombre = $_POST['nombre'];
    $imagen = $_FILES['imagen'];
    $result = (new imagen())->agregarimg($nombre, $imagen);
    echo json_encode($result);
}

function obtenerimg(){
    $result = (new imagen())->obtenerimg();
    echo json_encode($result);
}

?>