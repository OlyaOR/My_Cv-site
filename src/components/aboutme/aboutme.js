import './aboutme.scss';
import me from './img/me.jpeg';

export default function AboutMe() {
    return (
      <section className='aboutme'>
        <h1>Olga &nbsp; Rozhkova</h1>
        <img src={me} alt="myphoto" className='aboutme_img'/>
        <p className='aboutme_info'>&nbsp;I'm Junior Front-end Developer.<br /><br />&nbsp;I worked as an Accountant in different professional streams about 5 years. A year ago, I set myself the goal of changing my profession and start my career in the IT sphere. <br /><br />&nbsp;I really like the Front-End development and continuously improve my professional level. I'm ready to dig into details and learn new technologies according to a project requirements. I'm constantly studying something new, reading professional literature, articles and watching training videos. <br /><br />&nbsp;So far I have no experience on a real-life project, but I eager to start with my first and will do my best to achieve successful completion of it.
        </p>
      </section>
    );
}

