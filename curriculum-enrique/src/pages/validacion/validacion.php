<?php 

if (isset($_POST["submit"])) {
    //Recoger los datos
    $asunto = isset($_POST["asunto"]);
    $mail = isset($_POST["mail"]);
    $mensaje = isset($_POST["mensaje"]);
    //var_dump($_POST);

    $arrayErrores = array();
    //Hacemos validadores necesarios
    if (!empty($asunto)) {
        $asuntoValidado = true;
    } else {
        $asuntoValidado = false;
        $arrayErrores["asunto"] = "El asunto está vacío";
        $_POST["asunto.class.add"] = "is-invalid";
    }

    if (!empty($mail) && filter_var($mail, FILTER_VALIDATE_EMAIL)) {
        $mailValidado = true;
    } else {
        $mailValidado = false;
        $arrayErrores["mail"] = "El mail no es valido";
        $_POST["mail.class.add"] = "is-invalid";
    }

    if (!empty($mensaje)) {
        $mensajeValidado = true;
    } else {
        $mensajeValidado = false;
        $arrayErrores["mensaje"] = "El mensaje está vacío";
        $_POST["mensaje.class.add"] = "is-invalid";
    }

    $guardarUsuario = false;
    if(count($arrayErrores) == 0) {
        $_POST["sendBtn.class.add"] = "is-valid";
    } else {
        $_SESSION["errores"] = $arrayErrores;
    }
    header("Location: ../index.php");
}
?>