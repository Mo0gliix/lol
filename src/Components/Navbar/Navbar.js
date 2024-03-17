const React = require('react');
require('./Navbar.css');
const logo = require('../../assets/logo.png');
const menu_icon = require('../../assets/menu-icon.png');
const { Link } = require('react-scroll');

const Navbar = () => {
    const [sticky, setSticky] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        });
    }, []);

    const [mobileMenu, setMobileMenu] = React.useState(false);
    const toggleMenu = () => {
        setMobileMenu(prevState => !prevState);
    }

    return React.createElement(
        'nav',
        { className: `container ${sticky ? 'dark-nav' : ''}` },
        React.createElement('img', { src: logo, alt: '', className: 'logo' }),
        React.createElement('ul', { className: mobileMenu ? '' : 'hide-mobile-menu' },
            React.createElement('li', null,
                React.createElement(Link, { to: 'hero', smooth: true, offset: 0, duration: 500 }, 'Home')
            ),
            React.createElement('li', null,
                React.createElement(Link, { to: 'program', smooth: true, offset: -260, duration: 500 }, 'Program')
            ),
            React.createElement('li', null,
                React.createElement(Link, { to: 'about', smooth: true, offset: -150, duration: 500 }, 'About us')
            ),
            React.createElement('li', null,
                React.createElement(Link, { to: 'campus', smooth: true, offset: -260, duration: 500 }, 'Campus')
            ),
            React.createElement('li', null,
                React.createElement(Link, { to: 'testimonials', smooth: true, offset: -260, duration: 500 }, 'Testimonials')
            ),
            React.createElement('li', null,
                React.createElement(Link, { to: 'contact', smooth: true, offset: -260, duration: 500, className: 'btn' }, 'Contact us')
            )
        ),
        React.createElement('img', { src: menu_icon, alt: '', className: 'menu-icon', onClick: toggleMenu })
    );
}

module.exports = Navbar;
