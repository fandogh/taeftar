import React, {Component} from 'react';

import Header from './header'
import Counter from './counter'
import Footer from './footer'

// App component - represents the whole app
export default class App extends Component {

    render() {
        return (
            <div className="app-container">
                <Header/>
                <Counter/>
                <Footer/>
            </div>
        );
    }


}