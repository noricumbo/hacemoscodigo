//Primeros parámetros (posicionamiento, zoom y tipo de mapa)
  function initialize() {
  	var locations = [
	  					'19.447051,-99.135425',
	  					'21.242322,-86.803739', 
	  					'18.267576,-103.350105', 
	  					'23.240302,-106.448415',
	  					'15.8344371,-97.0426615',
	  					'19.687042,-101.153818',
	  					'25.651460,-100.368023',
	  					'19.361380,-99.172072',
	  					'19.409847,-99.181175',
	  					'19.415042,-99.165779',
	  					'19.411829,-99.166413',
	  					'19.407924,-99.165322',
	  					'19.416697,-99.159688',
	  					'20.673627,-103.388902',
	  					'19.4232317,-99.1358129',
	  					'19.4220347,-99.1415756',
	  					'19.4359014,-99.1330726'
	  					];
  	var random_location = locations[Math.floor(Math.random() * locations.length)];
  	var random_location = random_location.split(',');
  	var lat = random_location[0];
  	var lng = random_location[1];
	var latlng = new google.maps.LatLng(lat,lng);
	var myOptions = {
	  zoom: 17,
	  center: latlng,
	  mapTypeId: google.maps.MapTypeId.ROADMAP,
	  mapId: 'a403533c3522d07d90d5bcec'
	};
	//Estilos para el mapa
	var styles = [
		{
			featureType: "all",
			stylers: [
				{ invert_lightness: true },
				{ visibility: "on" }
			]
		},{
			featureType: "poi",
			elementType: "labels",
			stylers: [
				{ visibility: "off" }
			]
		},{
			featureType: "landscape",
			elementType: "labels",
			stylers: [
				{ visibility: "off" }
			]
		},{
			featureType: "transit",
			elementType: "labels",
			stylers: [
				{ visibility: "off" }
			]
		}
	];
	
	//Crea el objeto mapa
	var map = new google.maps.Map(document.getElementById("map_canvas"),
		myOptions);
		
	//Aplica estilos al mapa
	map.setOptions({styles: styles});
	
	//Infowindow
	
	// var contentString = document.getElementById("html").innerHTML;

	var infowindow = new google.maps.InfoWindow({
	    content: 'Hacemos Código &lt;&#47;&gt;',
		maxWidth: 350,
		maxHeight: 350
	});
	
	var markerIcon = document.createElement('img');
	markerIcon.src = 'maquila_marker.png';
	markerIcon.alt = 'Hacemos Código';
	markerIcon.width = 12;
	markerIcon.height = 22;
	
	var marker = new google.maps.marker.AdvancedMarkerElement({
	    position: latlng,
	    map: map,
		content: markerIcon,
	    title:"Los Maquiladores"
	});
	
	infowindow.open({
		anchor: marker,
		map: map
	});

	marker.addListener('click', function() {
	  infowindow.open({
		anchor: marker,
		map: map
	  });
	});
	
}
