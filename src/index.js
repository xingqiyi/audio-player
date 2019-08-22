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


    const fileExtension = src.split('.').pop().toLowerCase();

    if (fileExtension === 'amr') {
        const amr = new BenzAMRRecorder();
        const player = amr.initWithUrl(src);
        amr.onEnded(function () {
            console.log('播放完毕');
        })

        return (
            <div>
                <h1>ello from my component.</h1>
                <h4>{src}</h4>
                <input type='button' onClick={playHandler.bind(this, amr, player)} value='播放'></input>
                <input type='button' onClick={playHandler.bind(this, amr)} value='停止'></input>
            </div>


        )
    } else if (['mp3', 'wav', 'ogg'].includes(fileExtension)) {
        return (
            <audio src={src} controls="controls"> </audio>

        )
    }
};

export default MyComponent;