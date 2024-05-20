import data from '../data.js';

/**
 * Stops the timer by clearing the interval.
 * If an interval is currently active, it is cleared and the intervalId is set to null.
 */
const stopHandler = () => {
    if (data.intervalId) {
        clearInterval(data.intervalId);
        data.intervalId = null;
    }
};

export default stopHandler;
