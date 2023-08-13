import "./searchItem.css";
const SearchItem = () => {
  return (
    <div className="searchResultItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" alt="" className="sImg" />
        <div className="sDesc">
            <h1 className="sTitle">Aparthotel Stare Miasto</h1>
            <span className="sDistance">500m from centre</span>
            <span className="sTaxi">Free Airport Pickup</span>
            <span className="sSubtitle">Aparthotel Stare Miasto is located in the very center of Kraków’s Old Town, just 394 feet from the Main Market Square. It features spacious modern apartments with free WiFi.</span>

            <span className="sFeatures">Room with attached bath.</span>
            <span className="sCancel">Free cancellation!</span>
            <span className="sCancelSubtitle">You can cancel later, so lock in this price today</span>
                
        </div>
        <div className="sDetails">
            <div className="sRating">
                <span>Excellent</span>
                <button>7.9</button>
            </div>
            <div className="sDetailText">
                <span className="sPrice">131$</span>
                <span className="sTax">Includes taxes and fees</span>
                <button className="sCheckButton">See Availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem