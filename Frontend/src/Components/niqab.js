import Header from "./header";
import '../asets/abaya.css';
import { useState ,useContext} from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import { AppContext } from "./abayacontext";

function Niqab(){
     const{abaya,setAbaya}=useContext(AppContext);
     const product =abaya.filter(pr=>pr.cat=="niqab");
  
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
                <img src='../images/niqabback.png' alt='log' className="ababack"/>
            </div>
            <div className="abaya-heading"> 
                <h2>NIQABS</h2>
            </div>
            <div>
                <div className="abaya-container">
                {product.map((niqab) => (
            <div className="abaya-card" key={niqab.id}>
                <Link to="/details" state={{from:niqab}}><img src={niqab.image} alt={niqab.name} className="abaya-img"/></Link>
                <div id="sm-cart">
                <p style={{marginTop:'1%',marginBottom:"1%"}}>{niqab.name}</p>
                <h6>Rs. {niqab.price} PKR</h6>
                    <button className='b1' onClick={e=>addToCart(niqab)}>
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
export default Niqab;