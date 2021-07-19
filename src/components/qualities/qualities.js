import React from 'react';
import './qualities.scss';
import communicative from './img/communicative.png';
import friendly from './img/friendly.png';
import listeningskills from './img/listeningskills.png';
import positiveattitude from './img/positiveattitude.png';
import selfcontrol from './img/selfcontrol.png';
import takingresponsibility from './img/takingresponsibility.png';
import teamplayer from './img/teamplayer.png';

export default function Qualities() {
    return (
      <section className='qualities'>
        <h2>Personal qualities</h2>
        <p className='qualities_text'>I'm diligent, hardworking, result oriented person. I’m effective communicator and team player. I always keep focus on meeting deadlines.</p>
        <ul className='qualities_items'>
            <li className='qualities_item'><img src={communicative} alt="communicative" />Communicative</li>
            <li className='qualities_item'><img src={friendly} alt="friendly" />Friendly</li>
            <li className='qualities_item'><img src={listeningskills} alt="listeningskills" />Listening skills</li>
            <li className='qualities_item'><img src={positiveattitude} alt="positiveattitude" />Positive attitude</li>
            <li className='qualities_item'><img src={selfcontrol} alt="selfcontrol" />Self-control</li>
            <li className='qualities_item'><img src={takingresponsibility} alt="takingresponsibility" />Taking responsibility</li>
            <li className='qualities_item'><img src={teamplayer} alt="teamplayer" />Team player</li>
        </ul>
      </section>
    );
}