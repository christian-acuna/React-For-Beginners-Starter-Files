// let's go!
/*jshint esversion: 6 */
import React from 'react';
import { render } from 'react-dom';
import './css/style.css';

import StorePicker from './components/StorePicker';

render(<StorePicker/>, document.querySelector('#main'));
