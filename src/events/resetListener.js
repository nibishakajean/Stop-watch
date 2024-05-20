import dom from '../dom.js';
import resetHandler from '../handlers/resetHandler.js';

const resetListener = () => {
    dom.resetButton.addEventListener('click', resetHandler);
};

export default resetListener;
