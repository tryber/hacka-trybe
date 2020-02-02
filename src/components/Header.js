import React from 'react';

class Header extends React.Component {
  render() {
    const { title, date, category } = this.props.headers;
    return (
      <div>
        <h4>{title}</h4>
        <h6>{date}</h6>
        <h6>{category}</h6>
      </div>
    )
  }
}

export default Header;