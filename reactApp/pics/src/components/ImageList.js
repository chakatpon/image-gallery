import React from 'react';

const ImageList = (props) => {
    console.log(props.images);
    
    const images = props.images.map((image, index) =>{
        return <img key={index} src={image.urls.regular}/>
    });

    return <div>{images}</div>
    
}

export default ImageList;