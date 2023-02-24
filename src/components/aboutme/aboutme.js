import React from 'react';
import './aboutme.scss';
import me from './img/me.jpeg';

export default function AboutMe() {
    return (
      <section className='aboutme'>
        <div id='aboutme'></div>
        <h1>Olga Rozhkova</h1>
        <img src={me} alt="myphoto" className='aboutme_img'/>
        <p className='aboutme_info'>I am a frontend developer with over 1 year experience.
            <br /><br />I worked as an Accountant in different professional streams about 5 years. In 2020, I set myself the goal of changing my profession and start career in the IT sphere. I chose the Frontend development and I really love it.
            <br /><br />I constantly improve my professional level, studying something new, reading professional literature, articles and watching training videos. I ready to dig into details and learn any technology required by a project.
            <br /><br />Starting August 2021 I have been working as a Frontend developer at Resliv. Our company develops and supports <a href="https://www.s7.ru/ru/" target="blank">S7 Airlines</a> products.
        </p>
      </section>
    );
}

