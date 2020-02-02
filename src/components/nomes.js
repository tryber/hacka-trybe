import React from 'react';
import nomes from './data';

function ListarNome(props) {
return <li><a href={props.pessoaLinkedin} target='_blank' rel="noopener noreferrer">{props.nomeDaPessoa}</a></li>
}

class NomesLista extends React.Component {
    render() {
        const objNomes = nomes;
        const arrNomes = Object.keys(objNomes)
        return (<ul>
            {arrNomes.map((pessoa) => <ListarNome key={pessoa} pessoaLinkedin={nomes[pessoa]} nomeDaPessoa={pessoa} />)}
        </ul>);
    }
}
export default NomesLista;