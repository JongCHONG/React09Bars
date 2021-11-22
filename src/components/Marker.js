import { useState } from 'react'
import styled from 'styled-components'

import { FaMapMarkerAlt } from 'react-icons/fa'

const MarkerContainer = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
`

const Marker = props => {
  const { infoWindow, setInfoWindow} = useState(false)

  const handleInfoWindow = () => {
    if (!infoWindow) {
      setInfoWindow(true)

    }
  }

  return(
    <MarkerContainer>
      <FaMapMarkerAlt 
        style={{ 
          width: '40px', 
          height: '40px', 
          color: "red", 
          position: "absolute", 
          bottom: '100%', 
          left: '-20px' 
        }} 
      />
      {/* <InfoWindow onmouseenter={handleInfoWindow()} > */}
      <InfoWindow onmouseenter={handleInfoWindow()} style={{background: "white", display: "none"}}>
        {props.name}
      </InfoWindow>
    </MarkerContainer>
  )
}

export default Marker