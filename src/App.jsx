import React, {Component} from 'react';
import Clock from './Clock.jsx';
import './App.css';

class App extends Component {
    state = {
        deadline: '16 August, 2018',
        newDeadline: ''
    }

    changeDeadline = () => {
        this.setState({
            deadline: this.state.newDeadline
        });
    }

    handleOnChangeNewDeadline = event => this.setState({
        newDeadline: event.target.value
    });

    render () {
        return (
            <div className="App">
                <div>
                    <div className="App-title">Countdown to {this.state.deadline}</div>
                    <Clock deadline={this.state.deadline} />
                </div>
                <div>
                    <input
                        placeholder="new date" 
                        onChange={this.handleOnChangeNewDeadline}
                    />
                    <button onClick={this.changeDeadline}>Submit</button>
                </div>
            </div>
        );
    }
}

export default App;
