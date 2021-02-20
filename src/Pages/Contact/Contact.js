import React from 'react';
import {Container,Content}from "../Contact/Contactstyle";   
import { FiAtSign,FiPhoneCall,FiEdit}from "react-icons/fi";
import {IoMdPerson} from "react-icons/io";

const Contact= () => {

    return(
        <Container>
            <Content>
                <form>
                    <h1>Entre em contato</h1>
                    
                    <div class="divinput">
                        <input placeholder="Digite primeiro nome!"></input>
                        <IoMdPerson class="icon" size={20}/>
                    </div>

                    <div class="divinput">
                        <input placeholder="Digite sobrenome!"></input>
                        <IoMdPerson class="icon" size={20}/>
                    </div>
                
                    <div class="divinput">
                        <input placeholder="Digite e-mail!"></input>
                        <FiAtSign class="icon" size={20}/>
                    </div>
                    
                    <div class="divinput">
                        <input placeholder="Digite telefone ou celular!"></input>
                        <FiPhoneCall class="icon" size={20}/>
                    </div>

                    <div class="divinput">   
                        <textarea type="text" placeholder="Digite a Mensagem!" rows="6" cols="50"/>
                        <FiEdit class="icon" size={20}/>

                       
                    </div>
                    
                    <button type="submit">Enviar</button>
                </form>
            </Content>
        </Container>
    )
}
export default Contact;