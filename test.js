var polyline = require('@mapbox/polyline');
const fs = require("fs");
console.log(polyline.fromGeoJSON(
	{ "type": "Feature",
	"geometry": {
	  "type": "LineStr1ing",
	  "coordinates": [[-120.2, 38.5], [-120.95, 40.7], [-126.453, 43.252]]
	},
	"properties": {}
  }
))