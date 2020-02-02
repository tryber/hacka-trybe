import React from 'react';
import Post from './Post';
import * as ApiPost from './ApiPost';

class ContainPost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            success: false,
        }
    }

    componentDidMount() {
        ApiPost.getPost()
            .then((data) => {
                console.log(data)
                return this.setState({
                    data,
                    success: true,
                })
            });
    }
    render() {
        const { select } = this.props;
        const { data, success } = this.state;
        if (!success) return <div>Carregando!</div>
        const dataSorted = data.sort(function (a, b) { return Date.parse(b.date) - Date.parse(a.date) });
        console.log(dataSorted)
        const filterPost = (select) ? data.filter((post) => post.category === select) : data;
        if (filterPost.length === 0) return <div>Nenhum Resultado Encontrado</div>
        return (
            filterPost.map(posts => <Post itemPost={posts} />)
        );
    }
}
export default ContainPost;