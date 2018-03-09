var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM B&W',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_bathcitytwertonpark_0 = new ol.format.GeoJSON();
var features_bathcitytwertonpark_0 = format_bathcitytwertonpark_0.readFeatures(json_bathcitytwertonpark_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bathcitytwertonpark_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_bathcitytwertonpark_0.addFeatures(features_bathcitytwertonpark_0);var lyr_bathcitytwertonpark_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bathcitytwertonpark_0, 
                style: style_bathcitytwertonpark_0,
                title: '<img src="styles/legend/bathcitytwertonpark_0.png" /> bath city twerton park'
            });

lyr_bathcitytwertonpark_0.setVisible(true);
var layersList = [baseLayer,lyr_bathcitytwertonpark_0];
lyr_bathcitytwertonpark_0.set('fieldAliases', {'ID': 'ID', 'FEATCODE': 'FEATCODE', });
lyr_bathcitytwertonpark_0.set('fieldImages', {'ID': 'TextEdit', 'FEATCODE': 'TextEdit', });
lyr_bathcitytwertonpark_0.set('fieldLabels', {'ID': 'no label', 'FEATCODE': 'no label', });
lyr_bathcitytwertonpark_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});