var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      timerStatus: 'stopped'
    }
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      var newCount = this.state.count + 1;

      this.setState({
        count: newCount >= 0 ? newCount : 0
      });

      if (newCount === 0) {
        this.setState({
          timerStatus: 'stopped'
        });
      }
    }, 1000);
  },
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.timerStatus != prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
      }
    }
  },
  componentWillUnmount: function () {
    clearInterval(this.timer);
    this.timer = undefined;
  },
  handleStatusChange: function (newStatus) {
    this.setState({
      timerStatus: newStatus
    });
  },
  render: function () {
    var {count, timerStatus} = this.state;

    return (
      <div>
        <div>
          <h1 className='page-title'>Timer</h1>
          <Clock totalSeconds={count}/>
          <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
        </div>
      </div>
    )
  }
});

module.exports = Timer;
