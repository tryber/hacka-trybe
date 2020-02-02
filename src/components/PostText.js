import React from 'react';
class PostText extends React.Component {
    render() {
        return (<div className="PostText"><p>{this.props.text}</p></div>);
    }
}

export default PostText;
