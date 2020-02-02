import React from 'react';
import Header from './Header';
import PostImg from './PostImg';
import PostText from './PostText.js';
import './Post.css';

class Post extends React.Component {
    render() {
        const { title, date, category, text, image } = this.props.itemPost;
        return (
            <div className="Post">
                <Header category={category} date={date} />
                <PostImg image={image} />
                <div className="sub-title">
                <h4>{title}</h4>
                <h6>{date}</h6>
                </div>
                <PostText text={text} />
            </div>
        );
    }
}
export default Post;
