import React from "react";
import './News.styles.css'

const News1 = () => {

    return (
        <div className='card-1'>
            <img src={`https://www.paho.org/sites/default/files/styles/flexslider_full/public/banner-covid-19-1280x549.jpg?h=0f7a3278&itok=nrTaMkjD`} alt='cov'/>
            <div style={{position:'relative', top:'15px'}}>
                Lorem ipsum dolor sit amet consec........ view more News
            </div>
        </div>
    )
};

export default News1;