var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_region_HDF_1 = new ol.format.GeoJSON();
var features_region_HDF_1 = format_region_HDF_1.readFeatures(json_region_HDF_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_region_HDF_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_region_HDF_1.addFeatures(features_region_HDF_1);
var lyr_region_HDF_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_region_HDF_1, 
                style: style_region_HDF_1,
                popuplayertitle: 'region_HDF',
                interactive: true,
                title: '<img src="styles/legend/region_HDF_1.png" /> region_HDF'
            });
var format_reseau_lidl_local_2 = new ol.format.GeoJSON();
var features_reseau_lidl_local_2 = format_reseau_lidl_local_2.readFeatures(json_reseau_lidl_local_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reseau_lidl_local_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reseau_lidl_local_2.addFeatures(features_reseau_lidl_local_2);
var lyr_reseau_lidl_local_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reseau_lidl_local_2, 
                style: style_reseau_lidl_local_2,
                popuplayertitle: 'reseau_lidl_local',
                interactive: true,
                title: '<img src="styles/legend/reseau_lidl_local_2.png" /> reseau_lidl_local'
            });

lyr_OSMStandard_0.setVisible(true);lyr_region_HDF_1.setVisible(true);lyr_reseau_lidl_local_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_region_HDF_1,lyr_reseau_lidl_local_2];
lyr_region_HDF_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'INSEE_REG': 'INSEE_REG', 'NOM': 'NOM', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'ID_AUT_ADM': 'ID_AUT_ADM', });
lyr_reseau_lidl_local_2.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'type': 'type', 'name': 'name', 'brand': 'brand', 'operator': 'operator', 'wheelchair': 'wheelchair', 'opening_ho': 'opening_ho', 'level': 'level', 'siret': 'siret', 'profession': 'profession', 'wikidata': 'wikidata', 'website': 'website', 'phone': 'phone', 'email': 'email', 'facebook': 'facebook', 'address': 'address', 'com_insee': 'com_insee', 'com_nom': 'com_nom', 'last_updat': 'last_updat', });
lyr_region_HDF_1.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'INSEE_REG': 'TextEdit', 'NOM': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'ID_AUT_ADM': 'TextEdit', });
lyr_reseau_lidl_local_2.set('fieldImages', {'fid': '', 'osm_id': '', 'type': '', 'name': '', 'brand': '', 'operator': '', 'wheelchair': '', 'opening_ho': '', 'level': '', 'siret': '', 'profession': '', 'wikidata': '', 'website': '', 'phone': '', 'email': '', 'facebook': '', 'address': '', 'com_insee': '', 'com_nom': '', 'last_updat': '', });
lyr_region_HDF_1.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'INSEE_REG': 'no label', 'NOM': 'no label', 'DATE_CREAT': 'no label', 'DATE_MAJ': 'no label', 'DATE_APP': 'no label', 'DATE_CONF': 'no label', 'ID_AUT_ADM': 'no label', });
lyr_reseau_lidl_local_2.set('fieldLabels', {'fid': 'inline label - always visible', 'osm_id': 'inline label - always visible', 'type': 'inline label - always visible', 'name': 'inline label - always visible', 'brand': 'inline label - always visible', 'operator': 'inline label - always visible', 'wheelchair': 'inline label - always visible', 'opening_ho': 'no label', 'level': 'no label', 'siret': 'no label', 'profession': 'no label', 'wikidata': 'no label', 'website': 'no label', 'phone': 'no label', 'email': 'no label', 'facebook': 'no label', 'address': 'no label', 'com_insee': 'no label', 'com_nom': 'no label', 'last_updat': 'no label', });
lyr_reseau_lidl_local_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});