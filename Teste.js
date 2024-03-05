import './Teste.css';
import site from './site.png';

function Teste (){
    const var1 = 2;
    const var2 = 3;
    return (
        <>
        <p>O resultado de {var1} + {var2} é {var1+var2}</p>
        <img src={site} alt='imagem de teste'></img>
        </>

    )
}

export default Teste;