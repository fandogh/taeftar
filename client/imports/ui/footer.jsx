import React, {Component, PropTypes} from 'react';
import Info from './info';

// Counter component
export default
class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <div className="logo">
                    <a href="https://fandogh.org">
                        <img src="/img/fandogh.png" width="50px" height="50px"/>
                    </a>
                </div>
                <Info {...this.props}/>
            </div>
        );
    }

}