$('.galeria_img').click(function (e){
	var imagenes = e.target.src;
	var modal = '<div class="modal" id="modal"><img src="'+ imagenes + '" class="modal_img"><div class="modal_boton" id="modal_boton">X</div></div>';
	$('body').append(modal);
	$('#modal_boton').click(function(){
	  $('#modal').remove();	
	})
});
