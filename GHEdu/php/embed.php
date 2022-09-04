<?php 
  $videoURL = "https://www.youtube.com/watch?v=0iAUo8W-nDQ";
  $convertedURL = str_replace("https://youtu.be/","https://www.youtube.com/embed/", $videoURL);
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Template</title>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
  </head>
  <body>
    <br><br>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
              <iframe width="360" height="203" src="<?php echo $convertedURL; ?>" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>    
    </section>
  </body>
</html>