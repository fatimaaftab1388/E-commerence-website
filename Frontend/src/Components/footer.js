import React from 'react';
import '../asets/footer.css'; 
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <ul className="footer-links">
            <li>PH # 0317-5567890</li>
            <li>Email : fatimaaftab.1388@gmail.com</li>
            <li>Website :www.halalwardrobe.com</li>
        
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Collection</h3>
          <ul className="footer-links">
           <Link to='/Components/abaya'> <li >Abaya</li></Link>
            <Link to='/Components/hijab'><li>Hijab</li></Link>
            <Link to='/Components/niqab'><li>Niqab</li></Link>
            <Link to='/Components/caps'><li>Others</li></Link>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Accounts</h3>
          <div className="social-icons">
         <a href='https://www.facebook.com/' ><FontAwesomeIcon icon={faFacebookF} /> Facebook</a>
          <a href='https://www.instagram.com/'><FontAwesomeIcon icon={faInstagram} /> Instagram</a>
          <a href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube} /> Youtube</a>
            <a href='https://web.whatsapp.com/'><FontAwesomeIcon icon={faWhatsapp} /> Whatsapp</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
                <p>&copy; HALALWARDROBE 2023</p>

                <p >Powered by Fatima Aftab</p>
            </div>
    </footer>
  );
};

export default Footer;
