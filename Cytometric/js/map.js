var infowindow;

(function () {

  google.maps.Map.prototype.markers = new Array();
    
  google.maps.Map.prototype.addMarker = function(marker) {
    this.markers[this.markers.length] = marker;
  };
    
  google.maps.Map.prototype.getMarkers = function() {
    return this.markers
  };
    
  google.maps.Map.prototype.clearMarkers = function() {
    if(infowindow) {
      infowindow.close();
    }
    
    for(var i=0; i<this.markers.length; i++){
      this.markers[i].setMap(null);
    }
  };
})();


function initialize(){
    /*
        CREAR POSICIONES DE LOS LUGARES
    */
    var ListaMapas = new Array();
    var obj = new Object();
    obj.name = "Sede Lima"
    obj.lat = -12.1021153
    obj.lng = -77.011767
    obj.img = "lima"
    ListaMapas[0] = obj;

    var obj = new Object();
    obj.name = "Sede Trujillo"
    obj.lat = -8.1131438
    obj.lng = -79.0299046
    obj.img = "trujillo"
    ListaMapas[1] = obj;
    /************************************************/
    /*
        CREAR ID DEL HTML
    */
    var id = new Array();
    var objId = new Object();
    objId.name = "map1"
    id[0] = objId;

    var objId = new Object();
    objId.name = "map2"
    id[1] = objId;

    var map;
    var myLatlng;
    var options;
    var map
    for(var i = 0; i < id.length; i++){
        myLatlng = new google.maps.LatLng(ListaMapas[i].lat, ListaMapas[i].lng);
        options = {
            zoom: 15
            ,zoomControl:true
            ,zoomControlOptions: {
                style:google.maps.ZoomControlStyle.DEFAULT
            }
            , center: myLatlng
            , mapTypeId: google.maps.MapTypeId.ROADMAP,
            panControl:true,
            panControlOptions: {
                position: google.maps.ControlPosition.TOP_LEFT
            },
            scrollwheel: false,
            mapTypeControl:true,
            navigationControl: true,
            disableDefaultUI:true,
            noClear:true,
        };
        var map = new google.maps.Map(document.getElementById(id[i].name), options);
        map.addMarker(createMarker( map, myLatlng, ListaMapas[i] ));

    }

    function mouseinfo(){
        if (infowindow) infowindow.close();
        infowindow.open(mapActual, marker);
    } 
    var n;
    var temp = null;
    function createMarker( mapActual,latlng, Lista){
        var marker = new google.maps.Marker({
            position: latlng,
            map: mapActual,
            animation: google.maps.Animation.BOUNCE});
        
        google.maps.event.addListener(marker, "click", function() {    
          infowindow = new google.maps.InfoWindow({
            content: '<div class="infowindow"><h2>'+Lista.name + '</h2><img src="img/contactos/'+Lista.img+'.jpg" alt=""></img></div>'
            });
            if(marker.getAnimation() != null)
              marker.setAnimation(null);
            else{
              marker.setAnimation(google.maps.Animation.DROP);
            } 
            infowindow.open(mapActual, marker);        
        });
            
        return marker;
    }
};

google.maps.event.addDomListener(window, 'load', initialize);
