import React, { useMemo } from "react";
import { GoogleMap, Marker } from "react-google-maps";
import withGoogleMap from "react-google-maps/lib/withGoogleMap";
import withScriptjs from "react-google-maps/lib/withScriptjs";
import mapTheme from "./mapStyles.js";
import useLoadBd from "../../API/useLoadBd.js";

const HelpMap = ({openModal, setPickedUniver}) => {
  let [data, dataLoading] = useLoadBd('http://www.unicomp.kz/api/universities')

  const universitiesSearch = useMemo(() => {
    if (!data) return null
    return data
  }, [data])

  return (
    <GoogleMap 
      defaultZoom={5} 
      defaultCenter={{ lat: 49.018993, lng: 68.033586 }} 
      options={ { styles: mapTheme } }
    >
      {dataLoading ? '' :
        universitiesSearch.map((univer) => (
          univer.coordinates ?
          <Marker
            key={`map-${univer._id}`}
            position={{
              lat: univer.coordinates[0],
              lng: univer.coordinates[1]
            }}
            onClick={() => {
              setPickedUniver(univer)
              openModal()
            }}
          />
          : ""
        ))
      }
    </GoogleMap>
  );
}

const Map = withScriptjs(withGoogleMap(HelpMap))

export default Map