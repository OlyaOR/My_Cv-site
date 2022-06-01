import React from 'react';
import './contacts.scss';

export default function Contacts() {
    return (
      <section className='contacts'>
        <div id="contacts"></div>
        <h2>Contacts</h2>
        <div className='contacts_block'>
            <ul className='contacts_block__main'>
                <li><span>Permanent Residence:</span> Republic of Belarus - Minsk.</li>
                <li><span>Temporary Residence:</span> Republic of Poland - Gdańsk.</li>
                <li><span>Phone:</span> <a href="tel:+375292735778">+375292735778</a> (Belarus)</li>
                <li><span>Phone:</span> <a href="tel:+48571050445">+48571050445</a> (Poland)</li>
                <li><span>Email:</span> <a href="mailto:olga.rozhkova.og94@gmail.com">olga.gavrilova.og94@gmail.com</a></li>
            </ul>
            <ul className='contacts_block__social-network'>
                <li><span>Telegram:</span> <a href="https://t.me/olya_or">t.me/olya_or</a></li>
                <li><span>Viber:</span> +48571050445</li>
                <li><span>Github:</span> <a href="https://github.com/OlyaOR" target="blank">github.com/OlyaOR</a></li>
                <li><span>LinkedIn:</span> <a href="https://www.linkedin.com/in/olya-rozhkova-or" target="blank">linkedin.com/in/olya-rozhkova-or</a></li>
                <li><span>Instagram:</span> <a href="https://www.instagram.com/olya.rozhkova.or" target="blank">@olya.rozhkova.or</a></li>
            </ul>
            
        </div>
      </section>
    );
}

