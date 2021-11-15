import React, { useEffect, useState }from "react";
import { useParams } from "react-router";
import ViewInformation from "./viewInformation/ViewInformation";

const InformationWeather = ({setActive, active}) => {

    const { regionName } = useParams();
    const [current, setCurrent] = useState({});
    const [condition, setCondition] = useState({});
    const [location, setLocation] = useState({});

    useEffect( () => {
        const countryResponse = async () => {
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=3641124806774e148e622341211909&q=${regionName}&aqi=yes`);
            const result = await response.json();
            setCurrent(result.current);
            setCondition(result.current.condition);
            setLocation(result.location);
            //console.log(result);
        };
        countryResponse();
    }, [regionName] );
    
    return (        
        <ViewInformation 
            current={current}
            condition={condition}
            location={location}
            setActive={setActive}
            active={active}
        />
    )
};

export default InformationWeather;
