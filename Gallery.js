import "./Gallery.css"


export function Profile(){
    return (
        <div>
        <img src="https://imgur.com/bgvN8.gif" alt="The Greatest thing ever"/>
        
        <br></br>
        </div>
    );
}

export default function Galeria(){
    /* O Nome da função é o nome a ser chamado no import. Isso de seguido do nome do arquivo 'from <arquivo>*/
    return( <section>
                
                <h1 className="galeria"> <code>Entendendo Componentes React.js</code></h1>
                    <Profile />
                    
                    <Profile />

            </section>


    );
}