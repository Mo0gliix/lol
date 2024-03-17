const React = require('react');
require('./Contact.css');
const msg_icon = require('../../assets/msg-icon.png');
const mail_icon = require('../../assets/mail-icon.png');
const phone_icon = require('../../assets/phone-icon.png');
const location_icon = require('../../assets/location-icon.png');
const white_arrow = require('../../assets/white-arrow.png');

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        // ------Enter your web3forms access key below-------

        formData.append("access_key", "-----Enter your web3forms key----");

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            setResult(res.message);
            event.target.reset();
        } else {
            console.log("Error", res);
            setResult(res.message);
        }
    };

    return React.createElement(
        'div',
        { className: 'contact' },
        React.createElement(
            'div',
            { className: 'contact-col' },
            React.createElement(
                'h3',
                null,
                'Send us a message ',
                React.createElement('img', { src: msg_icon, alt: '' })
            ),
            React.createElement(
                'p',
                null,
                'Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.'
            ),
            React.createElement(
                'ul',
                null,
                React.createElement('li', null, React.createElement('img', { src: mail_icon, alt: '' }), 'Contact@GreatStack.dev'),
                React.createElement('li', null, React.createElement('img', { src: phone_icon, alt: '' }), '+1 123-456-7890'),
                React.createElement('li', null, React.createElement('img', { src: location_icon, alt: '' }), '77 Massachusetts Ave, Cambridge', React.createElement('br'), ' MA 02139, United States')
            )
        ),
        React.createElement(
            'div',
            { className: 'contact-col' },
            React.createElement(
                'form',
                { onSubmit: onSubmit },
                React.createElement('label', null, 'Your name'),
                React.createElement('input', { type: 'text', name: 'name', placeholder: 'Enter your name', required: true }),
                React.createElement('label', null, 'Phone Number'),
                React.createElement('input', { type: 'tel', name: 'phone', placeholder: 'Enter your mobile number', required: true }),
                React.createElement('label', null, 'Write your messages here'),
                React.createElement('textarea', { name: 'message', rows: '6', placeholder: 'Enter your message', required: true }),
                React.createElement('button', { type: 'submit', className: 'btn dark-btn' }, 'Submit now ', React.createElement('img', { src: white_arrow, alt: '' }))
            ),
            React.createElement('span', null, result)
        )
    );
}

module.exports = Contact;
