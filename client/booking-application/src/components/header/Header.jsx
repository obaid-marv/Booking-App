import "./header.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBed, faPlane, faCar, faMountainSun, faTaxi, faCalendarDays, faPerson} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { useState } from "react";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns";

const Header = ({type})=>{
    
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
    
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState(
        {
            adult:1,
            children:0,
            room:1
        }
    );

    const handleOptions = (name,operation)=>{
        setOptions((prev)=>{
            return{
                ...prev,
                [name] : operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    return(
        <div className="header">
            <div className={type==="list"? "headerContainer listMode" : "headerContainer"}>
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
                { type !== "list" && 
                <>
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
                        <span onClick={()=>{setOpenDate(!openDate); setOpenOptions(false)}} className="searchText">{`${format(date[0].startDate,"dd/MM/yy")} to ${format(date[0].endDate,"dd/MM/yy")}`}</span>
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
                        <span onClick={()=>{setOpenOptions(!openOptions); setOpenDate(false)}} className="searchText">{`${options.adult} adult . ${options.children} children . ${options.room} room` }</span>
                        { openOptions  &&  
                        <div className="options">
                            <div className="optionItem">
                                <span className="optionText">Adult</span>
                                <div className="optionCounter">
                                    <button className="optionCountButton" disabled={options.adult<=1} onClick={()=>handleOptions("adult","d")}>-</button>
                                    <span className="optionCountText">{options.adult}</span>
                                    <button className="optionCountButton" onClick={()=>handleOptions("adult","i")}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Children</span>
                                <div className="optionCounter">
                                    <button className="optionCountButton" disabled={options.children===0} onClick={()=>handleOptions("children","d")}>-</button>
                                    <span className="optionCountText">{options.children}</span>
                                    <button className="optionCountButton" onClick={()=>handleOptions("children","i")}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Room</span>
                                <div className="optionCounter">
                                    <button className="optionCountButton" disabled={options.room<=1} onClick={()=>handleOptions("room","d")}>-</button>
                                    <span className="optionCountText">{options.room}</span>
                                    <button className="optionCountButton" onClick={()=>handleOptions("room","i")}>+</button>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className="searchItem">
                        <button className="headerButton">Search</button>
                    </div>
                </div></> }
            </div>
            
        </div>
        
    )
};

export default Header;