import React from 'react';
import { render } from 'react-dom';
import MyComponent from '../../src';

const amr_url = 'http://39.106.123.19:8900/static/086ed7ad99059df557d117bdf22851f2-1566292439418.amr';
const mp3_url = 'http://39.106.123.19:8900/static/7e59567e3c8635bd68b5d512f7c9c1d7-1566219400810.mp3';


const App = () => (
    <div>
        <div>
            <h3>amr:</h3>
            <MyComponent src={amr_url} />
        </div>

        <div>
            <h3>mp3:</h3>
            <MyComponent src={mp3_url} />
        </div>

    </div>

);
render(<App />, document.getElementById("root"));