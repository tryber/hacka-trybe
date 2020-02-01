import React from 'react';
import Header from './Header';
import PostImg from './PostImg';
import PostText from './PostText.js';
class Post extends React.Component {
    render() {
        const { header, text, image } = this.props.itemPost;
        return (
            <div>
                <Header headers={header} />
                <PostImg image={image} />
                <PostText text={text} />
            </div>
        );
    }
}
export default Post;