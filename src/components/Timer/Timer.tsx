import React from 'react';

function Timer(props:any) {

  return (
    <div >
      <span>{(props.time.h >0 ? props.time.h : "00")}</span> <strong className="timerDots">:</strong>
      <span>{(props.time.m >0 ? props.time.m : "00")}</span> <strong className="timerDots">:</strong>
      <span>{(props.time.s >0 ? props.time.s : "00")}</span> <strong className="timerDots">:</strong>
      <span>{(props.time.ms >0 ? props.time.ms : "00")}</span> 
     

    </div>
  );
}

export default Timer;