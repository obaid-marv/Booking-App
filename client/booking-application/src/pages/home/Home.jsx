import MailList from "../../components/mailList/MailList";
import Featured from "../../components/featured/Featured";
import GuestLove from "../../components/guestLove/GuestLove";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";
import Footer from "../../components/footer/Footer";

const Home = ()=>{
    return(
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
            <Featured/>
            <h1 className="homeTitle">Browse by Property Type</h1>
            <PropertyList/>
            <h1 className="homeTitle">Homes guests love</h1>
            <GuestLove/>
            <MailList/>
            <Footer/>

        </div>
    </div>
    )

};

export default Home;