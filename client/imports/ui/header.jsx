import React, {Component, PropTypes} from 'react';
import TimeSelector from './time-selector';

// Counter component
export default class Header extends Component {

    render() {
        return (
            <div className="header">
                <TimeSelector {...this.props} />
            </div>
        );
    }

}