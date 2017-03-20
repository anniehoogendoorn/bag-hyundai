var mapscript = document.createElement('script');
mapscript.type = 'text/javascript';
mapscript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCZbR9S95FhcFwCMrkpYiAkGeVRUjH1GJI&v=3.exp';
document.getElementsByTagName('head')[0].appendChild(mapscript);

$.getScript( "https://maps.googleapis.com/maps/api/js?key=AIzaSyCZbR9S95FhcFwCMrkpYiAkGeVRUjH1GJI&v=3.exp");


setTimeout(function() {
var map;
			function initialize() {

				var mapOptions = {
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					mapTypeControl: false,
					zoom: 15,
					zoomControl: true,
					panControl: false,
					streetViewControl: false,
					scrollwheel: false,
					scaleControl: false,
					overviewMapControl: false,
					center: new google.maps.LatLng(45.4877695, -122.815212)
				};

				map = new google.maps.Map(document.getElementById('map-canvas'),
					mapOptions);

				var mapStyles = [
					{
						featureType: "all",
						elementType: "all",
						stylers: [
							{ saturation: -100 }
						]
				}];

				map.setOptions({styles: mapStyles});

				var infoContent = '<div class="window-content"><h4>Beaverton Hyundai</h4><p>13255 SW Farmington Rd<br>Beaverton, OR 97005<br>Sales: <a href="tel:1-877-812-1212">(877) 812-0866</a><br>Service: <a href="tel:1-888-492-4843">(888) 492-4843</a><br>Parts: <a href="tel:1-877-801-3907">(877) 801-3907</a></p></div>';

				var infowindow = new google.maps.InfoWindow({
					content: infoContent
				});

				var icon = {
					path: 'M16.5,51s-16.5-25.119-16.5-34.327c0-9.2082,7.3873-16.673,16.5-16.673,9.113,0,16.5,7.4648,16.5,16.673,0,9.208-16.5,34.327-16.5,34.327zm0-27.462c3.7523,0,6.7941-3.0737,6.7941-6.8654,0-3.7916-3.0418-6.8654-6.7941-6.8654s-6.7941,3.0737-6.7941,6.8654c0,3.7916,3.0418,6.8654,6.7941,6.8654z',
					anchor: new google.maps.Point(16.5, 51),
					fillColor: '#0d65bf',
					fillOpacity: 1,
					strokeWeight: 0,
					scale: 0.66
				};

				var marker = new google.maps.Marker({
					position: new google.maps.LatLng(45.4877695, -122.815212),
					map: map,
					icon: icon,
					title: 'marker'
				});

				google.maps.event.addListener(marker, 'click', function() {
					infowindow.open(map,marker);
				});

			}

			google.maps.event.addDomListener(window, 'load', initialize);

			function checkResize(){

				var center = map.getCenter();
				google.maps.event.trigger(map, 'resize');
				map.setCenter(center);
			}

			window.onresize = checkResize;

console.log('this works');


}, 5000);
