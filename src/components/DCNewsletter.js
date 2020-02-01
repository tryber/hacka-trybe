import React from 'react';
import './DCNewsletter.css';

const rp = require('request-promise');
const cherio = require('cheerio');
const Table = require('cli-table');

let users = [];
const options = {
  url: 'https://prefeitura.pbh.gov.br/noticias/defesa-civil',
  json: true,
}

rp(options)
  .then((data) => {
    let promises = [];
    let usedData = [];
    for (let user of data.directory_items) {
      userData.push({})
    }
  })

function DCNewsletter() {
  return (
    <div className="DCNewsletter">
      <header className="DCNewsletter-header">
        <p>
          Insira aqui os componentes
        </p>
       
      </header>
    </div>
  );
}

export default DCNewsletter;
