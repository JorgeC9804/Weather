import React from "react";
import './Weather.styles.css';

const WeatherSearch = ({handleActiveSubmit, handleWeatherAPI}) => {
    
    return (
        <form onSubmit = { e => handleActiveSubmit(e)} className='form-principal'>
            {/*<button>
                <img src='https://media.istockphoto.com/vectors/magnifying-glass-icon-vector-id986618996' alt='papi'/>
            </button>*/}
            <input
                type='text'
                placeholder='Search country or state weather'
                className='input-search'
                onChange = { ({target}) => handleWeatherAPI(target) }
            />
        </form>
    )
};

export default WeatherSearch;