import React from 'react';
import './aboutme.scss';
import me from './img/me.jpeg';

export default function AboutMe() {
    return (
      <section className='aboutme'>
        <div id='aboutme'></div>
        <h1>Olga Rozhkova</h1>
        <img src={me} alt="myphoto" className='aboutme_img'/>
        <p className='aboutme_info'>&nbsp;I am a Front-end Developer with eight months of experience.<br /><br />&nbsp;I worked as an Accountant in different professional streams about 5 years. In 2020, I set myself the goal of changing my profession and start my career in the IT sphere. <br /><br />&nbsp;I really like the Front-End development and continuously improve my professional level. I'm ready to dig into details and learn new technologies according to a project requirements. I'm constantly studying something new, reading professional literature, articles and watching training videos. <br /><br />&nbsp;I have experience on a real-life project. For eight months now I have been working as a Front-end developer at Resliv. Our company develops and supports S7 airline products.
        </p>
      </section>
    );
}

