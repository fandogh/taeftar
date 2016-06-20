import React, {Component, PropTypes} from 'react';
import fanum from '../../../app/fanum';

// Counter component
export default class Info extends Component {

    render() {
        return (
            <div className="info">
                <span>اذان مغرب : {fanum(this.props.pray.times.today['maghribo'])}</span>
                <br/>
                <span>اذان صبح : {fanum(this.props.pray.times.tomorrow['fajro'])}</span>
            </div>
        );
    }

}