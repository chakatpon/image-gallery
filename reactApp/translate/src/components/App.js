import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';


class App extends React.Component {
    state = { language: 'english' };

    onLanguageChange = (language) => {
        this.setState({ language })
    }

    render() {
        return (
            <div className="ui container">
                <div>
                    Select a language:
                    <i onClick={() => this.onLanguageChange('english')} className="flag us" />
                    <i onClick={() => this.onLanguageChange('dutch')} className="flag nl" />
                </div>
                {this.state.language}
                <LanguageContext.Provider value={this.state.language}>
                <UserCreate/>
                </LanguageContext.Provider>
            </div>
        )
    }
}

export default App;