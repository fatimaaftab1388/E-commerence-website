import '../asets/header.css';
import { Link, useNavigate } from 'react-router-dom';
function Header(){
    return(
        <div className='nav-bar'>
            <div className='free-ship'><h6>Free shipping for orders above than Rs.3000</h6></div>
            <div className="d1"> 
            <img src="..\images\logo2.png" alt="logo"  className='logo' />
            <div className='nav-div'>
                <nav>
                    <ul>
                    
                        <Link to='/Components/home'><li>HOME</li></Link>
                        <Link to='/Components/abaya'><li>ABAYAS</li></Link>
                        <Link to='/Components/hijab'><li>HIJABS</li></Link>
                        <Link to='/Components/niqab'><li>NIQABS</li></Link>
                        <Link to='/Components/hijabbundles'><li>HIJAB BUNDLES</li></Link>
                        <Link to='/Components/caps'><li>HIJAB CAPS</li></Link>
                    
                    </ul>
                </nav>

            </div>
            <div className='logo-div'>
            {/* <img src='../images/wishlist.png' alt='button' className='bimg' onClick={handleadmin}/> */}
            <Link to='/Components/cartdetail'><img src='../images/cartlogo.png' alt='button' className='bimg'/></Link>
            <Link to='/Components/loginform'><img src='../images/loginbutton.png' alt='button' className='bimg' /></Link>
            
            
            </div>
            </div>
            

        </div>
    )
}export default Header;