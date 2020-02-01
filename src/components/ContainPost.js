import React from 'react';
import Post from './Post';
import postagens from './data';

class ContainPost extends React.Component{
    render(){
        console.log(postagens);
        return(
            postagens.map(posts => <Post itemPost={posts}/>)
        );
    }
}
export default ContainPost;