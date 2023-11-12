import useFetch from '../../hooks/useFetch';
import './guestLove.css'

const GuestLove = () => {
 
    const {loading,data} = useFetch("/hotels?featured=true&limit=4");
    console.log(data);
    const imgArray = [
        "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=",
        "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=",
        "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=",
        "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o="
    ]
    return (
    <div className="gl">
        {loading ? ("loading..............") : 
        <>
        {data && imgArray.map((img,i)=>(
        
        <div className="glItem" key={i}>
            <img src={imgArray[i]} alt="" className="glImg" />
            <span className="glName">{data[i]?.name}</span>
            <span className="glCity">{data[i]?.city}</span>
            <span className="glPrice">{data[i]?.cheapestPrice}</span>
            <div className="glRating">
                <button>7.9</button>
                <span>Good</span>
            </div>
        </div>))}
        </>}

        


    </div>
    )
}

export default GuestLove