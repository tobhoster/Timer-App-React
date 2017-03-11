var React = require('react');
var Clock = require('Clock');

var Countdown = (props) => {
  return (
    <div>
      <div>
        <Clock totalSeconds={129}/>
      </div>
    </div>
  );
};

module.exports = Countdown;
