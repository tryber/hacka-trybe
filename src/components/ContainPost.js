import React from 'react';
import Post from './Post';
import postagens from './data';

class ContainPost extends React.Component {
    render() {
        const { select } = this.props;
        const filterPost = (select) ? postagens.filter((post) => post.header.category === select) : postagens;
        if(filterPost.length===0)return<div>Nenhum Resultado Encontrado</div>
        return (
            filterPost.map(posts => <Post itemPost={posts} />)
        );
    }
}
export default ContainPost;