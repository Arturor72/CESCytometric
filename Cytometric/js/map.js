window.onload = function(){
    var myLatlng = new google.maps.LatLng(-12.060296, -77.041580);
    
    var options = {
        zoom: 15
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
      title:"Pruseba"
  });
    
    marker.setMap(map);
    
    google.maps.event.addListener(marker, 'click', toggleBounce);
    google.maps.event.addListener(marker,'dblclick',zoomClick);
    google.maps.event.addListener(marker,'mouseover', mouseinfo);
    
    var infowindow = new    google.maps.InfoWindow({content:'<p>Haoala</p>'
  }); 
     
    function zoomClick(){
        map.setZoom(11);
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


