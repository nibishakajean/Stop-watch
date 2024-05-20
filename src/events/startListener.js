import dom from '../dom.js';
import startHandler from '../handlers/startHandler.js';

const startListener = () => {
    dom.startButton.addEventListener('click', startHandler);
};

export default startListener;
