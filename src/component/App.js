import React, { Component } from 'react';

import SearchBar from './SearchBar'
import ImageList from './ImageList'
import Unsplash from '../api/unsplashed'

class App extends Component {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        console.log(term)
        const response = await Unsplash.get("/search/photos", {
            params: { query: term }
        });
        this.setState({ images: response.data.results })
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} text="Image Search:" />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}
export default App;