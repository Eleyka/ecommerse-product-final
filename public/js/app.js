$(document).ready(function() {
  let search = $('#search');
  let send = $('#send');
  let searchItem ;
  /* evento para traer los articulos de compra*/
  send.click(function(event) {
    searchItem = search.val();
    console.log(searchItem);
    getItems();
  });
  function getItems(){
  $.ajax({
    url: `https://api.mercadolibre.com/sites/MLA/search?q=${searchItem}`,
    /* data:{
      id=123
    },*/
    type:'GET',
    dataType:'json',
    success: function(response) {
      console.log('the page was loaded');
      console.log(response.results);
      var result = response.results;
      result.forEach(function(value, i) {
      /*$.each(result, function(index, obj) {*/
        var section = $('#section-items').append(`<div class="col-xs-6"><p>Title: ${result[i].title}</p><img src="${result[i].thumbnail}" alt=""></div>`);
        $('#search').val('');
      /*  var imagens = result[i].thumbnail;
        var imagen = $('#section-items div').append(``)
        console.log(result[i].title);*/

        /*imagen.setAttribute('src', imagens);*/
      });
      /*});*/
    },
    error: function (error){
      console.log('la pagina no esta cargado',error)
    },

    complete: function(xhr,status){
      console.log('la respuesta está completa');
    }
});
}

});
