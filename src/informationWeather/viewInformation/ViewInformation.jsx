import React, { useState } from "react";
import { Link } from 'react-router-dom';
import InsideSearch from "./InsideSearch";
import Loader from "../../loader/Loader";
import '../InformationWeather.styles.css';

const ViewInformation = ({current, condition, location, setActive, active}) => {

    const { cloud, temp_c, temp_f, wind_kph} = current;
    const { text, icon } = condition;
    const { country, localtime, name } = location;
    const [nameCountry, setNameCountry] = useState([]);
    const [countryLocation, setCountryLocation] = useState('');
    const [namelocation, setNameSLocation] = useState('');
    const [CtempCurrent, setCTempCurrent] = useState(0);
    const [FtempCurrent, setFTempCurrent] = useState(0);
    const [timelocation, setTimeLocation] = useState('');
    const [iconCurrent, setIconCurrent] = useState('');
    const [textCurrent, setTextCurrent] = useState(''); 
    const [cloudCurrent, setCloudCurrent] = useState(0);
    const [windCurrent, setWindCurrent] = useState(0);
    const [error, setError] = useState(false);
    const [loader, setLoader] = useState(false);

    const handleSearch = ({value}) => {
        setNameCountry(value);
    };

    const handleSumbit = async (event) => {
        event.preventDefault();
        event.target.reset();
        setLoader(true);
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=3641124806774e148e622341211909&q=${nameCountry}&aqi=si`);
        const result = await response.json();
        const { location } = result;
        if (location === undefined) {
            setError(true);
        } else {
            setError(false);
            setActive(false);
            setCountryLocation(result.location.country);
            setNameSLocation(result.location.name);
            setCTempCurrent(result.current.temp_c);
            setFTempCurrent(result.current.temp_f);
            setTimeLocation(result.location.localtime);
            setIconCurrent(result.current.condition.icon);
            setTextCurrent(result.current.condition.text);
            setCloudCurrent(result.current.cloud);
            setWindCurrent(result.current.wind_kph);
        };
        setLoader(false);
    };

    return ( 
        <div className='sec-information'>
            <section className='header'>
                <div className='information'>
                    <Link to='/' 
                        style={{
                                textDecoration: 'none',
                                color: 'black'
                            }}><h1>WEATHER</h1>
                    </Link>
                </div>
                <div className='sec-search'>
                    <div>
                        <InsideSearch 
                            handleSumbit={handleSumbit}
                            handleSearch={handleSearch}
                        />
                    </div>
                </div>
            </section>
            { error ? <section className='error'>Country Not Found</section> : <></> } 
            { loader ? <div className='loader'>loading...</div> : <></>}
            <section className='general'>
                <div className='card-info'>
                    <div className='column-1'>
                        <div className='time-location'>
                            THE REAL TIME {active ? <>{localtime}</> : <>{timelocation}</>}
                        </div>
                        <div className='clouds'>
                            <div style={{width:'50%'}}>
                                <img src={`http://${ active ? icon : iconCurrent }`} alt='' className='icon-view' />
                            </div>
                            <div style={{display:'flex', flexDirection:'column'}}>
                                <div>
                                    <div style={
                                        {fontSize:'70px',
                                        width:'100%'}
                                    }>
                                        {
                                            active ? <>{temp_c}°</> : <>{CtempCurrent}°</>
                                        }
                                    </div>
                                    <div style={
                                        {fontSize:'25px', position:'relative',
                                        top:'47px', height:'35px', left:'-22px'}
                                    }>
                                        C
                                    </div>
                                </div>
                                <div style={{display:'flex', justifyContent:'center', fontSize:'17px'}}>
                                    {
                                        active ? <>{temp_f}° F</> : <>{FtempCurrent}° F</>
                                    }
                                </div>
                            </div>
                        </div>
                        <div style={{fontSize:'20px', display:'flex', alignItems:'center',
                                    position:'relative', left:'20px'}}>
                            {
                                active ? <>{text}</> : <>{textCurrent}</>
                            }
                        </div>
                    </div>
                    <div className='column-2'>
                        <div style={{padding: '0px 7px 0px'}}>
                            {
                                active ? <>{name}, {country}</> : <>{namelocation}, {countryLocation}</>
                            } 
                        </div>
                        <hr color="blue" width='255' />
                        <div style={{display:'flex', justifyContent:'space-between', padding: '0px 7px 0px'}}>
                            <div>Wind</div> <div>{active ? <>{wind_kph}</> : <>{windCurrent}</>} k/h</div>
                        </div>
                        <hr color="blue" width='255' />
                        <div style={{display:'flex', justifyContent:'space-between', padding: '0px 7px 0px'}}>
                            <div>clouds</div> <div>{active ? <>{cloud} %</> : <>{cloudCurrent} %</>}</div>
                        </div>
                        <hr color="blue" width='255' />
                        <Link to='/' style={
                                {textDecoration:'none', color:'black',
                                position:'relative', top:'40px', padding:'5px', left:'90px',
                                width:'170px'}}>
                            RETURN PRINCIPAL ---
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default ViewInformation;