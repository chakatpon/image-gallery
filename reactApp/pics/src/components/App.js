import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component{

    onSerchSubmit = (term) => {
        axios.get('https://api.unsplash.com/search/photos',{
            params: { query: term},
            headers:{
                Authorization: 'Client-ID 02f26a47c46601e7abdab865c80dbd2191fd577abb1a746fef359d286cd5f8a5'
            }
        });

        
        console.log(term);
    }

    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSerchSubmit}/>
            </div>
        );
    }
};

export default App;