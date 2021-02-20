import styled from 'styled-components';
import SobreBackground from '../../assets/texturedark.png';
export const Container= styled.div`

.bodysobre{
    display:flex;
    flex-direction: column;
    position: relative;
    
        
    >h1{
        margin:5vw;
        top:-5px;
        position:absolute;
        display: block;
        color:#fff;
        font-size: 100px;
    }
        
        form{
            display:flex;
            flex-direction: row;
            justify-content: center;
            width:100%;
            min-height:450px;
            background-image: url(${SobreBackground});
            background-position: center;
            margin-top:10%;
            flex-wrap: wrap;
            
            >div{
                display:flex;
                flex-direction:column;
                flex-wrap: wrap;
                flex:  1 1 200px;
                max-width:400px;
                margin: 10% 0px 0px 0%  ; 
                padding:0;

                >span{
                    font-size:16px;
                    width:300px;
                    margin-button:0;
                    margin-top:0px;
                    padding:0;
                    
                }

                >h2{
                    margin-button:0;
                    margin-top:0; 
                    padding:0;
                    margin-block-start:0 ;
                    margin-block-end: 0;
                    color:#ccc;
                }
                .img1{
                    -webkit-box-shadow: -10px 0px 13px -7px #C99862, 10px 0px 13px -7px #C99862, -50px -50px 3px -29px rgba(201,152,98,0); 
                    box-shadow: -10px 0px 13px -7px #C99862, 10px 0px 13px -7px #C99862, -50px -50px 3px -29px rgba(201,152,98,0);
                    align-items: center;
                    width:300px;
                    height:auto;
                }
            }
        }

    }
}


span{
    color:#ccc;
}

`;