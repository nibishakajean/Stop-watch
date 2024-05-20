/**
 * Formats a time unit to a specific format.
 *
 * @param {number} unit - The time unit to be formatted.
 * @returns {string|string} - The formatted time unit.
 */

const formatTimeUnit = (unit) => {
    return unit < 10 ? '0' + unit : unit;
};

export default formatTimeUnit;
