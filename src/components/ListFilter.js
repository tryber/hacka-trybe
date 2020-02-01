import React from 'react';
import Filter from './Filter.js'

class ListFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ['Dicas', 'O que fazer?', 'Causas', 'Prevenção', 'Juridico', 'Ajudar', 'Outros', ],
    };
  }

  render() {
    const { changeSelectedFilter, select } = this.props;
    const { categories } = this.state;
    return (
      categories.map((category) => <Filter name={category} change={changeSelectedFilter} select={select} />)
    );
  }
}

export default ListFilter;
