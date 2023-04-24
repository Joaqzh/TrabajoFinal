<?php

//Llamado a campos
$nombre   = $_POST['nombre'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];


$destinatario = "thejoaquinboy@gmail.com";
$asunto = "Contaco desde web";


$carta = "De: $nombre \n";
$carta .= "Correo: $correo \n";
$carta .= "Telefono: $telefono \n";
$carta .= "Mensaje: $mensaje \n";

mail($destinatario, $asunto, $carta);

?>
