<?php

require_once '../modelo/modelo.php';

$funcion = $_GET['funcion'];

switch ($funcion) {
    case "cargar":
      cargarimg();
    break;
    case "obtener":
        obtenerimg();
    break;
    case "ver":
        verimg();
    break;

}
function cargarimg(){
    $id = $_POST['id'];
    $nombre = $_POST['nombre'];
    $imagen = $_POST['imagen'];
    $extension = pathinfo($_FILES ['imagen']['nombre'],PATHINFO_EXTENSION);
    move_uploaded_file($_FILES ['imagen'] ['tmp_name'], './img/' . $id . '.' . $extension);
    $resultado = (new imagen())->cargarimg($id, $nombre, $imagen, $extension);
    echo json_encode($resultado);
 }

 function verimg(){
    $id = $_POST['id'];
    $nombre = $_POST['nombre'];
    $imagen = $_POST['imagen'];
    $extension = pathinfo($_FILES ['imagen']['nombre'],PATHINFO_EXTENSION);
    move_uploaded_file($_FILES ['imagen'] ['tmp_name'], './img/' . $id . '.' . $extension);
    $resultado = (new imagen())->verimg($id, $nombre, $imagen, $extension);
    echo json_encode($resultado);
}
function obtenerimg(){
    $resultado = (new imagen())->obtenerimg();
    echo json_encode($resultado);
}