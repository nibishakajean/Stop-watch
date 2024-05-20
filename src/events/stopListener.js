import dom from '../dom.js';
import stopHandler from '../handlers/stopHandler.js';

const stopListener = () => {
    dom.stopButton.addEventListener('click', stopHandler);
};

export default stopListener;
