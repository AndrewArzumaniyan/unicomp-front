import React, {useState, useEffect, useMemo} from "react";
import { GoogleMap, Marker } from "react-google-maps";
import withGoogleMap from "react-google-maps/lib/withGoogleMap";
import withScriptjs from "react-google-maps/lib/withScriptjs";
import mapTheme from "./mapStyles.js";
import axios from "axios";

const HelpMap = ({openModal, setPickedUniver}) => {
  let [universities, setUniversities] = useState([])
  let [universitiesLoading, setUniversitiesLoading] = useState(false)
  // let [searchQuery, setSearchQuery] = useState('')

  const universitiesSearch = useMemo(() => {
    return universities
    // return universities.filter((univer) => univer.name.toLowerCase().includes(searchQuery) || univer.visibleName.toLowerCase().includes(searchQuery))
  }, [universities])
  
  useEffect(() => {
    setUniversitiesLoading(true)
    axios.get('http://www.unicomp.kz/api/universities').then((info) => {
      setUniversities(info.data)
      setUniversitiesLoading(false)
    })
  }, [])

  return (
    <GoogleMap 
      defaultZoom={5} 
      defaultCenter={{ lat: 49.018993, lng: 68.033586 }} 
      options={ { styles: mapTheme } }
      // mapTypeId="cf97dc6f67116412"
    >
      {universitiesLoading ? '' :
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