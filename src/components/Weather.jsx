import React from "react";
import { Link } from "react-router-dom";

const Weather = ({location, condition}) => {

    const { country, name } = location;
    const { icon } = condition;
    if(icon === undefined) console.log()

    // https://www.accuweather.com/es/world-weather

   

    return (
        <div className='info-weather'>
            {
                country &&
                <Link to={`/weather-information/${name}/${country}`} className='link'>
                    <section className='sec-wea'>
                            <div>
                                {name}, {country}
                            </div>
                            <img src={`https:${icon}`} alt='weather'/>
                            ......
                    </section>
                </Link>
            }
        </div>
    )
};

export default Weather;