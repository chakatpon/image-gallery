import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{
<<<<<<< HEAD
    state = { images: []};

    onSerchSubmit = async (term) =>{
        const response = await unsplash.get('/search/photos',{
            params: { query: term}
        })
        console.log(this);
        this.setState({ images: response.data.results})
        console.log(response.data.results);
=======
    state = {images:[]};

    onSerchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos',{
            params: { query: term}
            
        });
        console.log(this);
        this.setState({ images: response.data.results});
>>>>>>> 4cdc5cd93dcaff131a32d16eacf62966b9956a16
    }

    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSerchSubmit}/>
<<<<<<< HEAD
                Found: {this.state.images.length} images
                <ImageList images={this.state.images} />
=======
                <ImageList images={this.state.images}/>
>>>>>>> 4cdc5cd93dcaff131a32d16eacf62966b9956a16
            </div>
        );
    }
};

export default App;