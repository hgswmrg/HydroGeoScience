"use client";

import { useEffect, useRef } from 'react';
import proj4 from 'proj4';
import { register } from 'ol/proj/proj4'; // Add the import for 'register'
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import ImageLayer from 'ol/layer/Image';
import ImageStatic from 'ol/source/ImageStatic';
import OSM from 'ol/source/OSM';

export default function MapPage() {
  const mapContainerRef = useRef(null);

  const minX = -139.997183731; // Minimum longitude
  const minY = 64.997161996;   // Minimum latitude
  const maxX = -52.687609280;  // Maximum longitude
  const maxY = 25.018233202;   // Maximum latitude

  proj4.defs('ESRI:102008', '+proj=aea +lat_1=20 +lat_2=60 +lat_0=40 +lon_0=-96 +x_0=0 +y_0=0 +datum=NAD83 +units=m +no_defs');
  register(proj4);

  useEffect(() => {
    const map = new Map({
      target: mapContainerRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new ImageLayer({
          source: new ImageStatic({
            url: '/assets/V1_140.jpg',
            imageExtent: [minX, minY, maxX, maxY], // Set the extent of the image
            
          }),
        }),
      ],
      view: new View({
        center: proj4('EPSG:3857', 'ESRI:102008', [-10997148, 4569099]),
       
        zoom: 5,
        projection: 'ESRI:102008'
      })
    });

    return () => {
      map.setTarget(null);
    };
  }, []);

  return (
    <div
      ref={mapContainerRef}
      className="h-screen map-container"
      style={{ width: '100%', height: '100vh' }}
    ></div>
  );
}
