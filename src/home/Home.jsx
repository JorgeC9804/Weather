import React, { useState } from "react";
import Complement from "../categories/Complement";
import Weather from "../components/Weather";
import WeatherSearch from "../components/WeatherSearch";
import './Home.styles.css';
import '../categories/Complement.styles.css';

const Home = ({setActive}) => {

    const [location, setLocation] = useState({});
    const [current, setCurrent] = useState({});
    const [condition, setCondiction] = useState({});
    const [nameCity, setNameCity] = useState('');
    const [messageError, setMessageError] = useState('');
    const [error, setError] = useState(true);
    const [loader, setLoader] = useState(true);

    const handleWeatherAPI = ({value}) => {
        setNameCity(value);
    };

    const handleActiveSubmit = async e => {
        e.preventDefault();
        e.target.reset();
        setLoader(false);
        setLocation({});
        setCurrent({});
        setCondiction({});
        setMessageError('');
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=3641124806774e148e622341211909&q=${nameCity}&aqi=no`);
        const result = await response.json();
        const {location} = result;
        location ? setError(false) : setError(true);
        location ? setLocation(result.location) : setMessageError(result.error.message);
        location ? setCurrent(result.current) :  setMessageError(result.error.message);
        location ? setCondiction(result.current.condition) :  setMessageError(result.error.message);
        setLoader(true);
        setActive(true);
    };    
 
    return (
        <div className='principal'>
            <h1>WEATHER</h1>
            <WeatherSearch 
                handleActiveSubmit={handleActiveSubmit}
                handleWeatherAPI={handleWeatherAPI}
            />
            {loader ? <></> : <section className='loader'>loading...</section> }
            {
                error ? <section className='response'>{messageError}</section> : 
                    <section className='weather'>
                        <Weather 
                            location={location} 
                            current={current}
                            condition={condition}
                        />
                    </section>
            }
            <section className='complement'>
                <Complement setActive={setActive}/>
            </section>
        </div>
    )
};

export default Home;