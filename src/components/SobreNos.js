import React from 'react';
import ListaSobreNos from './nomes'
import './SobreNos.css'

function App() {
  return (
    <div className="about">
      <h1>Quem somos nós</h1>
      <br />
      <br />
      <p>Em um sábado, 1º de fevereiro, nos foi dado um desafio: o que pode ser feito, em apenas um dia, com nossas habilidades e tempo, para mitigar os impactos das chuvas que recentemente pôs em risco a vida de muitos e foram fatais para outros.
Há apenas poucos meses, começamos a estudar programação: com aprendizagem ativa, esforço diário, organização e colaboração. Foi assim que saímos da ideia de um desafio, e transformamos esse desconforto em material: um centro de informações para que qualquer pessoa utilizasse como bússola e pudesse se orientar em meio à confusão.
Graças à nossa união e à orientação da equipe da Trybe, conseguimos transfomar essa ideia em realidade.</p>
      <p>Somos Trybers!</p>
      <br />
      <br />
      <br />
      <ListaSobreNos />
      <br />
      <br />
      <h2>Nossos Orientadores</h2>
      <br />
      <br />
      <li className="trybers-list">
        <ul className="tryber"><a className="trybe-name" href="https://www.linkedin.com/in/brunogomesmedeiros/"><img src="https://media-exp1.licdn.com/dms/image/C4D03AQHua7EKHLu9vQ/profile-displayphoto-shrink_200_200/0?e=1586390400&v=beta&t=NGJ2c-uIYfdllYD99DOzQVhGd7xyVxcW4d62GbzT9Gk" alt="Bruno Gomes pic" /><br />Bruno Gomes</a></ul>
        <ul className="tryber"><a className="trybe-name" href="https://www.linkedin.com/in/jdanielnd/"><img src="https://media-exp1.licdn.com/dms/image/C4D03AQFHePgX2YEjsw/profile-displayphoto-shrink_800_800/0?e=1586390400&v=beta&t=2au9v0DBocnBWFL-YlYS9U9p4IADDRd4oNUv79j4MSQ" alt="pic de João daniel" /><br />João Daniel</a></ul>
        <ul className="tryber"><a className="trybe-name" href="https://www.linkedin.com/in/t%C3%A1ssio-mendes-145a7366/"><img src=" https://media-exp1.licdn.com/dms/image/C4D03AQFAlfv3X9GoUQ/profile-displayphoto-shrink_800_800/0?e=1586390400&v=beta&t=h8HNwY74hjyjTudQlcgIaz_bI83VB0Q1iwY3NbweWdc" alt="Tássio Mendes" /><br />Tássio Mendes</a></ul>
        <ul className="tryber"><a className="trybe-name" href="https://www.linkedin.com/in/betinaribeiro/"><img src="https://media-exp1.licdn.com/dms/image/C5603AQEsLx1SIdAisA/profile-displayphoto-shrink_800_800/0?e=1586390400&v=beta&t=nhmGa3rs1twoefr7GnuutSdTsAcPRJqAkmPTFRFOaRY" alt="Betina Tavares"/><br />Betina Tavares</a></ul>
        <ul className="tryber"><a className="trybe-name" href="https://www.linkedin.com/in/anacmquintao/"><img src="https://media-exp1.licdn.com/dms/image/C5603AQGnKAiyezBGag/profile-displayphoto-shrink_800_800/0?e=1586390400&v=beta&t=qLJ8lXOgDt74WAnBvbkzfuCmvUNuyMd2d1KxjN65dak" alt="Ana Quintão" /><br />Ana Quintão</a></ul>
        <ul className="tryber"><a className="trybe-name" href="https://www.linkedin.com/in/amanda-can%C3%A7ado-6a5b27129/"><img src="https://media-exp1.licdn.com/dms/image/C4D03AQGmWa4BazbOJQ/profile-displayphoto-shrink_800_800/0?e=1586390400&v=beta&t=iydUc2ccitUoIPy1R8_pKrxDvmYvLqWdtKjlQG8fDDw" alt="Amanda Cançado" /><br />Amanda Cançado</a></ul>
        <ul className="tryber"><a className="trybe-name" href="https://www.linkedin.com/in/marcosmoura1/"><img src="https://media-exp1.licdn.com/dms/image/C4D03AQHn544ZAY6Wlg/profile-displayphoto-shrink_200_200/0?e=1586390400&v=beta&t=CyZI0IPF4mvmZr8-4Fm8OtHs95JfqmjznpszWwVgKy8" alt="Marcos Moura" /><br />Marcos Moura</a></ul>
        <ul className="tryber"><a className="trybe-name" href="https://www.linkedin.com/in/fernandokenjisakabe/"><img src="https://media-exp1.licdn.com/dms/image/C4D03AQFyZU8a058zuw/profile-displayphoto-shrink_800_800/0?e=1586390400&v=beta&t=L9P_h6CWVXOZRBC4HSt7shvA8RMdWzY5WCmxnDn-Wcw" alt="Fernando Kenji Sakabe" /><br />Fernando Kenji Sakabe</a></ul>
        <ul className="tryber"><a className="trybe-name" href="https://www.linkedin.com/in/matheusgoyas/"><img src="https://media-exp1.licdn.com/dms/image/C4E03AQGXNjWcxwKoSQ/profile-displayphoto-shrink_800_800/0?e=1586390400&v=beta&t=y7DV2wpl3sOS1C2_0jIinXTZRo9fOW3zffWapR03plA" alt="Matheus Goyas" /><br />Matheus Goyas</a></ul>
      </li>
    </div>
  );
}

export default App;
