import React from 'react';
import './moreinfo.scss';
import focused from './img/focused.jpg';
import communicative from './img/communicative.jpeg';
import bicycle from './img/bicycle.jpeg';
import awards from './img/awards.jpeg';
import food from './img/food.jpeg';
import toski from './img/toski.jpeg';
import work from './img/work.jpeg';
import journey from './img/journey.jpeg';

export default function MoreInfo() {
    function active(e) {
        if (e.target.alt === 'img') {
            e.target.classList.toggle('moreinfo_img__active');
        };
    };
    return (
        <section className='moreinfo' onClick={active}>
        <div id="moreaboutme"></div>
        <h2>More information about me</h2>
        <div className='moreinfo_item'>
            <img src={journey} alt="img" className='moreinfo_img'/>
            <div className='moreinfo_item__text'>I like to travel and enjoy the beauty around us &#128154;</div>
        </div>
        <div className='moreinfo_item'>
            <img src={communicative} alt="img" className='moreinfo_img'/>
            <div className='moreinfo_item__text'>I feel comfortable and interesting in any company &#128513;</div>
        </div>
        <div className='moreinfo_item'>
            <img src={bicycle} alt="img" className='moreinfo_img'/>
            <div className='moreinfo_item__text'>In Summer I prefer cycling</div>
        </div>
        <div className='moreinfo_item'>
            <img src={toski} alt="img" className='moreinfo_img'/>
            <div className='moreinfo_item__text'>And in Winter I prefer skiing</div>
        </div>
        <div className='moreinfo_item'>
            <img src={food} alt="img" className='moreinfo_img'/>
            <div className='moreinfo_item__text'>I also like to cook</div>
        </div>
        <div className='moreinfo_item'>
            <img src={focused} alt="img" className='moreinfo_img'/>
            <div className='moreinfo_item__text'>I focus as much as possible when doing work or studying &#129488;</div>
        </div>
        <div className='moreinfo_item'>
            <img src={work} alt="img" className='moreinfo_img'/>
            <div className='moreinfo_item__text'>I am not afraid to take on any work 	&#128517;</div>
        </div>
        <div className='moreinfo_item'>
            <img src={awards} alt="img" className='moreinfo_img'/>
            <div className='moreinfo_item__text'>I have awards from my previous employment for a good job &#128077;</div>
        </div>
      </section>
    );
}