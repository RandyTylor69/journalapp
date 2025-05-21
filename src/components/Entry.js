import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import "./Entry.css"
export default function Entry() {
    return(
        <div className="entry">
            <img src= "https://media.discordapp.net/attachments/759795616539738156/1374807754883203104/fuji.jpg?ex=682f64ff&is=682e137f&hm=8639a5e507ffdcbb254a09aeb994cfc602d419484107c710244723ed7a2ae899&=&format=webp&width=590&height=865" alt="mount fuji" />
            <div className="descriptionText">
                <div className="desc1">
                    <FontAwesomeIcon icon={faLocationDot} className='icon' />
                    <p>J A P A N</p>
                    <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on Google Map</a>
                </div>
                <div className="desc2">
                    <h1>Mount Fuji</h1>
                </div>
                <div className="desc3">
                    <h3 className='date'>12 Jan, 2023 - 24 Jan, 2023</h3>
                    <p className='notes'>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                </div>
            </div>
        </div>
    )
}