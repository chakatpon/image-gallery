import React from 'react';
<<<<<<< HEAD

const ImageList = (props) => {
    console.log(props.images);
    
    const images = props.images.map((image, index) =>{
        return <img key={index} src={image.urls.regular}/>
    });

    return <div>{images}</div>
    
=======
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {

    const images = props.images.map((image)=>{
        return <ImageCard key={image.id} image={image} />
    });

    return (
        <div className='image-list'>{images}</div>
    );
>>>>>>> 4cdc5cd93dcaff131a32d16eacf62966b9956a16
}

export default ImageList;