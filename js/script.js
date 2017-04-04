$(document).ready(function () {
  $("#black").click(function () {
      $('head > link').filter(':last').attr('href', 'css/styles.css');
  });
  $("#white").click(function () {
      $('head > link').filter(':last').attr('href', 'css/white.css');
  });
  $("#blue").click(function () {
      $('head > link').filter(':last').attr('href', 'css/blue.css');
  });
  $("#red").click(function () {
      $('head > link').filter(':last').attr('href', 'css/red.css');
  });
  $("#green").click(function () {
      $('head > link').filter(':last').attr('href', 'css/green.css');
  });
});
