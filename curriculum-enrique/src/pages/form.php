<!DOCTYPE html>
<html lang="en" data-bs-theme="dark">

<head>

    <!-- Añado la fuente Roboto -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet">

    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"
        defer></script>


    <!-- Icono al lado del titulo -->
    <link rel="shortcut icon" href="" type="image/xpng">

    <!-- Titulo -->
    <title>Contacta conmigo</title>

</head>

<body>
    <div id="contact" class="container">
        <?php if(isset($_SESSION["errores"])){
            var_dump($_SESSION["errores"]);
        }
        
        ?>

        <?php if(isset($_SESSION["completado"])){
            echo "Registro completado";
        }
        
        ?>
        <form action="" method="POST" class="mt-2 mx-auto">
            <fieldset class="form-row reset p-4 align-items-center border border-primary ">
                <legend class="reset text-light border border-primary px-2 py-1">Redactar</legend>

                <div class="form-group row g-3 mt-1 mx-auto">
                    <label for="mail" class="col-sm-2 col-form-label text-primary">mail:</label>
                    <div class="col input-group mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">@</div>
                          </div>
                        <input type="email" id="email" class="form-control text-info" name="email"/>
                    </div>
                </div>

                <div class="form-group row g-3 mt-1 mx-auto">
                    <label for="asunto" class="col-sm-2 col-form-label text-primary">Asunto:</label>
                    <div class="col-sm-10">
                        <input type="text" id="asunto" class="form-control text-info" name="asunto" required />
                    </div>
                </div>

                <div class="form-group row g-3 mt-1 mx-auto">
                    <label for="Mensaje" class="col-sm-2 col-form-label text-primary">Mensaje:</label>
                    <div class="col-sm-10">
                        <textarea type="text" id="mensaje" class="form-control text-info" name="mensaje" required 
                            title="Desbes escribir un mensaje"></textarea>
                    </div>
                </div>

                <div class="row g-3 mt-2 w-25 mx-auto">
                    <input id="sendBttn" class="btn btn-primary btn-lg" type="submit" value="Enviar" name="submit"/>
                </div>
            </fieldset>
        </form>
        <a href="index.astro">Volver al curriculum</a>
    </div>

    <?php 
        if(isset($_SESSION["errores"])){
            $_SESSION["errores"] = null;
            session_unset($_SESSION["errores"]);
        }
    ?>
</body>
</html>