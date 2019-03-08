import React from 'react';

const Loader = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui medium text loader">{props.message}</div>
        </div>
    );
};

Loader.defaultProps = {
    message: 'Loader...'
};

export default Loader;