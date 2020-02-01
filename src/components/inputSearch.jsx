import React from 'react';

class InputSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userAddress: '',
    }
  }
  sendAPIAddress() {
    return `?s=${this.state.userAddress}`;
  }

  render() {
    return (
      <div>
        <input
          placeholder="Ex: Rua Um 131 Belo Horizonte MG"
          onChange={(e) => this.setState({ userAddress: e.target.value })}
        />
        <button onClick={() => this.sendAPIAddress()}>Pesquisar</button>
      </div>
    );
  }
}

export default InputSearch;
