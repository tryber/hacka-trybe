import React from 'react';
import nomes from './data';
import linkedinLogo from './Group 62.svg';
import './nomes.css';

function ListarNome(props) {
  return (
    <>
      <a
        className="tryber"
        href={props.pessoaLinkedin}
        target="_blank"
        rel="noopener noreferrer">
        <img className="trybersImg" src={props.imgSrc} alt={props.key} />
        <br />
        <div>
          <span className="trybe-name">{props.nomeDaPessoa}</span>
        </div>
      </a>
    </>
  );
}

class NomesLista extends React.Component {
  render() {
    const objNomes = nomes;
    const arrNomes = Object.keys(objNomes);
    return (
      <>
        <div className="trybers-list">
          {arrNomes.map(pessoa => (
            <ListarNome
              key={pessoa}
              imgSrc={objNomes[pessoa][1]}
              pessoaLinkedin={objNomes[pessoa][0]}
              nomeDaPessoa={pessoa}
            />
          ))}
        </div>
      </>
    );
  }
}
export default NomesLista;
