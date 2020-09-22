import React from 'react';

function TimerButton(props: any) {
    return (
        <div >
            <button
                onClick={props.startTimer}
                className="stopwatch-btn stopwatch-btn-green"> Start 
            </button>
            <button
                onClick={props.pauseTimer}
                className="stopwatch-btn stopwatch-btn-red"> Stop
            </button>
            <button
                onClick={props.resetTimer}
                className="stopwatch-btn stopwatch-btn-grey"> Reset
            </button>
        </div>
    );
}

export default TimerButton;