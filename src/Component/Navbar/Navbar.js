import React from 'react';
import {Container} from './NavbarStyle';
import {Link} from 'react-router-dom';
const Navbar= () => {

    return(
        <Container>
                <div class="Mynavbar">
                    <div class="nv1">
                            <div class="dvs1">               
                                <Link className="textmarca" to="/home">IMOBEPERSON</Link>
                            </div>
                            <div class="dvs2">
                                <div class="menubar">
                                    <ul class="list">
                                        <li><Link className="amenu" to="/home">Início</Link></li>
                                        <li><Link className="amenu" to="/sobre">Sobre</Link></li>
                                        <li><Link className="amenu" to="/produtos">Produtos</Link></li>
                                        <li><Link className="amenu" to="/contact">Contato</Link></li>
                                    </ul>
                                </div>
                            </div>
                    
                     </div>
                </div>
         </Container>
        
    );
}
export default Navbar;

