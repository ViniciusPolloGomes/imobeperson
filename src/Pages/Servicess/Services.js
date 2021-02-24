import React from 'react';


const Services= () => {

    return(
        <>
            <Container>  
            <div className="bodysobre">
                <h1 id="servicos">Serviços</h1>
                    <form>
                            <div >
                                <h2>Apresentação</h2>
                                <span>
                                    Sou Dalton Miranda Gomes corretor de imóveis 
                                    atuando no mercado imobiliario de São Paulo desde 2020.<p/>
                                    Tenho como missão ajudar meus clientes, fornecendo diversos 
                                    <Link className="link" to="/services" > serviços</Link> que possuo na plataforma.
                                </span>
                                
                            </div>
                            
                            <div>
                                <h2>Motivações</h2>
                                <span>
                                    Foi em busca de transformação e inovação,
                                    que criei minha plataforma imobiliária on-line.<p/> 
                                    Aqui parceiros e clientes podem entrar em  
                                    <Link className="link" to="/contato" > contato</Link> comigo 
                                    e desfrutar dos  
                                    <Link className="link" to="/product" > produtos</Link> e 
                                    <Link className="link" to="/services" > serviços</Link> disponíveis.
                                </span>
                                
                            </div>

                             <div>
                                <img className="img1" src={`${img1}`} alt="/"></img>
                            </div>
                    </form>
            </div>
        </Container>  
        </>
        </>
        
    );
}
export default Services;