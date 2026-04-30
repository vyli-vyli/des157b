(function(){
    "use strict";

    var map = L.map('map').setView([37.774929, -122.419418], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var chinatown = L.marker([37.796701, -122.408446]).addTo(map);
    var oraclePark = L.marker([37.778080, -122.390871]).addTo(map);
    var cityHall = L.marker([37.779301, -122.419182]).addTo(map);
    var japantown = L.marker([37.7851, -122.4298]).addTo(map);
    var stonestown = L.marker([37.7282, -122.4771]).addTo(map);
    var palace = L.marker([37.80278, -122.44833]).addTo(map);
    var twinPeaks = L.marker([37.752884, -122.447556]).addTo(map);
    var ggb = L.marker([37.815, -122.4782]).addTo(map);
    

    chinatown.bindPopup("<b>Chinatown</b>").openPopup();
    oraclePark.bindPopup("<b>Oracle Park</b>").openPopup();
    cityHall.bindPopup("<b>City Hall</b>").openPopup();
    japantown.bindPopup("<b>Japantown</b>").openPopup();
    stonestown.bindPopup("<b>Stonestown Galleria</b>").openPopup();
    palace.bindPopup("<b>Palace of Fine Arts</b>").openPopup();
    twinPeaks.bindPopup("<b>Twin Peaks</b>").openPopup();
    ggb.bindPopup("<b>Golden Gate Bridge</b>").openPopup();
 
}());