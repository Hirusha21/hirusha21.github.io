$('iframe').hide();
$(document).ready(function(){
  $('form').submit(function(e){
    e.preventDefault();
    let getURL = $('.url').val();
    let newURL = getURL.replace("https://youtu.be/", "https://www.youtube.com/embed/");
    $('iframe').attr( "src", newURL ).show();
  });
});
