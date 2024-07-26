<?php


session_start();

if (isset($_SESSION['usuario']) === true) {
    echo "Bienvenido " . $_SESSION['usuario'] . " Has iniciado sesión correctamente";
} else {
    echo "No has iniciado sesión.";
}


?>