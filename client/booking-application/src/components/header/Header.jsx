import "./header.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBed, faPlane, faCar, faMountainSun, faTaxi} from "@fortawesome/free-solid-svg-icons";
const Header = ()=>{
    return(
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="listItems">
                        <FontAwesomeIcon icon={faBed}/>
                        <span>Stays</span>
                    </div>
                    <div className="listItems">
                        <FontAwesomeIcon icon={faPlane}/>
                        <span>Flights</span>
                    </div>
                    <div className="listItems">
                        <FontAwesomeIcon icon={faCar}/>
                        <span>Car Rentals</span>
                    </div>
                    <div className="listItems">
                    <FontAwesomeIcon icon={faMountainSun} />
                        <span>Attractions</span>
                    </div>
                    <div className="listItems">
                        <FontAwesomeIcon icon={faTaxi}/>
                        <span>Airport Taxi's</span>
                    </div>
                </div>
            </div>    
        </div>
        
    )
};

export default Header;