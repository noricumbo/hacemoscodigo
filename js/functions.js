$(document).ready(function () {

    'use strict';
//Raul
// Define el alto de la ventana

	var altoVentana = $(window).height();
	var altoVentanasinHeader = altoVentana - 60;
	var mitadVentana = altoVentana / 2;
	console.log(altoVentana);
	
// Cambia el alto de todas las secciones y fotos del sitio dependiendo del alto de la ventana

	$('.splash').height(altoVentanasinHeader + 'px');
	$('section').height(altoVentanasinHeader + 'px');
	
// Posiciona en el centro el logo del splash número 1

	$('#logo_grande').css('marginTop', '' + mitadVentana - 150 + 'px');
	
// Navegación 

    $('#nav li a').click(function (e) {
		e.preventDefault();
		var seccion = $(this).attr('rel');
		console.log(seccion);
		$.scrollTo('#' + seccion, 1500);
	});
	
// Slider servicios 

    $('#servicios_slide').cycle({
        fx: 'scrollHorz',
        timeout: 0, 
		pager: '#nav_servicios',
        onPrevNextEvent: function (isNext, idx, slide) {
	        $("#nav_servicios li:eq(" + idx + ")").trigger("click");
	           },
	   pagerAnchorBuilder: function (idx, slide) {
	        return '#nav_servicios li a:eq(' + (idx) + ')';
       }
	});
	
/// Productos
	$('#productos .prod_container').not('#productos .prod_container:first').hide();
	
	var proyecto;
	$('#nav_productos li').click(function(e){
	   e.preventDefault;
	   proyecto = $(this).data('producto');
	   
	   $('#productos').removeClass().addClass(proyecto);
	   $('.prod_container').hide();
	   console.log('.prod_container.' + proyecto);
	   $('.prod_container.' + proyecto).show()
	
	});
	
});