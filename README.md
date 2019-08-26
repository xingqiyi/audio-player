# html5 audio player 音频播放器

## supported audio format 支持的音频格式
 `amr, mpeg, opus, ogg, oga, aac, caf, m4a, mp4, weba, webm, dolby, flac, mp3, wav`

## Installation 安装
`yarn add this-is-test-component`


## Usage example 使用示例
https://xingqiyi.github.io/audio-player/


```jsx
import React from 'react';
import { render } from 'react-dom';
import AudioPlayer from '../../src';

import amr_url from './media/a.amr';
import mp3_url from './media/m.mp3';
import wav_url from './media/w.wav';


const App = () => (
    <div>
        <div>
            <h4>amr:</h4>
            <AudioPlayer src={amr_url} />
        </div>

        <div>
            <h4>mp3:</h4>
            <AudioPlayer src={mp3_url} />
        </div>

        <div>
            <h4>wav:</h4>
            <AudioPlayer src={wav_url} />
        </div>
    </div>

);
render(<App />, document.getElementById("root"));
```