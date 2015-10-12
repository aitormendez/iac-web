/**
 El siguiente script es para el botón de idioma.
	Sólo lo necesita Aitor, en la web funciona de otra manera
*/

$('document').ready(function(){
  $('#txt-idioma').click(function(){
    if($('#txt-idioma').text() == 'ENG')
      $('#txt-idioma').text('ESP');
    else
      $('#txt-idioma').text('ENG');
  });
});
