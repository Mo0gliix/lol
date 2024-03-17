const React = require('react');
require('./About.css');
const about_img = require('../../assets/about.png');
const play_icon = require('../../assets/play-icon.png');

const About = ({ setPlayState }) => {
    return React.createElement(
        'div',
        { className: 'about' },
        React.createElement(
            'div',
            { className: 'about-left' },
            React.createElement('img', { src: about_img, alt: '', className: 'about-img' }),
            React.createElement('img', { src: play_icon, alt: '', className: 'play-icon', onClick: () => { setPlayState(true) } })
        ),
        React.createElement(
            'div',
            { className: 'about-right' },
            React.createElement('h3', null, 'ABOUT UNIVERSITY'),
            React.createElement('h2', null, "Nurturing Tomorrow's Leaders Today"),
            React.createElement('p', null, 'Embark on a transformative educational journey with our university\'s comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.'),
            React.createElement('p', null, 'With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.'),
            React.createElement('p', null, 'Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.')
        )
    );
}

module.exports = About;
