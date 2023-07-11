import "./header.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBed, faPlane, faCar, faMountainSun, faTaxi, faCalendarDays, faPerson} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { useState } from "react";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns";

const Header = ()=>{
    
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
    
    const [openOptions, seOpenOptions] = useState(false);
    const [options, setOptions] = useState(
        {
            adult:1,
            children:0,
            room:1
        }
    )

    return(
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="listItems active">
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
                <h1 className="headerTitle">A lifeTime of Discount? It's Genius</h1>
                <p className="headerDesc">Get rewarded for your travels, unlock instant savings of 10% or more for your next stays with obaidBooking</p>
                <button className="headerButton">Sign In / Register</button>
            
                <div className="headerSearch">
                    <div className="searchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon" />
                        <input type="text" placeholder="Where are you going?" className="headerTextInput"/>
                    </div>
                    <div className="searchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                        <span onClick={()=>{setOpenDate(!openDate)}} className="searchText">{`${format(date[0].startDate,"dd/MM/yy")} to ${format(date[0].endDate,"dd/MM/yy")}`}</span>
                    { openDate && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
                    />}
                    </div>
                    <div className="searchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                    <span className="searchText">{`${options.adult} adult . ${options.children} children . ${options.room} room` }</span>
                    </div>
                    <div className="searchItem">
                        <button className="headerButton">Search</button>
                    </div>


                </div>
            </div>
            
        </div>
        
    )
};

export default Header;