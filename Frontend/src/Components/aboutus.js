import Header from "./header";
import Footer from "./footer";
import '../asets/aboutus.css';
function About(){
    return(
        <div>
            <Header />
            <div className="div-about">
                <h2>About Us</h2>
                <div style={{gap:'10% '}}>
                    <p>
                    We’re all about conserving culture with a little twist for women of all fields and ethnicities. Our team at The Hijab Company is celebrating a decade of experience in designing Abayas, Hijabs/Scarves, Accessories and our own Western Collection. We’re delighted to say that we have something for everyone and that’s what we aim to always retain.
                    </p>
                    <p>
                    We truly believe that every woman needs to feel secure, comfortable and confident out there in the world as we grow and continue to raise the experience of modest wear in Pakistan and worldwide.</p>
                    <p>
                    The Hijab Company does not compromise over the quality by thoroughly testing the fabric materials and paying attention to details. With the assortment of our fabric material, we make sure it's multipurpose and versatile enough for casual, professional, formal and semi-formal wear. We ensure that our fabric materials are breathable, comfortable, washable, sturdy and look beautiful on you!
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}export default About;