import { useState } from "react";
import { useRef ,useEffect} from "react";
import '../asets/login.css';
import {  useNavigate} from "react-router-dom";

function Login(){
    const nav=useNavigate();
    const naviagteHook=()=>{
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
    const handleSubmit=e=>{
        e.preventDefault();
    }
    return(
        <div>
           <div className="login-container">
            <div className="login-form" style={{marginTop:'0.5%',height:'97vh'}}>
                <img src='../images/loginlogo.png' alt="lo" className="login-img"/>
            <h3>CREATE ACCOUNT</h3>
            <form onSubmit={handleSubmit}>
            <label style={{marginRight:'80%',paddingBottom:'2%',fontSize:'1.2em'}}>First Name</label>
            <input type="email" onChange={handleEmailChange} value={email} ref={inputRef}/>
            <label style={{marginRight:'80%',paddingBottom:'2%',fontSize:'1.2em'}}>Last Name</label>
            <input type="email" onChange={handleEmailChange} value={email} />
                <label style={{marginRight:'88%',paddingBottom:'2%',fontSize:'1.2em'}}>E-mail</label>
            <input type="email" onChange={handleEmailChange} value={email} />
            <label style={{marginRight:'85%',paddingBottom:'2%',fontSize:'1.2em'}}>Password</label>
            <input type="password"  onChange={handlePasswordChange} value={password}/>
            <button type="submit" style={{marginTop:'6%'}}>Create</button>
            <img src='../images/gobacklogo.png' alt='log' style={{width:'50px',marginTop:'-256%',marginLeft:'-290%'}} onClick={naviagteHook}/>
            </form>
            </div>
           
        </div>
        </div>
    )
}export default Login;