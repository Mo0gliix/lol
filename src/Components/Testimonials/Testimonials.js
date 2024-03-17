const React = require('react');
require('./Testimonials.css');
const next_icon = require('../../assets/next-icon.png');
const back_icon = require('../../assets/back-icon.png');
const user_1 = require('../../assets/user-1.png');
const user_2 = require('../../assets/user-2.png');
const user_3 = require('../../assets/user-3.png');
const user_4 = require('../../assets/user-4.png');

const Testimonials = () => {
    const slider = React.useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    return React.createElement(
        'div',
        { className: 'testimonials' },
        React.createElement('img', { src: next_icon, alt: '', className: 'next-btn', onClick: slideForward }),
        React.createElement('img', { src: back_icon, alt: '', className: 'back-btn', onClick: slideBackward }),
        React.createElement('div', { className: 'slider' },
            React.createElement('ul', { ref: slider },
                React.createElement('li', null,
                    React.createElement('div', { className: 'slide' },
                        React.createElement('div', { className: 'user-info' },
                            React.createElement('img', { src: user_1, alt: '' }),
                            React.createElement('div', null,
                                React.createElement('h3', null, 'Emily Williams'),
                                React.createElement('span', null, 'Edusity, USA')
                            )
                        ),
                        React.createElement('p', null, "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.")
                    )
                ),
                React.createElement('li', null,
                    React.createElement('div', { className: 'slide' },
                        React.createElement('div', { className: 'user-info' },
                            React.createElement('img', { src: user_2, alt: '' }),
                            React.createElement('div', null,
                                React.createElement('h3', null, 'William Jackson'),
                                React.createElement('span', null, 'Edusity, USA')
                            )
                        ),
                        React.createElement('p', null, "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.")
                    )
                ),
                React.createElement('li', null,
                    React.createElement('div', { className: 'slide' },
                        React.createElement('div', { className: 'user-info' },
                            React.createElement('img', { src: user_3, alt: '' }),
                            React.createElement('div', null,
                                React.createElement('h3', null, 'Emily Williams'),
                                React.createElement('span', null, 'Edusity, USA')
                            )
                        ),
                        React.createElement('p', null, "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.")
                    )
                ),
                React.createElement('li', null,
                    React.createElement('div', { className: 'slide' },
                        React.createElement('div', { className: 'user-info' },
                            React.createElement('img', { src: user_4, alt: '' }),
                            React.createElement('div', null,
                                React.createElement('h3', null, 'William Jackson'),
                                React.createElement('span', null, 'Edusity, USA')
                            )
                        ),
                        React.createElement('p', null, "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.")
                    )
                )
            )
        )
    );
}

module.exports = Testimonials;
