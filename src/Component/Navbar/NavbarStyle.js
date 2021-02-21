import styled from 'styled-components';

export const Container = styled.div`
        
        display:flex;
        flex-direction: columns;
        background-color:#161616;  
        height: 100vh;
        width:100%;
        margin: 0;
        
.Mynavbar{
    display: flex;
    flex-direction: column;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
    background-color:#333333;
    margin: 0px;
    justify-content:left;
    width: 100%;
    height: 9%;
    
    box-shadow: -8px -79px 51px -81px rgba(0,0,0,1) inset;
    -webkit-box-shadow: -8px -79px 51px -81px rgba(0,0,0,1) inset;
    -moz-box-shadow: -8px -79px 51px -81px rgba(0,0,0,1) inset;
}
.nv1{
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content:space-between;
    margin: 0px 5vw ;
    padding: 0px;
}
.dvs1{
    display: flex;
    align-items: center;
    margin: 0 ;
    padding: 0;
}
.dvs2{
    display: flex;
    margin: 10px;
    padding: 0;
}
    
}
.textmarca{
    color:#ccc;
    font-size: 18px;
    margin: 0px;
    padding: 0px;
    text-decoration: none;
    
    &:hover{
        color:#fff;
        transition:  1s;
        cursor: pointer;
    }
}


.menubar{
    display: flex;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    align-items: center;
    
}
.list{
    display: flex;
    flex-direction: row;
    list-style: none;
    margin-left: 0;
    margin-top: 0;
    width: 100%;
    height: 100%;
    padding: 0%; 
    margin:5px;
    
}

.amenu{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    padding: 0%; 
    margin: 0px;
    color: #ccc;
    font-size: 17px;
    text-decoration:none ;

    &:hover {
        color: #fff;
        transition: 0.5s;
        cursor: pointer;
    }


}


.list li{
    display: flex;
    flex-direction: row;
    margin-left: 0;
    margin-top: 0;
    width: 100%;
    height: 100%;
    padding: 0%; 
    margin: 0px;
    margin-right: 8px;
}
.list li a{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    padding: 0%; 
    margin: 0px;
    margin-right: 20px;
    align-items: center;
}


`;