const React = require('react');
require('./Title.css');

const Title = ({ subTitle, title }) => {
    return React.createElement(
        'div',
        { className: 'title' },
        React.createElement('p', null, subTitle),
        React.createElement('h2', null, title)
    );
}

module.exports = Title;
