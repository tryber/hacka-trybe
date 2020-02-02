import React from 'react';
import ListaSobreNos from './nomes'

function App() {
  return (
    <div>
      <h1>Quem somos nós</h1>
      <p>Em um sábado, 1º de fevereiro, nos foi dado um desafio: o que pode ser feito, em apenas um dia, com nossas habilidades e tempo, para mitigar os impactos das chuvas que recentemente pôs em risco a vida de muitos e foram fatais para outros.
Há apenas poucos meses, começamos a estudar programação: com aprendizagem ativa, esforço diário, organização e colaboração. Foi assim que saímos da ideia de um desafio, e transformamos esse desconforto em material: um centro de informações para que qualquer pessoa utilizasse como bússola e pudesse se orientar em meio à confusão.
Graças à nossa união e à orientação da equipe da Trybe, conseguimos transfomar essa ideia em realidade.</p>
      <p>Somos Trybers!</p>
      <ListaSobreNos />
    </div>
  );
}

export default App;
