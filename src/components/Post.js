import React from 'react';
import Header from './PostImg';
import PostImg from './PostImg';
import PostText from './PostText.js';
class Post extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <PostImg />
                <PostText />
            </div>
        )
    }
} 
export default Post;