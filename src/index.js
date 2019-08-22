import React from 'react';
import BenzAMRRecorder from 'benz-amr-recorder'

import './styles.css'

const playHandler = (amr, player) => {
    player.then(function () {
        amr.play();
    });
}
const stopHandler = (amr) => {
    amr.stop();
}

const MyComponent = ({ src }) => {

    let audio_panel = '';
    const fileExtension = src.split('.').pop().toLowerCase();

    if (fileExtension === 'amr') {
        const amr = new BenzAMRRecorder();
        const player = amr.initWithUrl(src);
        amr.onEnded(function () {
            console.log('播放完毕');
        })

        audio_panel = (
            <div>
                <input type='button' onClick={playHandler.bind(this, amr, player)} value='播放'></input>
                <input type='button' onClick={stopHandler.bind(this, amr)} value='停止'></input>
            </div>


        )
    } else if (['mp3', 'wav', 'ogg'].includes(fileExtension)) {
        audio_panel = (
            <audio src={src} controls="controls"> </audio>
        )
    } else {
        audio_panel = ''
    }

    return audio_panel;
};

export default MyComponent;