const React = require('react');
require('./Footer.css');

const Footer = () => {
    return React.createElement(
        'div',
        { className: 'footer' },
        React.createElement('p', null, '© 2024 Edusity. All rights reserved.'),
        React.createElement(
            'ul',
            null,
            React.createElement(
                'li',
                null,
                React.createElement('a', { href: 'https://www.youtube.com/@GreatStackDev/videos', target: '_blank' }, 'Terms of Services')
            ),
            React.createElement(
                'li',
                null,
                React.createElement('a', { href: 'https://www.youtube.com/@GreatStackDev/videos', target: '_blank' }, 'Privacy Policy')
            )
        )
    );
}

module.exports = Footer;
