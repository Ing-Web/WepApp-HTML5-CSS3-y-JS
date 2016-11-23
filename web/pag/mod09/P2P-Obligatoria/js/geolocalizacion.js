var map, lat, lng;
var ruta = [];

$(function () {
    function clear() {
        ruta = [];
        localStorage.ruta = JSON.stringify(ruta);
    };

    $('#compactar').on('click', function () {
        ruta1 = ruta[0];
        ruta2 = ruta[ruta.length - 1];
        ruta = [ruta1, ruta2];
        geolocalizar();
    });

    $('#limpiar').on('click', function () {
        clear();
        geolocalizar();
    });

    function muestra(origen, fin) {
        map.drawRoute({
            origin: origen,
            destination: fin,
            travelMode: 'driving',
            strokeColor: '#3B9313',
            strokeOpacity: 0.6,
            strokeWeight: 5
        });
        map.addMarker({lat: fin[0], lng: fin[1]});
        map.setCenter(fin[0], fin[1]);
    };

    function enlazarMarcador(e) {
        var lat2 = e.latLng.lat();
        var lng2 = e.latLng.lng();
        if (ruta.length > 0) {
            muestra(ruta[ruta.length - 1], [lat2, lng2])
        } else {
            map.addMarker({lat: lat2, lng: lng2});
        }
        ruta.push([lat2, lng2]);
        localStorage.ruta = JSON.stringify(ruta);
    };

    function geolocalizar() {
        GMaps.geolocate({
            success: function (position) {
                if (ruta.length == 0) {
                    lat = position.coords.latitude;
                    lng = position.coords.longitude;
                    ruta.push([lat, lng]);
                    JSON.stringify(ruta);
                } else {
                    lat = ruta[0][0];
                    lng = ruta[0][1];
                }
                map = new GMaps({
                    el: '#map',
                    lat: lat,
                    lng: lng,
                    click: enlazarMarcador,
                    tap: enlazarMarcador
                });

                if (ruta.length > 0) {
                    map.addMarker({lat: ruta[0][0], lng: ruta[0][1]});
                }
                if (ruta.length > 1) {
                    for (i = 1; i < ruta.length; i++) {
                        muestra(ruta[i - 1], ruta[i]);
                    }
                }
            },
            error: function (error) {
                alert('Error: ' + error.message);
            },
            not_supported: function () {
                alert('No soporta geolocalización');
            },
        });
    };

    try {
        ruta = JSON.parse(localStorage.ruta);
    } catch (e) {
        console.log("Parsing error:" + e);
    }

    geolocalizar();
})
