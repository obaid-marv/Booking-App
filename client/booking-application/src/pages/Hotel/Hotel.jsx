import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import "./hotel.css";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = ()=>{

    const [slideNumber,setSlideNumber] = useState(0);
    const [open,setOpen] = useState(false);


    
    
    const photos = [
        {
            src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/13125860.jpg?k=b5f4783a8a6ecf84738e080755acfebf943253d71f4458fbe2510a356cf3d8c8&o=&hp=1"
        },
        {
            src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/403985858.jpg?k=9d07336797a8e03c62832e9666892de67abb124f53e10c1ceee1fc4a61083bb6&o=&hp=1"
        },
        {
            src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/403985874.jpg?k=31a5cc4f6105dafecccc2bc60a804dc5e8b0360fd027e09ae3485e9a8944e49b&o=&hp=1"
        },
        {
            src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/153937477.jpg?k=82a3e4a701d7d534b32ea6e96eaeecb466903e107b9bd07298abbf2f08024ff9&o=&hp=1"
        },
        {
            src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/102185688.jpg?k=3db8de3a1573feef2c15383eafa6158134ba82c16d95cd117f5339429393b84a&o=&hp=1"
        },
        {
            src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/403985859.jpg?k=57573f2d62c70fff26480b81e074b7e1708153d365a31d7b6298f02c3a39e525&o=&hp=1"
        },
    ];
    

    const handleOpen = (i)=>{
        setSlideNumber(i);
        setOpen(true);
    }

    const handleMove = (operation,i)=>{
        if(operation==="+" && i<(photos.length-1)){

            setSlideNumber(i+1);
        }
        else if(operation==="-" && i>0){
            setSlideNumber(i-1);
        }
    }

    return(
    <div>
        <Navbar/>
        <Header type="list"/>
        <div className="hotelContainer">

            {open && <div className="slider">
                <FontAwesomeIcon icon={faCircleXmark} onClick={()=>{setOpen(false)}} className="cross"/>
                <FontAwesomeIcon icon={faCircleArrowLeft} onClick={()=>handleMove("-",slideNumber)} className="arrow"/>
                <div className="sliderWrapper">
                    <img src={photos[slideNumber].src} alt="" className="sliderImg"/>
                </div>
                <FontAwesomeIcon icon={faCircleArrowRight} onClick={()=>handleMove("+",slideNumber)} className="arrow"/>

            </div>}
    
    
            <div className="hotelWrapper">
                <h1 className="hotelTitle">
                    <button className="reserve">Reserve Now</button>
                Aparthotel Stare Miasto
                </h1>
                <div className="hotelAddress">
                    <FontAwesomeIcon icon={faLocationDot}/>
                    <span>Gołębia 2, Old Town, 31-007 Krakow, Poland</span>
                </div>

                <span className="hotelDistance">Excellent Location - 500m from centre.</span>
                <span className="hotelPriceHighlight">Book a stay for just 102$ and get free airport taxi!</span>
                <div className="hotelImages">
                    {photos.map((photo,i)=>(
                        <div className="hotelImgWrapper">
                            <img src={photo.src} onClick={()=>{handleOpen(i)}} alt="" className="hotelImg" />
                        </div>
                    ))}
                </div>
                <div className="hotelDetails">
                    <div className="hotelDetailText">
                        <h1 className="hotelDetailTitle">
                            Stay in the heart of krakow
                        </h1>
                        <p className="hotelDesc">
                        Located in a historic building, Aparthotel Stare Miasto features a unique interior design in the warm color of bricks with wooden elements.

                        All apartments at Aparthotel Stare Miasto are air-conditioned, fitted with an LCD TV and a fully-equipped kitchenette, including a refrigerator and an electric kettle. The 24-hour front desk offers ticket and tour services.

                        Aparthotel Stare Miasto is located 2953 feet from the Wawel Castle. There is a variety of restaurants and cafés in the surrounding area. Kraków Główny Railway Station and Galeria Krakowska Shopping Center are just 1 mi away.
                        </p>
                    </div>
                    <div className="hotelDetailPrice">
                        <h1>Perfect for a 2-night stay!</h1>
                        <span>Located in the real heart of Krakow, this property has an excellent location score of 9.7!</span>
                        <h2> <b>$113</b> (2 nights) </h2>
                        <button>Reserve</button>
                    </div>
                </div>
            </div>
            <MailList/>
            <Footer/>
        </div>
    </div>
    )

};

export default Hotel;