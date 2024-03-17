const React = require('react');
require('./Hero.css');
const dark_arrow = require('../../assets/dark-arrow.png');

const Hero = () => {
    return React.createElement(
        'div',
        { className: 'hero container' },
        React.createElement(
            'div',
            { className: 'hero-text' },
            React.createElement('h1', null, 'We Ensure better education for a better world'),
            React.createElement('p', null, 'Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education'),
            React.createElement(
                'button',
                { className: 'btn' },
                'Explore more ',
                React.createElement('img', { src: dark_arrow, alt: '' })
            )
        )
    );
}

module.exports = Hero;
