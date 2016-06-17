import React from 'react';
import fanum from '../../../app/fanum';

// Counter component
export default
class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.gets();
    }

    componentDidMount() {
        this.timer = setInterval((this.tick).bind(this), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    gets() {
        this.props.pray.update();
        return {
            remaining: this.props.pray.remaining
        }
    }

    tick() {
        this.setState(this.gets());
    }

    render() {


        return (
            <div className="counter">
                <div className="counter-circle">
                    <p className="counter-title">{fanum(this.state.remaining.r[0].val)}</p>
                    <p className="counter-subtitle">{this.state.remaining.r[0].lbl}</p>
                    <p className="counter-subtitle">و {fanum(this.state.remaining.r[1].val)}
                        {this.state.remaining.r[1].lbl}</p>
                    <p className="counter-desc">مونده تا {this.state.remaining.to}</p>

                    <img className="counter-img" src="/img/date.png"/>
                </div>
            </div>
        );
    }

}