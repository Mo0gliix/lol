const React = require('react');
require('./Programs.css');
const program_1 = require('../../assets/program-1.png');
const program_2 = require('../../assets/program-2.png');
const program_3 = require('../../assets/program-3.png');
const program_icon_1 = require('../../assets/program-icon-1.png');
const program_icon_2 = require('../../assets/program-icon-2.png');
const program_icon_3 = require('../../assets/program-icon-3.png');

const Programs = () => {
    return React.createElement(
        'div',
        { className: 'programs' },
        React.createElement(
            'div',
            { className: 'program' },
            React.createElement('img', { src: program_1, alt: '' }),
            React.createElement(
                'div',
                { className: 'caption' },
                React.createElement('img', { src: program_icon_1, alt: '' }),
                React.createElement('p', null, 'Graduation Degree')
            )
        ),
        React.createElement(
            'div',
            { className: 'program' },
            React.createElement('img', { src: program_2, alt: '' }),
            React.createElement(
                'div',
                { className: 'caption' },
                React.createElement('img', { src: program_icon_2, alt: '' }),
                React.createElement('p', null, 'Masters Degree')
            )
        ),
        React.createElement(
            'div',
            { className: 'program' },
            React.createElement('img', { src: program_3, alt: '' }),
            React.createElement(
                'div',
                { className: 'caption' },
                React.createElement('img', { src: program_icon_3, alt: '' }),
                React.createElement('p', null, 'Post Graduation')
            )
        )
    );
}

module.exports = Programs;
