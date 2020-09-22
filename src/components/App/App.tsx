import React, { useState } from 'react';
import './App.css';
import TimerButton from '../TimerButton/TimerButton';
import Timer from '../Timer/Timer';
import TimerLogo from '../../TimerLogo.png'


function App() {

  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 })
  const [timerInterval, setTimerInterval] = useState({});
  const [timerStatus, setTimerStatus] = useState(0);

  const startTimer = () => {
    if (timerStatus !== 1) {
      runTimer();
      setTimerStatus(1)
      setTimerInterval(setInterval(runTimer, 10));
    }


  }

  const pauseTimer = () => {
    clearInterval(Number(timerInterval));
    setTimerStatus(2)
  }

  const resumeTimer = () => {
    startTimer();
  }

  const resetTimer = () => {
    clearInterval(Number(timerInterval));
    setTimerStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 })
  }

  var updateMs = time.ms;
  var updateS = time.s;
  var updateM = time.m;
  var updateH = time.h;

  const runTimer = () => {

    if (updateMs === 100) {
      updateS++;
      updateMs = 0;
    }
    if (updateS === 60) {
      updateM++;
      updateS = 0;
    }

    if (updateM === 60) {
      updateH++;
      updateS = 0;
    }
    updateMs++;
    return setTime({ ms: updateMs, s: updateS, m: updateM, h: updateH })

  }


  return (
    <div>
      <div className="main-section">
        {/* <Header /> */}
        <h1 className="headerSection"> <img src={TimerLogo} alt="Timer Quiz" className='timerlogo'/><strong className="LogoText">Timer App</strong></h1>
        <div className="clock-holder">
          <div className="stopwatch">
            <Timer time={time} />
            <TimerButton timerStatus={timerStatus} resumeTimer={resumeTimer} resetTimer={resetTimer} pauseTimer={pauseTimer} startTimer={startTimer} />
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;