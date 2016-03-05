function googleMap()
{
	var mapOptions = {
		zoom: 10,
		zoomControl: !1,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.LARGE,
			position: google.maps.ControlPosition.LEFT_TOP
		},
		panControl: !1,
		panControlOptions: {
			position: google.maps.ControlPosition.LEFT_TOP
		},
		scrollwheel: !1,
		navigationControl: !1,
		mapTypeControl: !1,
		scaleControl: !0,
		draggable: !0,
		disableDoubleClickZoom: !1,
		center: new google.maps.LatLng(45.079251, 38.991508)
	};

	var map = new google.maps.Map(document.getElementById('map-conteiner'), mapOptions);

	// moscow
	// krasnodar
	
	var arr = [
		{
			city: 'г. Москва',
			title: 'Москва',
			street: 'Верхняя Масловка, д. 20, стр. 1.',
			phone: '(495) 645-83-54',
			email: 'info@itsntk.ru',
			coords: [ 55.795316,37.562272 ]
		},
		{
			city: 'г. Краснодар',
			title: 'Краснодар',
			street: 'ул. Дальняя, 39/3',
			phone: '(861) 278-98-34',
			email: 'info@itsntk.ru',
			coords: [ 45.060932,38.964575 ]
		}
	];

	function addMarker( ar, map )
	{
		var contentString = [
			'<div class="map-content">',
				'<h2 class="firstHeading">'+ ar['title'] + '</h2>',
				'<div class="map-bodyContent">',
					'<p>' + ar['city'] + '</p>',
					'<p>' + ar['street'] + '</p>',
					'<p>' + ar['phone'] + '</p>',
					'<p>' + ar['email'] + '</p>',
				'</div>',
			'</div>'
		].join('');

		var infowindow = new google.maps.InfoWindow({
			content: contentString,
			disableAutoPan: true,
			maxWidth: 400
		});

		// map-marker.png

		var marker = new google.maps.Marker({
			position: new google.maps.LatLng( ar['coords'][0], ar['coords'][1] ),
			map: map,
			title: ar['title']
		});

		google.maps.event.addListener(marker, 'click', function() {
			if(infowindow)
			{
				infowindow.close();
			}

			infowindow.open(map, marker);
		});
	}

	for (var i = 1; i<arr.length; i++) {
		addMarker( arr[i], map )
	}
}