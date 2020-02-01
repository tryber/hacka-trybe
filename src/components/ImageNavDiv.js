import React from 'react';
import data from './data';
import ImagemAndTitle from './ImagemAndTitle';
import './imageNavDiv.css';
class ImageNavDiv extends React.Component {
    render() {
        const dataReduce = data.reduce((acc, data) => {
            const { header: { title }, image } = data;
            return [...acc, { title, image }];
        }, [])
        return (
            <div className='containerNavDiv'>
                {dataReduce.map(element => <ImagemAndTitle box={element} />)}
            </div>
        )
    }
}
export default ImageNavDiv;