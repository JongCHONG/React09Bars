import { useContext } from 'react'
import { MapContext } from '../contexts/Map'
import Marker from './Marker'

import GoogleMapReact from 'google-map-react'
import styled from 'styled-components'

const MapContainer = styled.div`
  height: 100vh;
  width: 100%;
`

const Map = () => {
  const { location, bars } = useContext(MapContext)
  if (!location) {
    return <p>Chargement...</p>
  }
  // console.log(bars[2].latitude);
  console.log(bars);
  return(
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={location}
        defaultZoom={14}
      >
        <Marker
          lat={location.lat}
          lng={location.lng}
        />
      {bars.map(element => <Marker key={element.id} lat={element.latitude} lng={element.longitude} name={element.name}/> )}
      </GoogleMapReact>
    </MapContainer>
  )
}

export default Map