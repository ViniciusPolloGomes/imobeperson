import styled from 'styled-components';

export const Container = styled.div`
   
        display:flex;
        align-items: center;
        background-color:#161616;
        justify-content:center;  
        height: 100vh;
        width:100%;
        margin: 0;
   
        @media(max-width: 600px){
       div{
           width:100%;
           
       }
   }

`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #222222;
    border-radius:15px;
    height: 600px;
    width: 600px;

    form {

        margin: 40px 0;
        max-width: 340px;
        min-width: 250px;
        text-align: center;
        width: 100%;
        display: flex;
        flex-direction: column;
        
        h1 {
            margin-bottom: 20px;
        }

        .divinput{
            display: flex;
            flex-direction: column;
            position: relative;
        }

        textarea{
            background: #161616;
            border-radius: 10px;
            border: 1px solid #161616;
            padding: 16px;
            padding-left: 40px;
            
            color: #F4EDE8;
            margin: 5px 0;
        }

        input {
            background: #161616;
            border-radius: 10px;
            border: 1px solid #161616;
            padding: 16px;
            padding-left: 40px;
            color: #F4EDE8;
            margin: 5px 0;
            position: relative;
        

            &::placeholder {
                color: #666360;
            }

            & + input {
                margin-top: 8px;
            }
        }

        .icon{
            padding: .4rem .6rem;
            display: block;
            position: absolute;
            top: 10px;
            color: #e4f0fb;
        }


        button {
            background: #0a0a0a;
            height: 56px;
            border-radius: 10px;
            border: 0;
            padding: 0 16px;
            color: #fff;
            font-weight: 500;
            width: 100%;
            margin-top: 16px;
            transition: background-color 0.6s;

            &:hover {
                background: #989898;
                color: #000;
            }
        }

    
        }
        h1{
            color: white;
        }
    }

    @media (max-width: 600px){
        div{
            max-width: 100%
            max-height: auto;
            min-width: 100%
        }
        
        form{
            display: flex;
            flex-direction: column;
            margin: 0 0;
            max-width: 90%;
            min-width: 90%;
            text-align: center;
            width: 90%;
            height:auto; 
            background-color: red;
            padding: 0 0;
            align-items:center;
            

            

            textarea{
                background: #161616;
                border-radius: 5px;
                border: 1px solid #161616;
                padding:0 ;
                padding-left: 0;
                color: #F4EDE8;
                margin: 0 0;
                width: 50%;
            }

            .divinput{
                display: flex;
                flex-direction: column;
                position: relative;
                
            }
    
            input {
                background: #161616;
                border-radius: 5px;
                border: 1px solid #161616;
                padding: 0;
                padding-left: 0;
                color: #F4EDE8;
                margin: 0;
                position: relative;
                width: 50%;
    
                &::placeholder {
                    color: #666360;
                }
    
                & + input {
                    margin-top: 0%;
                }
            }
    
            .icon{
                padding: .0rem .0rem;
                display: block;
                position: absolute;
                top: 0%;
                color: #e4f0fb;
                align-items: ;                
            }
    
    
            button {
                background: #0a0a0a;
                height: 8%;
                border-radius: 5px;
                border: 0;
                padding: 0 0%;
                color: #fff;
                font-weight: 500;
                width: 50%;
                margin-top: 0;
                transition: background-color 0.6s;
    
                &:hover {
                    background: #989898;
                    color: #000;
                }
            }
        }
        
    }
`;



