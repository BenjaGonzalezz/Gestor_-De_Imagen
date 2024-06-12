<?php

require_once '../modelo/modelo.php';

$request = $_GET['request'];

switch ($request) {
    case "cargarimg":
      cargarimg();
    break;
    case "obtenerimg":
        obtenerimg();
    break;

}
function cargarimg(){
    $nombre = $_POST ['nombre'];
    $imagen = $_FILES ['imagen'];
    $imagenDAO = new imagen();
    $imagenDAO->cargarimg($nombre,$imagen);
 }
function obtenerimg(){
    $imagenes = (new imagen())->obtenerimg();
    echo json_encode($imagenes);
}