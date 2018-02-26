$(document).ready(function() {

  /* variable pata el input*/
  let search = $('#search');
  /* variable para el boton enviar*/
  let send = $('#send');
  let searchItem ;

  /* evento para traer los articulos de compra*/
  send.click(function(event) {
    /* variable para los valores en el input*/
    searchItem = search.val();
    console.log(searchItem);
    getItems();
  });
  /* variable que trae el script de los articulos*/
  var template = $('#item-arts').html();
  /* incorporando el template handlebars*/
  var handtemplate = Handlebars.compile(template);
  /* fucnion para la api mercado libre*/
  function getItems() {
    /* url del api mercado libre*/
    $.ajax({
      url: `https://api.mercadolibre.com/sites/MPE/search?q=${searchItem}`,
      /* data:{
      id=123
    },
    type:'GET',
    dataType:'json',*/
      /* incorporando funcionalidad para traer los articulos*/
      success: function(response) {
        console.log('the page was loaded');
        console.log(response.results);
        /* variable para la data*/
        var result = response.results;
        /* recorrido en la data*/
        result.forEach(function(value, i) {
          /* titulo del articulo*/
          var title = result[i].title;
          console.log(title);
          /* data para el temlate handlebars*/
          var html = handtemplate({
            title: result[i].title, 
            imagen : result[i].thumbnail,
            precio: result[i].price,
            plazo: result[i].installments.amount, 
            cantidad: result[i].installments.quantity
          });
          /* incorporandolo a la sección determinada*/
          $('#section-items').append(html);
        });
      },
      /* aviso de un error*/
      error: function(error) {
        console.log('la pagina no esta cargado', error);
      },
      /* carga aun si esta con eroor o no*/
      complete: function(xhr, status) {
        console.log('la respuesta está completa');
      }
    });
  }
});
