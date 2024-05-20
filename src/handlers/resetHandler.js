import data from '../data.js';
import dom from '../dom.js';
import updateTimeComponent from '../components/updateTimeUnits.js';

/**
 * Resets the timer and updates the time components in the DOM.
 */
const resetHandler = () => {
    if (data.intervalId) {
        clearInterval(data.intervalId);
        data.intervalId = null;
    }
    data.hours =0;
    data.minutes = 0;
    data.seconds = 0;
    data.milliseconds = 0;
    updateTimeComponent(dom.time, data);
};

export default resetHandler;
