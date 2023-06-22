import './style.css';
import scoreBox from './modules/scoreBox.js';
import { postActivator, getActivator, gameActivator } from './modules/FunctionActivator.js';

postActivator();
getActivator();
gameActivator()

window.addEventListener('load', scoreBox);