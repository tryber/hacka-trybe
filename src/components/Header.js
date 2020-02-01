import React from 'react';

class Header extends React.Component {
  render() {
    const { title, data, category } = this.props.headers;
    return (
      <div>
        <h4>{title}</h4>
        <h6>{data}</h6>
        <h6>{category}</h6>
      </div>
    )
  }
}

export default Header;