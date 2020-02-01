import React from 'react';

class ImagemAndTitle extends React.Component {
    render() {
        const { title, image } = this.props.box;
        return (
            <div className='containerImagem'>
                <h5 className='textImage'>{title}</h5>
                <img src={image} className='miniImage'/>
            </div>
        )
    }
}
export default ImagemAndTitle;