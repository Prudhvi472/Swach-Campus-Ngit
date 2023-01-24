import React from "react";
import './Img.css'
import Img from "./Img";
import { useEffect } from 'react';
import axios from 'axios';
function Imgs(props)
{
    const[lol,setlol] = React.useState("")
    const[flag,setflag] = React.useState(false)
    console.log(props.flight)
    let imageUrls = []
    useEffect(() => {
        axios.get(`http://18.234.187.114:4000/image/query/${props.flight}`).then((data) => 
        {
            const images = data.data.map(item =>
                <Img
                    src={item.main_url}
                    text={item.Detections}
                    location={item.location}
                    urls = {imageUrls}
                />
                )
                console.log(images)
                setlol(images)
                setflag(true)
            })
            
          })
    if(props.display)
    {
    return (
        <div className="idk">
                {lol}
        </div>
    )
}
}

export default Imgs;
