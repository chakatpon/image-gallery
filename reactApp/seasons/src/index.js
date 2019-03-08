import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from "./Loader";



class App extends React.Component {
    state = { lat: null, errorMessage: ''};

    componentDidMount() {
        console.log('My component wes rendered to the screen');
         window.navigator.geolocation.getCurrentPosition(
            // we called setState !!!
            position => {
                this.setState({ lat: position.coords.latitude});
            },
            err => {
                // we did not
                // this.state.lat = position.coords.latitude;
                this.setState({ errorMessage: err.message})
            }
        );
    }

    componentDidUpdate() {
        console.log('My component was update it rerendered')
    }

    // React says we have to define render!!!
    render() {
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }else if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>;
        }

        return <Loader message='Please accept location request' />;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));