<?php
$conexion = mysqli_connect("localhost", "root", "", "sistema_web");

if ($conexion->connect_error) {
    die("Error de conexion: " . $conexion->connect_error());
}

// validar si entran datos
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nombre = $_POST['nombre'] ?? '';
    $telefono = $_POST['telefono'] ?? '';
    $correo = $_POST['correo'] ?? '';
    $mensaje = $_POST['mensaje'] ?? '';

    $sql = "INSERT INTO tb_clientes (nombre, telefono, correo, mensaje)
            VALUES ('$nombre', '$telefono', '$correo', '$mensaje')";

    if ($conexion->query($sql) === TRUE) {
        echo "Datos guardados correctamente";
    } else {
        echo "Error: " . $conexion->error;
    }

} else {
    echo "ACCESO NO PERMITIDO";
}

$conexion->close();
?>
