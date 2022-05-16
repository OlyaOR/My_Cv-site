import React from 'react';
import './contacts.scss';

export default function Contacts() {
    return (
      <section className='contacts'>
        <div id="contacts"></div>
        <h2>Contacts</h2>
        <div className='contacts_block'>
            <ul className='contacts_block__main'>
                <li>Location: Republic of Poland, Gdańsk.</li>
                <li>Phone: <a href="tel:+375292735778">+375292735778</a> (Belarus)</li>
                <li>Phone: <a href="tel:+48571050445">+48571050445</a> (Poland)</li>
                <li>Email: <a href="mailto:olga.rozhkova.og94@gmail.com">olga.gavrilova.og94@gmail.com</a></li>
                {/*<li>My CV Rabota.by: <a href="https://rabota.by/resume/a315511aff08ea1d1b0039ed1f336f52516a53" target="blank">rabota.by/resume/..</a> </li>*/}
            </ul>
            <ul className='contacts_block__social-network'>
                <li>Telegram: <a href="https://t.me/olya_or">t.me/olya_or</a></li>
                <li>Github: <a href="https://github.com/OlyaOR" target="blank">github.com/OlyaOR</a></li>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/olya-rozhkova-or" target="blank">linkedin.com/in/olya-rozhkova-or</a></li>
                <li>Instagram: <a href="https://www.instagram.com/olya.rozhkova.or" target="blank">@olya.rozhkova.or</a></li>
            </ul>
            
        </div>
      </section>
    );
}

