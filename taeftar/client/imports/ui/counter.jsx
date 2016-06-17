import React, {Component, PropTypes} from 'react';

// Counter component
export default class Counter extends Component {

    render() {
        return (
            <div className="counter">

                <div className="counter-circle">

                    <div class="counter-title">23</div>
                    <div class="counter-subtitle">دقیقه</div>
                    <div class="counter-desc">مونده تا افطار</div>


                </div>

            </div>
        );

    }

}