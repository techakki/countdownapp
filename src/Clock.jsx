import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
    state = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    }

    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    }

    componentDidMount() {
        setInterval( () => this.getTimeUntil(this.props.deadline), 1000);
    }

    getTimeUntil(deadline) {
        const timeInSeconds = (Date.parse(deadline) - new Date())/1000;

        const seconds = Math.floor(timeInSeconds % 60);
        const minutes = Math.floor((timeInSeconds/60) % 60);
        const hours = Math.floor((timeInSeconds/(60*60)) % 24);
        const days = Math.floor(timeInSeconds/(60*60*24));

        this.setState({
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        });
    }

    leadingZero(number) {
        return number < 10 ? '0' + number : number;
    }

    render() {
        return (
            <div>
                <div className="Clock-days">{this.leadingZero(this.state.days)} days</div>
                <div className="Clock-hours">{this.leadingZero(this.state.hours)} hours</div>
                <div className="Clock-minutes">{this.leadingZero(this.state.minutes)} minutes</div>
                <div className="Clock-seconds">{this.leadingZero(this.state.seconds)} seconds</div>
            </div>
        );
    }
}

export default Clock;
