import React from 'react';
class PosImg extends React.Component {
    render() {
        return(<img className="PostImg" src={this.props.image} alt='img' />);
    }
}
export default PosImg;
