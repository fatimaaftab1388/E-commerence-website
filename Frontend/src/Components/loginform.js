import { useState ,useMemo} from "react";
import { useRef ,useEffect} from "react";
import '../asets/login.css';
import {  useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';

function Login(){
    const nav=useNavigate();
    const naviagteHook=()=>{
        nav('/Components/signup');
    }
    const naviagteHook1=()=>{
        nav(-1);
    }

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const inputRef=useRef(null);
     useEffect(()=>{inputRef.current.focus()},[])

    
    const handleEmailChange=e=>{
        
        console.log(e.currentTarget.value);
        setEmail(e.currentTarget.value);
    }
    const handlePasswordChange=e=>{
        
        console.log(e.currentTarget.value);
        setPassword(e.currentTarget.value);
    }
   
    const handleSubmit = useMemo(() => (e) => {
        e.preventDefault();
        nav('/');
      }, [email,password]);
   
    return(
        <div>
           <div className="login-container">
            <div className="login-form">
                <img src='../images/loginlogo.png' alt="lo" className="login-img"/>
            <h3>LOGIN</h3>
            <form onSubmit={handleSubmit}>
                <label style={{marginRight:'88%',paddingBottom:'2%',fontSize:'1.2em'}}>E-mail</label>
            <input type="email" onChange={handleEmailChange} value={email} required ref={inputRef}/>
            <label style={{marginRight:'85%',paddingBottom:'2%',fontSize:'1.2em'}}>Password</label>
            <input type="password"  onChange={handlePasswordChange} value={password} required/>
            <p style={{marginLeft:'70%'}}>Forgot Password?</p>
            <button type="submit">Login</button>
            <h6 onClick={naviagteHook}>Don't have account? Create Account!</h6>
            </form>
            <div className="div-fig">
            <a href='https://www.facebook.com/' ><FontAwesomeIcon icon={faFacebookF} className="fig1"/></a>
            <a href='https://www.instagram.com/'><FontAwesomeIcon icon={faInstagram} className="fig2"/></a>
            <a href='https://www.google.com/' ><FontAwesomeIcon icon={faGoogle} className="fig3"/></a>
            </div>
            <img src='../images/gobacklogo.png' alt='log' style={{width:'50px',marginTop:'-245%',marginLeft:'-290%'}} onClick={naviagteHook1}/>
            </div>
           
        </div>
        </div>
    )
}export default Login;