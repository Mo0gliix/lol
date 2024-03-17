const React = require('react');
require('./Campus.css');
const gallery_1 = require('../../assets/gallery-1.png');
const gallery_2 = require('../../assets/gallery-2.png');
const gallery_3 = require('../../assets/gallery-3.png');
const gallery_4 = require('../../assets/gallery-4.png');
const white_arrow = require('../../assets/white-arrow.png');

const Campus = () => {
    return React.createElement(
        'div',
        { className: 'campus' },
        React.createElement(
            'div',
            { className: 'gallery' },
            React.createElement('img', { src: gallery_1, alt: '' }),
            React.createElement('img', { src: gallery_2, alt: '' }),
            React.createElement('img', { src: gallery_3, alt: '' }),
            React.createElement('img', { src: gallery_4, alt: '' })
        ),
        React.createElement(
            'button',
            { className: 'btn dark-btn' },
            'See more here ',
            React.createElement('img', { src: white_arrow, alt: '' })
        )
    );
}

module.exports = Campus;
