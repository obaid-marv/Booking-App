import "./list.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";



const List = ()=>{
    
    const location = useLocation();

    const [destination,setDestination] = useState(location.state.destination);
    const [date,setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false);
    const [options,setOptions] = useState(location.state.options);


    return(
    <div>
        <Navbar/>
        <Header type="list" />
        <div className="listContainer">
            <div className="listWrapper">
                <div className="listSearch">
                    <h1 className="lTitle">Search</h1>
                    <div className="lItem">
                        <label>Destination</label>
                        <input type="text" placeholder={destination}/>
                    </div>
                    <div className="lItem">
                        <label>Check In Date</label>
                        <span onClick={()=>{setOpenDate(!openDate)}}>{`${format(date[0].startDate,"dd/MM/yy")} to ${format(date[0].endDate,"dd/MM/yy")}`}</span>
                        {openDate && <DateRange onChange={item=>setDate([item.selection])} minDate={new Date()}/>}
                    </div>

                    <div className="lItem">
                        <label>Options</label>
                        <div className="lOptionItem">
                            <span className="lOptionText">
                                Min price <small>per night</small>
                            </span>
                            <input type="text" className="lOptionInput" />
                            <span className="lOptionText">
                                Max price <small>per night</small>
                            </span>
                            <input type="text" className="lOptionInput" />


                        </div>

                    </div>
                </div>
                <div className="listResult">

                </div>
            </div>
        </div>
    </div>
    )

};

export default List;