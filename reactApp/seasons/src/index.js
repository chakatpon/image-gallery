import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component {
    constructor(props) {
        super(props);

        // THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT
        // TO this.state
        this.state = {lat: null, errorMessage: ''};
        window.navigator.geolocation.getCurrentPosition(
            // we called setState !!!
            position => {
                this.setState({ lat: position.coords.latitude});

                // we did not
                // this.state.lat = position.coords.latitude;
            },
            err => {
                this.setState({ errorMessage: err.message})
            }
        );
    }

    componentDidMount() {
        console.log('My component wes rendered to the screen');
    }

    componentDidUpdate() {
        console.log('My component was update it rerendered')
    }

    // React says we have to define render!!!
    render() {
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }else if(!this.state.errorMessage && this.state.lat){
            return <div>Latitude: {this.state.lat}</div>;
        }

        return <div>Loading !!!</div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));