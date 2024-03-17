const React = require('react');
const { useRef } = require('react');
require('./VideoPlayer.css');
const video = require('../../assets/college-video.mp4');

const VideoPlayer = ({ playState, setPlayState }) => {
    const player = useRef(null);

    const closePlayer = (e) => {
        if (e.target === player.current) {
            setPlayState(false);
        }
    }

    return React.createElement(
        'div',
        { className: `video-player ${playState ? '' : 'hide'}`, ref: player, onClick: closePlayer },
        React.createElement('video', { src: video, autoPlay: true, muted: true, controls: true })
    );
}

module.exports = VideoPlayer;

