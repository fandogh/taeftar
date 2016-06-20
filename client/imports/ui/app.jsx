import React, {Component} from 'react';

import Header from './header'
import Counter from './counter'
import Footer from './footer'
import Pray from '../../../app/pray';

// App component - represents the whole app

export default
class App extends Component {

    render() {
        return (
            <div className="app-container">
                <Header {...this.props}/>
                <Counter {...this.props}/>
                <Footer {...this.props}/>
            </div>
        );
    }


}

// App.propTypes = {
//     pray: React.PropTypes.object
// };

App.defaultProps = {
    pray: new Pray()
};

