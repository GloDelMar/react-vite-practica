export default function Header(){

    return(
        <section id="header">
            <div className="title-Text">
                <h1 className="gradient-text">Vite</h1>
                <p className="titulo2">Next Generation Frontend Tooling</p>
                <p className="texto-breve">Get ready for a development environment that can finally catch up with you.</p>
                <footer id="amigos-botoness">
                    <button className="boton" type="button">Get Starter</button>
                    <button className="botones" type="button">Whiy Vite?</button>
                    <button className="botones" type="button">Vew on GitHub</button>
                </footer>
            </div>
            <div>
                <img src="src/assets/Vite.js.svg" alt="logo"/>
            </div>
        </section>
        

       
    )
}