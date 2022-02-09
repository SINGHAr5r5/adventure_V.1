var getmap  = function(data) {
    var input = document.getElementById('pac-input');
    var input2 = document.getElementById('pac-input2');
    var options = {
      componentRestrictions: {}
    };
    var map = new google.maps.Map(document.getElementById('mapmodel'), {
      center: {lat: data['lat'], lng: data['long']},
      zoom: 13
    });
    var searchBox = new google.maps.places.Autocomplete(input, options);  

    var searchBox2 = new google.maps.places.Autocomplete(input2, options); 
    searchBox.bindTo('bounds', map);

    searchBox.addListener('place_changed', function() {
      var places = searchBox.getPlace();
      console.log(places.geometry);
      if(places.geometry != undefined && places.geometry != ""){
        $('#latlong').val($('#pac-input').val()+'/'+places.geometry.location.lat()+'/'+places.geometry.location.lng());
      }
    });
    
  }