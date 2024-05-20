/**
 * Updates the time object by incrementing the milliseconds and adjusting the seconds and
 * minutes accordingly.
 *
 * @returns {Object} The updated time object.
 */
const updateTime = (data) => {
    data.milliseconds += 10;
    if (data.milliseconds === 1000) {
        data.milliseconds = 0;
        data.seconds++;
    }

    if (data.seconds === 60) {
        data.seconds = 0;
        data.minutes++;
    }
    if (data.minutes === 60) {
        data.minutes = 0;
        data.hours++;
    }

    if (data.hours === 60) {
        data.hours = 0;
    }

    return data;
};

export default updateTime;
