import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import Wrapper from './LeafletMap.styles';
const style = {
  width: '100%',
  height: '400px',
};
const config = {
  tileLayer: 'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
  maxZoom: 18,
  attribution:
    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  defaultZoom: 11,
  center: [40.706877, -74.011265],
};
export default function LeafletMap({
  id = 'leaflet-map',
  center = [13.7391, 100.5577],
  zoom = 14,
  markerList = [],
  htmlMarkerList = [],
  customIconMarkerList = [],
  draggable = false,
}) {
  // create map

  const mapRef = useRef(null);
  useEffect(() => {
    mapRef.current = L.map(id, {
      center: center,
      zoom: zoom,
      layers: [
        L.tileLayer(config.tileLayer, {
          attribution: config.attribution,
          maxZoom: config.maxZoom,
        }),
      ],
    });
    // return ()=>
  }, []);

  // add markers
  const markerRef = useRef(null);

  useEffect(() => {
    if (markerList.length !== 0) {
      markerRef.current = markerList.map(({ position, popupText }) =>
        L.marker(position)
          .addTo(mapRef.current)
          .bindPopup(popupText)
      );
    }
    if (htmlMarkerList.length !== 0) {
      if (markerRef.current) markerRef.current[0].remove();
      markerRef.current = htmlMarkerList.map(
        ({ className, html, position, popupText }) =>
          L.marker(position, {
            icon: L.divIcon({
              className: className,
              popupAnchor: [15, -15], // point from which the popup should open relative to the iconAnchor
              html: html,
            }),
            draggable: draggable,
          })
            .addTo(mapRef.current)
            .bindPopup(popupText)
      );
      mapRef.current.panTo(htmlMarkerList[0].position);

      return () => {
        console.log(markerRef.current);
      };
    }
    if (customIconMarkerList.length !== 0) {
      markerRef.current.remove();

      markerRef.current = customIconMarkerList.map(
        ({ shadowUrl, iconUrl, position, popupText }) =>
          L.marker(position, {
            icon: L.icon({
              iconUrl: iconUrl,
              shadowUrl: shadowUrl,
              iconSize: [40, 40], // size of the icon
              shadowSize: [40, 40], // size of the shadow
              // iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
              shadowAnchor: [12, 20], // the same for the shadow
              popupAnchor: [0, -20], // point from which the popup should open relative to the iconAnchor
            }),
          })
            .addTo(mapRef.current)
            .bindPopup(popupText)
      );
    }
  }, [htmlMarkerList]);
  return (
    <Wrapper className="isoLeafletMap">
      <div id={id} style={style} />
    </Wrapper>
  );
}
