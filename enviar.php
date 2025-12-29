<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nombre = htmlspecialchars($_POST["nombre"]);
    $email = htmlspecialchars($_POST["email"]);
    $telefono = htmlspecialchars($_POST["fono"]);
    $mensaje = htmlspecialchars($_POST["mensaje"]);

    // Destinatario
    $para = "miguelvaldiviacalvo@gmail.com"; // <-- cambia esto

    // Asunto
    $asunto = "Nuevo mensaje desde el formulario web MVSEO_";

    // Cuerpo del mensaje
    $contenido = "
    Nombre: $nombre\n
    Email: $email\n
    Telefono: $telefono\n
    Mensaje:\n$mensaje
    ";

    // Cabeceras
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Enviar
    if (mail($para, $asunto, $contenido, $headers)) {
        echo "<script>
            // alert('Mensaje enviado correctamente.');
            window.location.href='https://mvseo.cl';
          </script>";
    } else {
        echo "<script>
            alert('Hubo un error al enviar el mensaje.');
            window.location.href='https://mvseo.cl';
          </script>";
    }
}
?>

