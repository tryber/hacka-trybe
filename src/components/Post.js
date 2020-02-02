import React from 'react';
import Header from './Header';
import PostImg from './PostImg';
import PostText from './PostText.js';
class Post extends React.Component {
    render() {
        const { title, date, category, text, image } = this.props.itemPost;
        const object= { title, date, category}
        return (
            <div>
                <Header headers={object} />
                <PostImg image={image} />
                <PostText text={text} />
            </div>
        );
    }
}
export default Post;