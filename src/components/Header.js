import React from 'react';

const Header = ({title='Title show',data='01/02/2020', category='Dica'}) => (
  <div>
    <h4>{title}</h4>
    <h6>{data}</h6>
    <h6>{category}</h6>
  </div>
)


export default Header;