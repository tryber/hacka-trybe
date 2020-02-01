// import React from 'react';
// import { MapContext } from './context/MapContext';

// class InputSearch extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userAddress: '',
//     };
//   }
//   sendAPIAddress() {
//     const { setEndpoint } = this.context;
//     return setEndpoint(`?s=${this.state.userAddress}`);
//   }

//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           placeholder="Ex: Rua Um 131 Belo Horizonte MG"
//           onChange={(e) => this.setState({ userAddress: e.target.value })}
//         />
//         <button type="button" onClick={() => this.sendAPIAddress()}>Pesquisar</button>
//       </div>
//     );
//   }
// }

// InputSearch.contextType = MapContext;
// export default InputSearch;
