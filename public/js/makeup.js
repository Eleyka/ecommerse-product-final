$(document).ready(function() {
  // traemos los elementos que escogemos
  const $responseMakeup = $('#response-makeup');
  // creamos un div interno en mi responseContainer
  $responseMakeup.append('<div class="row"/>');
  const $makeup = $('#makeup');
          
  // llamamos a la api
  $.ajax({
    url: ' https://api.mercadolibre.com/sites/MPE/search?q=maquillaje',
    method: 'GET',
    contentType: 'application/json',
    success: function(response) {
      $makeup.on('click', function() {
        console.log(response.results);
        // por cada uno de los datos traidos
        $.each(response.results, function(index, obj) {
          // seleccionamos todos los row y agregamos cada obj un div con su respectiva clase
          $responseMakeup.find('.row').append('<div class="container-img col-xs-6 col-sm-2"/>');
          // seleccionamos todos los elementos con clase container-img / .eq(index) para cada objeto sino agregaria de manera descendente
          $responseMakeup.find('.container-img').eq(index).append('<img src="#" class="img-response"/>');
          // seleccionamos todos los elementos con clase  container-img 
          $responseMakeup.find('.container-img').eq(index).append('<p class="img-name"/>');
          // Seleccionamos tolos las etiquetas img y a cada una le agregamos su atributo src con su respectivo valor 
          $responseMakeup.find('img').eq(index).attr('src', response.results[index].thumbnail);
          // Seleccionamos todos las etiquetas img y agregamos el atributo data-name con el valor del api (name)
          $responseMakeup.find('img').eq(index).attr('data-title', response.results[index].title);
          // Seleccionamos todos los p y le agregamos el nombre de  la data de cada persona
          $responseMakeup.find('p').eq(index).append(response.results[index].title);
          console.log(response.results[index].thumbnail);
        });
      });
    },
    fail: function(request) {
      if (request) {
        alert(request.message);
      }
    }
  });
});