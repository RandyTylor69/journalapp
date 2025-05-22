import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import "./Entry.css"

export default function Entry(prop) {

    // the props come from App.js
    return(
        <div className="entry">
            <img src= {prop.img.src} alt={prop.img.alt} />
            <div className="descriptionText">
                <div className="desc1">
                    <FontAwesomeIcon icon={faLocationDot} className='icon' />
                    <p>{prop.country}</p>
                    <a href={prop.googleMapsLink}>View on Google Map</a>
                </div>
                <div className="desc2">
                    <h1>{prop.title}</h1>
                </div>
                <div className="desc3">
                    <h3 className='date'>{prop.date}</h3>
                    <p className='notes'>{prop.text}</p>
                </div>
            </div>
        </div>
    )
}