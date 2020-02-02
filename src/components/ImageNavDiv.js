import React from 'react';
import ImagemAndTitle from './ImagemAndTitle';
import './imageNavDiv.css';
import * as ApiPost from './ApiPost';

class ImageNavDiv extends React.Component {
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
        const { success, data } = this.state;
        if (!success) return <div>Carregando</div>
        const dataSorted = data.sort(function (a, b) { return Date.parse(b.date) - Date.parse(a.date) });
        const dataReduce = dataSorted.reduce((acc, data, index) => {
            const {  title , image } = data;
            return [...acc, { title, image, id: index }];
        }, [])
        return (
            <div className='containerNavDiv'>
                {dataReduce.map(element => <ImagemAndTitle box={element} />)}
            </div>
        )
    }
}
export default ImageNavDiv;