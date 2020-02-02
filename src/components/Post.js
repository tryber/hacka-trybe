import React from 'react';
import TitlePost from './TitlePost';
import PostImg from './PostImg';
import PostText from './PostText.js';
import './Post.css';

class Post extends React.Component {
    render() {
        const { title, date, category, text, image } = this.props.itemPost;
        return (
            <div className="Post">
                <TitlePost category={category} date={date} />
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
