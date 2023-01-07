import React from "react";
import './Img.css'
import Img from "./Img";
import { useEffect } from 'react';
import axios from 'axios';
import Data from "./Data";
function Imgs(props)
{
    console.log(props.flight)
    let imageUrls = []
    const images = Data.map(item =>
        <Img
            src={item.link}
            text={item.Detections}
            location={item.location}
            urls = {imageUrls}
        />
        )
    if(props.display)
    {
    return (
        <div className="idk">
                {images}
        </div>
    )
}
}

export default Imgs;







// useEffect(() => {
    //     axios.get("https://swapi.dev/api/vehicles/4/").then((data) => {
        //         console.log(data)
        //     })
        //   })
        {/* <button className='final-btn'>Create Ticket</button> */}
        {/* <Img 
            src={'drone-results-4.jpeg'}
            text='0'
            location='Ground'
            path='/images'
            urls ={imageUrls}
        />
        <Img 
            src={'drone-results-4.jpeg'}
            text='0'
            location='Ground'
            path='/images'
            urls ={imageUrls}
            />
        <Img 
            src={'drone-results-4.jpeg'}
            text='0'
            location='Ground'
            path='/images'
            urls ={imageUrls}
            />
        <Img 
            src={'drone-results-4.jpeg'}
            text='0'
            location='Ground'
            path='/images'
            urls ={imageUrls}
            />
        <Img 
            src={'drone-results-4.jpeg'}
            text='0'
            location='Ground'
            path='/images'
            urls ={imageUrls}
            />
        <Img 
            src={'drone-results-4.jpeg'}
            text='0'
            location='Ground'
            path='/images'
            urls ={imageUrls}
            /> */}