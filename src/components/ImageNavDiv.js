import React from 'react';
import data from './dataFromNav';
import ImagemAndTitle from './ImagemAndTitle';
class ImageNavDiv extends React.Component {
    render() {
        return (
            <div className='containerNavDiv'>
                {data.map(element => <ImagemAndTitle box={element}/>)}
            </div>
        )
    }
}
export default ImageNavDiv;