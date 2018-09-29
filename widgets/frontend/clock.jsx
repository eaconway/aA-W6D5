import React from 'react';

class Clock extends React.Component {
  constructor (props) {
    super(props);
    this.state = { time: new Date()};
    this.tick = this.tick.bind(this);
    this.intId = 0;
  }

  tick (){
    this.setState({ time: new Date()}, () => {
      console.log("tick");
      this.intId += 1;
      console.log(this.intId);
    });
  }
  componentDidMount (){
    setInterval(this.tick,1000);
  }
  render () {
    return (
      <div className="clock">
        <h1 className='clock-header'>Clock</h1>
        <div className="clock-body">
          <div className='time'>
            <p>Time: </p>
            <p>{this.state.time.toTimeString().split(' ')[0]}</p>
          </div>
          <div className='time'>
            <p>Date: </p>
            <p>{this.state.time.toDateString()}</p>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Clock;
