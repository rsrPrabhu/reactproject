import { Component } from 'react';

class Helloworld extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.text}</h3>
            </div>
        );
    }
}

export default Helloworld;