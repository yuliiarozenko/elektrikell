import React from 'react';
import Countdown from 'react-countdown';

const CountdownComponent = () => {
  const hours = 1 * 60 * 60 * 1000; 

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <div style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold' }}>
        <span>{hours}</span> : <span>{minutes}</span> : <span>{seconds}</span>
      </div>
    );
  };

  return <Countdown date={Date.now() + hours} renderer={renderer} />;
};

export default CountdownComponent;