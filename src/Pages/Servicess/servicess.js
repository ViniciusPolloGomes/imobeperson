import styled from 'styled-components';
import SobreBackground from '../../assets/texturedark.png';

export const Container= styled.div`

.bodysobre{
    margin-top:90px;
    position: relative;
    
        
    h1{
        margin:5vw;
        top:-140px;
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
            min-height:300px;
            background-image: url(${SobreBackground});
            background-position: center;
            margin-top:0%;
            flex-wrap: wrap;
            padding: 100px 0px 100px 0px;
            
            div{
                display:flex;
                flex-direction:column;
                flex-wrap: wrap;
                flex:  1 1 150px;
                max-width: 300px;
                margin: 50px 20px 50px 20px;
                padding:0px;

                span{
                    font-size:16px;
                    width:300px;
                    margin-bottom:0;
                    margin-top:0px;
                    padding:0;
                    color: #ccc;
                    
                }

                >h2{
                    color:#ccc;
                    margin-block-start: 0;
                    margin-block-end: 0.9em;
                    margin-inline-start: 0px;
                    margin-inline-end: 0px;
                    font-weight: bold;
                }
                .img1{
                    -webkit-box-shadow: -10px 0px 13px -7px #C99862, 10px 0px 13px -7px #C99862, -50px -50px 3px -29px rgba(201,152,98,0); 
                    box-shadow: -10px 0px 13px -7px #C99862, 10px 0px 13px -7px #C99862, -50px -50px 3px -29px rgba(201,152,98,0);
                    align-items: center;
                    width:300px;
                    height:auto;
                    
                }

                .link{
                    text-decoration:underline;
                    color:#ccc;
                    font-weight: bold;

                    &:hover {
                        color:#fff;

                    }
                }
            }
        }

    }
}


span{
    color:#ccc;
}
`;