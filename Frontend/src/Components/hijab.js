import Header from "./header";
import '../asets/abaya.css';
import { Link } from "react-router-dom";
import Footer from "./footer";
import { useContext , useEffect} from "react";
import { AppContext } from "./abayacontext";

function Hijab(){
    const{abaya,setAbaya}=useContext(AppContext);
    const product = abaya.filter(pr=>pr.cat==="hijab");

    const addToCart=(item)=>{
        const updated = abaya.map(itm=> itm.id=== item.id
            ? {...itm , selected:true}:itm 
            
            )

            setAbaya(updated);
            console.log(updated);
    }

    
    
  
    return(
        <div>
            <Header />
            <div >
                <img src='../images/hijabback.png' alt='log' className="ababack"/>
            </div>
            <div className="abaya-heading"> 
                <h2>HIJABS</h2>
            </div>
            <div>
                <div className="abaya-container">
                {product
                .map((item) => (
            <div className="abaya-card" key={item.id}>
                <Link to="/details" state={{from:item}}><img src={item.image} alt={item.name} className="abaya-img"/></Link>
                <div id="sm-cart">
                <p style={{marginTop:'1%',marginBottom:"1%"}}>{item.name}</p>
                <h6>Rs. {item.price} PKR</h6>
                    <button className='b1' onClick={e=>addToCart(item)}>
                        <img src='../images/shopping-bag.png' alt='l' style={{width:'21px',height:'21px',marginRight:'3%',marginBottom:'1%'}}/>ADD TO CART</button>
                     </div>
                     </div>
                 ))}

            </div>
        </div>
        <Footer />
        </div>
    );
}
export default Hijab;