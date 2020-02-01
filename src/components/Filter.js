import React from 'react';

const Filter = ({ name, change, select }) => (
  <div className="input-radio">
    <input
      key={name}
      className="radiobtn"
      type="radio"
      name="filter"
      id={name}
      value={name}
      checked={select === name}
      onChange={(e) => change(e.target.id)}
    />
    <label htmlFor={name}>
      {name}
    </label>
  </div>
)
export default Filter;
