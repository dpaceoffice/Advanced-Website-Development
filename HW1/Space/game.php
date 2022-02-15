<?php
if($_SERVER['REQUEST_METHOD'] === 'POST')
  $phrase = htmlspecialchars($_POST['request']);
else 
  $phrase = "None";
  
if ($phrase == "SpaceBalls") {
  echo "<!DOCTYPE html>
    <html lang=\"en-us\">
      <head>
        <meta charset=\"utf-8\">
        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">
        <link rel=\"stylesheet\" href=\"../styles/bootstrap.min.css\">
        <link rel=\"stylesheet\" href=\"../styles/bootstrap-icons.css\">
        <link rel=\"icon\" href=\"../images/favicon.png\" />
        <title>Space</title>
      </head>
      <body class=\"bg-dark position-absolute top-50 start-50 translate-middle\">
        <canvas id=\"unity-canvas\" width=960 height=650 style=\"width: 960px; height: 600px; background: #231F20\"></canvas>
        <div class=\"d-flex justify-content-center\">
          <a class=\"mt-2 btn btn-primary btn-sm btn-block mx-auto\" href=\"../index.html\">Go Back to Portal</a>
        </div>
        <script src=\"Build/Space.loader.js\"></script>
        <script>
          createUnityInstance(document.querySelector(\"#unity-canvas\"), {
            dataUrl: \"Build/Space.data\",
            frameworkUrl: \"Build/Space.framework.js\",
            codeUrl: \"Build/Space.wasm\",
            streamingAssetsUrl: \"StreamingAssets\",
            companyName: \"DefaultCompany\",
            productName: \"CanabaltParalax\",
            productVersion: \"0.1\",
            // matchWebGLToCanvasSize: false, // Uncomment this to separately control WebGL canvas render size and DOM element size.
            // devicePixelRatio: 1, // Uncomment this to override low DPI rendering on high DPI displays.
          });
        </script>
      </body>
    </html>
    ";
} else {
  echo "<!DOCTYPE html>
  <html lang=\"en\">
  
  <head>
      <meta charset=\"UTF-8\">
      <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">
      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
      <link rel=\"stylesheet\" href=\"../styles/bootstrap.min.css\">
      <link rel=\"stylesheet\" href=\"../styles/bootstrap-icons.css\">
      <link rel=\"icon\" href=\"../images/favicon.png\" />
      <title>Space Adventure</title>
  </head>
  
  <body class=\"bg-dark text-white position-absolute top-50 start-50 translate-middle\">
      <h1 class=\"text-center\">Thats Incorrect.</h1>
      <hr>
      <h2>You must adventure more to figure out the secret phrase.</h2>
  </body>
  
  </html>";
}
?>