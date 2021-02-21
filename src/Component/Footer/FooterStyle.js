import styled from 'styled-components';

export const Container = styled.div ` 

.footer-distributed {
    background: #333;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    width: 100%;
    text-align: left;
    font: bold 16px sans-serif;
    padding: 50px 5vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

}

.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    flex: 1 1 200px;
     height: 150px;
     margin:0px 10px 0px 15px;
     padding:0;
}


/* Footer left */

.footer-distributed .footer-left{
   
    
}


/* The company logo */

.footer-distributed h3 {
    color: #ffffff;
    font-size: 40px;
    margin: 0;
}

.footer-distributed h3 span {
    color: #141414;
}


/* Footer links */

.footer-distributed .footer-links {
    color: #ffffff;
    margin: 10px 0 12px;
    padding: 0;
}

.footer-distributed .footer-links a {
    display: inline-block;
    line-height: 1.8;
    font-weight: 400;
    text-decoration: none;
    color: inherit;
}

.footer-distributed .footer-company-name {
    color: #222;
    font-size: 14px;
    font-weight: normal;
    margin: 0;
}


/* Footer Center */

.footer-distributed .footer-center {
    
    
    
}
.footer-distributed .footer-center div{
    display:block;
    
}

.footer-distributed .footer-center p {
    color: #ffffff;
    font-weight: 400;
    margin: 0;
    display:block;
}

.footer-distributed .footer-center p span {
    font-weight: normal;
    font-size: 14px;
    display:block;
   
}

.footer-distributed .footer-center p a {
    color: lightseagreen;
    text-decoration: none;
    
}

.footer-distributed .footer-links a:before {
    content: "|";
    font-weight: 300;
    font-size: 20px;
    left: 0;
    color: #fff;
    display: inline-block;
    padding-right: 5px;
}

.footer-distributed .footer-links .link-1:before {
    content: none;
}


/* Footer Right */



.footer-distributed .footer-company-about {
    line-height: 20px;
    color: #92999f;
    font-size: 13px;
    font-weight: normal;
    margin: 0;
  
}

.footer-distributed .footer-company-about span {
    display: block;
    color: #ffffff;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 20px;
}

.footer-distributed .footer-icons {
    margin-top: 25px;
}

.footer-distributed .footer-icons a {
    display: inline-block;
    width: 35px;
    height: 35px;
    cursor: pointer;
    background-color: #33383b;
    border-radius: 2px;
    font-size: 20px;
    color: #ffffff;
    text-align: center;
    line-height: 35px;
    margin-right: 3px;
    margin-bottom: 5px;
}


/* If you don't want the footer to be responsive, remove these media queries */

@media (max-width: 880px) {
    .footer-distributed {
        font: bold 14px sans-serif;
    }
    .footer-distributed .footer-left,
    .footer-distributed .footer-center,
    .footer-distributed .footer-right {
        display: block;
        width: 100%;
        margin-bottom: 40px;
        text-align: center;
    }
    .footer-distributed .footer-center i {
        margin-left: 0;
    }
}

`;