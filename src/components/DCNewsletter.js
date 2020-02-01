import React, { Component } from 'react';
import './DCNewsletter.css';
import rp from 'request-promise';
import cheerio from 'cheerio';

// const rp = require('request-promise');
// const cherio = require('cheerio');
// const Table = require('cli-table');

class DCNewsletter extends Component {
  render() {
    
    const options = {
      url: 'https://cors-anywhere.herokuapp.com/https://prefeitura.pbh.gov.br/noticias/defesa-civil',
      // json: true,
      resolveWithFullResponse: true,
      transform: function (body) {
        return cheerio.load(body);
      },
    }
    
    rp(options)
      .then(function(response) {
        console.log(response.headers);
        console.log(response.data);
    });

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
}

export default DCNewsletter;
