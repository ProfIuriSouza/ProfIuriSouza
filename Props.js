//export default function Props(props){

export default function Props({nome, idade, foto}){ //exemplo de desestruturação de props, trabalha-se em forma de variáveis
    return(
        <>
            <h1>Olá, {nome}</h1>
            <h2>Sua idade é {idade}</h2>
            <img src={foto} alt={nome}></img>
        </>

    );

}