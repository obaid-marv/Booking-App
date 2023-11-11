import useFetch from "../../hooks/useFetch";
import "./featured.css";



const Featured = ()=>{
    
    
    const {loading,error,data} = useFetch("/hotels/countByCity?cities=Dubai,Islamabad,Istanbul")
    
    console.log(data);
    return(
        <div className="featured">
            {loading? ("Loading Please Wait"):<>
            <div className="featuredItems">
                <img src="https://cf.bstatic.com/xdata/images/city/600x600/619932.jpg?k=81c20cf1191a1d05472b45413bed3cee67dc92b8c1387c60a960beb5629f109d&o=" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Dubai</h1>
                    <h2>{data[0]} properties</h2>
                </div>
            </div>
            <div className="featuredItems">
                <img src="https://cf.bstatic.com/xdata/images/city/600x600/724981.jpg?k=d2a74ca55c128d783c4a6836713abe2ef7874ba2cc276b9f671df017ff24da19&o=" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Islamabad</h1>
                    <h2>{data[1]} properties</h2>
                </div>
            </div>
            <div className="featuredItems">
                <img src="https://cf.bstatic.com/xdata/images/city/600x600/654659.jpg?k=9c4ac59d35869485631346dc1ee16d28e82ec5f79654bf56b4b4eaeef3388299&o=" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Istanbul</h1>
                    <h2>{data[2]} properties</h2>
                </div>
            </div></>}
        </div>
    )
};

export default Featured;