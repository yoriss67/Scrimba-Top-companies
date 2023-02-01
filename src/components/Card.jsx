import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot  } from '@fortawesome/free-solid-svg-icons'


export default function Card (props) {
    return (
        <div className='card'>
        <img className='card--image' src={props.imageUrl} alt="" />
        <div className='card--text'>
            <div className="card--location">
            <FontAwesomeIcon icon={faLocationDot} className="location-dot" />
                <div className="card--location--title">{props.location}</div>
                <a href={props.googleMapUrl} target="_blank">View on Google Maps</a>
            </div>

            <div className="card--text--detail">
             <div  className="card--title--bar">
                <FontAwesomeIcon icon={props.icon} className="card--title-icon" />
                <h3>{props.title}</h3>
             </div>
                <h4>Since {props.foundation} </h4>
                <p className='card--ceo'>CEO : {props.CEO}</p>
                <p className='card--desc'>{props.description} </p>
                <p className='card--sales'>Sales : {props.sales} </p>
            </div>


         </div>
        </div>
    )
}