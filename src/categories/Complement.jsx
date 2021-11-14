import React from "react";
import { Link } from "react-router-dom";
import CountryWeather from "./countryWeather/CountryWeather";
import { countries } from "../countries/Countries";
import News1 from "./news/New1";
import News2 from "./news/New2";
import './Complement.styles.css'

const Complement = ({setActive}) => {

    return (
        <>
            <div className='countries'>
                {
                    countries.map( (country, index)  =>  
                        <div className='column' key={index}>
                            <CountryWeather 
                                country={country}
                                setActive={setActive}
                            />     
                        </div>
                    )
                }
            </div>
            <div className='sec-news'>
                <div className='news-1'>
                    <Link to='/newsCovid' className='link'>
                        <News1 />
                    </Link>       
                </div>
                <div className='news-2'>
                    <Link to='/newsMetaVerse' className='link'>
                        <News2 />
                    </Link>
                </div>
            </div>
        </>
    )
};

export default Complement;