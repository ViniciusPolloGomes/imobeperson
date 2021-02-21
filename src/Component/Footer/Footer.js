import React from 'react';
import {Link} from 'react-router-dom';
import {Container} from './FooterStyle';
import {FiPhoneCall,FiMap }from "react-icons/fi";
import {IoMdPerson} from "react-icons/io";

const Footer = () => {

    return ( 
        <>
        <Container>
            <section>Footer Example 4</section>
                <footer class="footer-distributed">

                <div class="footer-left">

                    <h3>Company<span>logo</span></h3>

                    <p class="footer-links">
                        <Link to="" className="link-1" >Home</Link>
                        
                        <Link to="" className="">Blog</Link>
                    
                        <Link to="" className="">Pricing</Link>
                    
                        <Link to="" className="">About</Link>
                        
                        <Link to="" className="">Faq</Link>
                        
                        <Link to="" className="">Contact</Link>
                    </p>

                    <p class="footer-company-name">Company Name © 2015</p>
                </div>

                <div class="footer-center">
                   
                    <div>
                        <p><span>444 S. Cedros Ave</span></p>
                        <p>Solana Beach, California</p>
                    </div>

                    <div>
                        <p>+1.555.555.5555</p>
                    </div>

                    <div>
                        <p><a href="mailto:support@company.com">support@company.com</a></p>
                    </div>
                    
                </div>

                <div class="footer-right">

                    <p class="footer-company-about">
                        <span>About the company</span>
                        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                    </p>

                    <div class="footer-icons">

                        <Link to=""><i class="fa fa-facebook"></i></Link >
                        <Link to=""><i class="fa fa-twitter"></i></Link >
                        <Link to=""><i class="fa fa-linkedin"></i></Link >
                        <Link to=""><i class="fa fa-github"></i></Link >

                    </div>

                </div>

            </footer>
        </Container>
        </>
    );
}
export default Footer;