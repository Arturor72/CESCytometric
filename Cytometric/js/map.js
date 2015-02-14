window.onload = function(){
    var myLatlng = new google.maps.LatLng(-12.1015803, -77.0117455);
    
    var options = {
        zoom: 16
        ,zoomControl:true
        ,zoomControlOptions: {
            style:google.maps.ZoomControlStyle.DEFAULT
        }
        , center: myLatlng
        , mapTypeId: google.maps.MapTypeId.ROADMAP,
        panControl:true,
        scrollwheel: false,
        mapTypeControl:false,
        navigationControl: true,
        disableDefaultUI:true,
        noClear:true,
    };
    var map = new       google.maps.Map(document.getElementById('map1'), options);
    var marker = new google.maps.Marker({
      position: myLatlng, 
      title:"Cytometric"
  });
    
    marker.setMap(map);
     
    google.maps.event.addListener(marker, 'click', toggleBounce);
    google.maps.event.addListener(marker,'dblclick',zoomClick);
    google.maps.event.addListener(marker,'mouseover', mouseinfo);
    
    var infowindow = new    google.maps.InfoWindow({content:'<p>Cytometric</p>'
  }); 
     
    function mouseinfo(){
        map.setCenter(marker.getPosition());  
    } 
     
    function toggleBounce() {
      if (marker.getAnimation() != null) {
        marker.setAnimation(null);
        infowindow.close(map,this);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
          infowindow.open(map,marker);
      }
    }
    
    
};


