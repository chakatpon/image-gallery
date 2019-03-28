import { useState, useEffect } from 'react';

export default () => {

    const [lat, setLat] = useState(null);
    const [errorMessage, setErrorMessage ] = useState('');

    useEffect(() => {
        console.log('My component wes rendered to the screen');
        window.navigator.geolocation.getCurrentPosition(
           // we called setState !!!
           position => {
               setLat(position.coords.latitude);
           },
           err => {
               // we did not
               // this.state.lat = position.coords.latitude;
               setErrorMessage(err.message)
           }
       );
    }, [])

    return [lat, errorMessage];
}