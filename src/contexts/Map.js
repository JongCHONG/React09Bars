import { createContext, useState, useEffect } from 'react'
import listBars from '../bars.json'

const MapContext = createContext({})

const MapContextProvider = props => {
  const [location, setLocation] = useState(null)
  const [bars, setBars] = useState(listBars)

  useEffect(() => { // => componentDidMount
    navigator.geolocation.getCurrentPosition (
      location => {
        console.log(location.coods)
        setLocation({
          lat: location.coords.latitude,
          lng: location.coords.longitude
        })
      }
    )
  }, [])

  const value = {
    location,
    setLocation,
    bars,
    setBars
  }

  return (
    <MapContext.Provider value={value}>
      {props.children}
    </MapContext.Provider>
  )
}

export {
  MapContextProvider,
  MapContext
}