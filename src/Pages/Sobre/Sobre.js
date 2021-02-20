import React from 'react';
import {Link} from 'react-router-dom';
import {Container} from './SobreStyle';
import img1 from '../../assets/Dimension.png';

const Sobre = () => {
    return (
        <>
        <Container>  
            <div className="bodysobre">
                    <h1>Sobre</h1>
                    <form>
                            <div >
                                <h2>Apresentação</h2>
                                <span>
                                    Sou Dalton Miranda Gomes corretor de imóveis, 
                                    atuando no mercado imobiliario de São Paulo,
                                    tenho como missão ajudar meus clientes fornecendo diversos serviços que possuo na plataforma.
                                </span>
                                <Link to="/services" >Serviços</Link>
                            </div>
                            
                            <div>
                                <h2>Motivações</h2>
                                <span>
                                    Foi em busca de transformação e inovação,
                                    que criei minha plataforma on-line imobiliaria, 
                                    onde parceiros e clientes possam entrar em contato comigo 
                                    e desfrutar dos nossos <Link to="/product" >produtos</Link> e serviços de qualquer lugar, 
                                    basta estar conectado a internet com seu smartphone.
                                </span>
                                <Link to="/contato" >Contato</Link>
                            </div>

                             <div>
                                <img className="img1" src={`${img1}`}></img>
                            </div>
                    </form>
            </div>
        </Container>  
        </>
    );
}
export default Sobre;