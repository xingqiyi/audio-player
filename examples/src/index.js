import React from 'react';
import { render } from 'react-dom';
import MyComponent from '../../src';

import amr_url from './media/a.amr';
import mp3_url from './media/m.mp3';
import wav_url from './media/w.wav';




const App = () => (
    <div>
        <div>
            <h4>amr:</h4>
            <MyComponent src={amr_url} />
        </div>

        <div>
            <h4>mp3:</h4>
            <MyComponent src={mp3_url} />
        </div>

        <div>
            <h4>wav:</h4>
            <MyComponent src={wav_url} />
        </div>
    </div>

);
render(<App />, document.getElementById("root"));