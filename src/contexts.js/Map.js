import { createContext, useState } from 'react'
import listBars from 'Bars.json'

const MapContext = createContext({})

const MapContextProvider = () => {
  const location = useState(null)
  const bars = useState(listBars)

  const value = {
    location: location,
    bars: bars
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