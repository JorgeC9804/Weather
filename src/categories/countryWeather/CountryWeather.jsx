import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../Complement.styles.css';


const CountryWeather = ({country, setActive}) => {
    
    const [countries, setCountries] = useState([]);
    const [conditionClouds, setConditionClouds] = useState(null);
    const [condictionTem, setConditionTem] = useState(null);
    const [region, setRegion] = useState('');

    useEffect( () => {
        const countryResponse = async () => {
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=3641124806774e148e622341211909&q=${country}&aqi=si`);
            const result = await response.json();
            setCountries(result.location.country);
            setConditionClouds(result.current.condition.icon);
            setConditionTem(result.current.temp_c);
            setRegion(result.location.name);
            setActive(true);
            //console.log(result.current)
        };
        countryResponse();
    }, [country, setActive] );

    return (
        <Link to={`/weather-information/${region}/${countries}`} className='link-country'>
            <div className='weather-country'>
                {countries}
            </div>
            <div className='weather-icon'>
                <img src={`https:${conditionClouds}`} alt='weather' className='icon' />
            </div>
            <div className='weather-tem'>
                {condictionTem}°
            </div>
        </Link>
    )
};

export default CountryWeather;