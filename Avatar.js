import foto from "./site.png"
import Card from "./Card";

/*export function Avatar(){
    return(
        <img className="avatar" src={foto} alt="foto de teste" width={100} height={100}></img>
//as props passadas para <img> já são pré-definidas: trata-se de uma tag HTML e seus atributos
//para nossos próprios componentes, podemos passar quaisquer props, sejam dados, objetos ou funções
    );
}

export default function Profile(){
    return(
        <Avatar/>
    );
}
*/



export function Avatar({person, size=200}){
    return(
        <img className='avatar' src={person.imageId} alt={person.nome} width={size} height={size}></img>

    );
}

export default function Profile(){
    return(
        <>
        <Card>
        <Avatar 
            person={{
                nome: "Imagem de Teste",
                imageId: foto,
                
            }}
            size={100}
            
            />
        </Card>
        
        <Avatar
            person={{
                nome: "Segunda Imagem",
                imageId: "https://imgur.com/bgvN8.gif",
                
            }}
            size= {200}
        />

<Avatar
            person={{
                nome: "Segunda Imagem",
                imageId: "https://imgur.com/7EFTaeC.jpeg",
                
            }}
        />

        </> 
    );
}

