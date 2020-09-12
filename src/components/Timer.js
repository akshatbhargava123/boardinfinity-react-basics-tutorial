import React from 'react';

function Timer({
	intervalTime = 1000,
}) {

	const intervalRef = React.useRef();
	const [seconds, setSeconds] = React.useState(0);
	const [timerWorking, setTimerWorking] = React.useState(true);

	React.useEffect(() => {
		intervalRef.current = setInterval(() => {
      setSeconds(s => s + 1);
		}, intervalTime);

		return () => {
			clearInterval(intervalRef.current);
		};
	}, []);

	const resetTimer = () => {
		setSeconds(0);
	};

	const toggleTimer = () => {
		const intervalInstance = intervalRef.current;
		if (intervalInstance) {
			clearInterval(intervalInstance);

			intervalRef.current = null;
			setTimerWorking(false);
    } else {
			setTimerWorking(true);
      intervalRef.current = setInterval(() => {
        setSeconds(seconds + 1);
			}, 500);
    }
	};

	return (
		<div style={{ ...styles}}>
			<h1>
				Timer:  {seconds}
			</h1>
			<button onClick={toggleTimer}>
				{timerWorking ? 'Stop' : 'Start'} Timer
			</button>
			<button onClick={resetTimer}>Reset Timer</button>
		</div>
	);
}

const styles = {
  padding: '50px',
	color: 'red',
	fontSize: '20px'
};

export default Timer;
