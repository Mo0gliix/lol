const React = require('react');
const { useState } = require('react');
const Navbar = require('./Components/Navbar/Navbar');
const Hero = require('./Components/Hero/Hero');
const Programs = require('./Components/Programs/Programs');
const Title = require('./Components/Title/Title');
const About = require('./Components/About/About');
const Campus = require('./Components/Campus/Campus');
const Testimonials = require('./Components/Testimonials/Testimonials');
const Contact = require('./Components/Contact/Contact');
const Footer = require('./Components/Footer/Footer');
const VideoPlayer = require('./Components/VideoPlayer/VideoPlayer');

const App = () => {
    const [playState, setPlayState] = useState(false);

    return React.createElement(
        'div',
        null,
        React.createElement(Navbar, null),
        React.createElement(Hero, null),
        React.createElement(
            'div',
            { className: 'container' },
            React.createElement(Title, { subTitle: 'Our PROGRAM', title: 'What We Offer' }),
            React.createElement(Programs, null),
            React.createElement(About, { setPlayState: setPlayState }),
            React.createElement(Title, { subTitle: 'Gallery', title: 'Campus Photos' }),
            React.createElement(Campus, null),
            React.createElement(Title, { subTitle: 'TESTIMONIALS', title: 'What Student Says' }),
            React.createElement(Testimonials, null),
            React.createElement(Title, { subTitle: 'Contact Us', title: 'Get in Touch' }),
            React.createElement(Contact, null),
            React.createElement(Footer, null)
        ),
        React.createElement(VideoPlayer, { playState: playState, setPlayState: setPlayState })
    );
};

module.exports = App;
