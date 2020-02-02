import React from 'react';
import nomes from './data';
import './nomes.css'

function ListarNome(props) {
return (
    <li>
        <a href={props.pessoaLinkedin} target='_blank' rel="noopener noreferrer">
            <div className="tryber">
                <img src={props.imgSrc} alt={props.key} />
                {props.nomeDaPessoa}
            </div>
        </a>
    </li>
);
}

class NomesLista extends React.Component {
    render() {
        const objNomes = nomes;
        const arrNomes = Object.keys(objNomes)
        return (
            <ul>
                {arrNomes.map((pessoa) => <ListarNome key={pessoa} imgSrc={objNomes[pessoa][1]} pessoaLinkedin={objNomes[pessoa][0]} nomeDaPessoa={pessoa} />)}
            </ul>
        );
    }
}
export default NomesLista;
