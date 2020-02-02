import React from 'react';
import Filter from './Filter.js'
import './Filter.css'

class ListFilterFAQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ['Ajudar', 'Dúvidas frequentes', ],
    };
  }

  render() {
    const { changeSelectedFilter, select } = this.props;
    const { categories } = this.state;
    return (
      <div className="ListFilter">
        {categories.map((category) => <Filter name={category} change={changeSelectedFilter} select={select} />)}
      </div>
    );
  }
}

export default ListFilterFAQ;
