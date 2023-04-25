import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

function Card(props){
    return(
        <div className="container">
            <span className="img" style={{backgroundImage: `url(${props.item.imageUrl})`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center"}}>                    
            </span>

            <div>
                <div className="location-text">
                <section>
                    <FontAwesomeIcon className="location" icon={faLocationDot} /> 
                    <p>{props.item.location}</p> 
                </section>  
                <span>
                    <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                </span>
                </div>
                <h1>{props.item.title}</h1>
                <span className="date">{props.item.startDate} - {props.item.endDate}</span>
                <p className="description">{props.item.description}</p>
            </div>

        </div>
    )
}

export default Card