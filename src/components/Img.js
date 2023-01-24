import React from "react";
export default function Img(props)
{
    const [select,setselect] = React.useState(false)

    function toggle(){
        setselect(prevSelect => !prevSelect)
        !select ? props.urls.push(
            {flight_id:"xyz",
             image_url:props.src
            }
            ) : props.urls.splice(props.urls.findIndex(item => item.field === props.src), 1)
            // props.urls.delete(props.src)
        console.log(props.urls)
    }
    
    const divStyle = {
        border: select ? '10px solid green' : '0px solid black'
    };
    return (
        <div className="imgList"  onClick={toggle}>
            <div key={props.id} className="imgCard" style={divStyle} >
                <img src={props.src} alt="image-img" className="imgImage" />
                <div className="imageCard__content">
                    {/* <h2 className="imgDetections">Detections : {props.text}</h2> */}
                    {/* <h2 className="imgLocations">Location : {props.location}</h2> */}
                </div>
            </div>
        </div>

    )
    
}