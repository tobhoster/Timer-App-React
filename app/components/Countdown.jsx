var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  getInitialState: function () {
    return {count: 0};
  },
  handleSetCountdown: function (seconds) {
    this.setState({
      count: seconds
    });
  },
  render: function () {
    var {count} = this.state;

    return (
      <div>
        <div>
          <Clock totalSeconds={129}/>
          <CountdownForm onSetCountdown={this.handleSetCountdown}/>
        </div>
      </div>
    );
  }
});

module.exports = Countdown;
