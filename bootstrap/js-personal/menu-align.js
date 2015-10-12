/**
 El siguiente script es para alinear los bordes de los submenús.
*/

 /*
 $("#cdoc").on('show.bs.dropdown', function(e){
	  o = $(this).offset().left;
	  $(this).find("li").css('padding-left', o);
 });*/

$(document).on('show.bs.dropdown', function(e){
	$(e.target).find("li").css('padding-left', $(e.target).offset().left);	
} );

