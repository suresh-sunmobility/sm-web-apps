

var startdate,enddate;
var mapLive;
var cityListArray = [], markersListArray = [];
var fullJson;
var geocoder;
var prev_infowindow =false; 
var exportExcel,submitLocation;
var jsonLocalFile;
var areaWiseDataArray = [];
var wholeDataArray = [];
var vehicleTypeDataArray = [];
var locationtypeNames = [] , locationTypeIds = [];
var vehicletypeNames = [] , vehicleTypeIds = [];
var selectedLat,selectedLong;
var locationPickMarker;
 var customLatlong;
  var splitted = []; 
$(document).ready(function () 
{
  var latlong = {lat: 25.315870, lng: 79.104963};
  mapLive = new google.maps.Map(document.getElementById('map_canvasLive'),
  {
    zoom: 5,
    center: latlong,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  var kmlLayer = new google.maps.KmlLayer({
          url: 'https://raw.githubusercontent.com/suresh-sunmobility/sm-web-apps/master/BBMPWardMap.kml',
          suppressInfoWindows: true,
      preserveViewport:false,
      clickable: true,
     map: mapLive
        });
    //kmlLayer.setMap(mapLive);
     kmlLayer.addListener('click', function(kmlEvent) {
          var text = kmlEvent.featureData.infoWindowHtml;
          showInContentWindow(text);
        });
        function showInContentWindow(text) {
          alert('clicked');
        }

        google.maps.event.addListener(mapLive, "click", function (e) {

    //lat and lng is available in e object
    var latLng = e.latLng;
    console.log(latLng.lat(),latLng.lng());

});
});






































