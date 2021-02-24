import React from 'react';
import {Container} from './NavbarStyle';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';

const Navbar= () => {

    return(
        <Container>
                <div class="Mynavbar">
                    <div class="nv1">
                            <div class="dvs1">               
                                <HashLink className="textmarca" to="/home">IMOBEPERSON</HashLink>
                            </div>
                            <div class="dvs2">
                                <div class="menubar">
                                    <ul class="list">
                                        <li><HashLink className="amenu" to="/home">Início</HashLink></li>
                                        <li><HashLink className="amenu" to="/sobre">Sobre</HashLink></li>
                                        <li><HashLink className="amenu" to="/home#servicos">Seviços</HashLink></li>
                                        <li><HashLink className="amenu" to="/produtos">Produtos</HashLink></li>
                                        <li><HashLink className="amenu" to="/contact">Contato</HashLink></li>
                                    </ul>
                                </div>
                            </div>
                    
                     </div>
                </div>
         </Container>
        
    );
}
export default Navbar;

