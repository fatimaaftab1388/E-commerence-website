import { useLocation} from "react-router-dom";
import Header from "./header";
import '../asets/detail.css';
import Footer from "./footer";
import { AppContext } from "./abayacontext";
import { useContext } from "react";

function AbayaDetail(){
    const location= useLocation();
    const {from} = location.state;

    const{abaya,setAbaya}=useContext(AppContext);
   
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
            <div className="detail-div"></div>
            <div className="detail-div2">
                <div className="sub-detail1">
                    <img src={from.image} alt={from.name}/>
                </div>
                <div className="sub-detail2">
                    <div>
                    <h4> {from.name}</h4>
                    <h5>Rs. {from.price} PKR</h5>
                    </div>
                    <div style={{display:'block'}}>
                    <p>Size:</p>
          <label>
            <input type="radio" name="size" value="S" />
            S
          </label>
          <label>
            <input type="radio" name="size" value="M" />
            M
          </label>
          <label>
            <input type="radio" name="size" value="L" />
            L
          </label>
                    </div>
                    <button className="b1" onClick={e=>addToCart(from)} style={{display:'block',marginTop:'10px' }}>Add to Cart</button>
                    <button className="b1" style={{marginTop:'10px'}}>Buy Now</button>
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AbayaDetail;