import React from 'react';
import BenzAMRRecorder from 'benz-amr-recorder'
import { Howl, Howler } from 'howler';
import './styles.css'

const playHandler = (amr, player) => {
    player.then(function () {
        amr.play();
    });
}
const stopHandler = (amr) => {
    amr.stop();
}

const howlPlayHandler = (sound) => {
    sound.play();
}
const howlPtopHandler = (sound) => {
    sound.pause();
}

const AudioPlayer = ({ src }) => {

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
    } else if (['mpeg', 'opus', 'ogg', 'oga', 'aac', 'caf', 'm4a', 'mp4', 'weba', 'webm', 'dolby', 'flac', 'wma'].includes(fileExtension)) {

        var sound = new Howl({
            src: [src]
        });

        audio_panel = (
            <div>
                <input type='button' onClick={howlPlayHandler.bind(this, sound)} value='播放'></input>
                <input type='button' onClick={howlPtopHandler.bind(this, sound)} value='停止'></input>
            </div>
        )
    }

    else if (['mp3', 'wav', 'ogg',].includes(fileExtension)) {
        audio_panel = (
            <audio src={src} controls="controls"> </audio>
        )
    }


    else {
        console.error(`不支持格式${fileExtension}`)
        audio_panel = ''
    }

    return audio_panel;
};

export default AudioPlayer;