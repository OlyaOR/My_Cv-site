import React from 'react';
import './menu.scss';

export default function Menu() {
    return (
      <nav className='menu'>
        <ul className='menu_list'>
            <li><a href="#aboutme" className='menu_item'>About me</a></li>
            <li><a href="#contacts" className='menu_item'>Contacts</a></li>
            <li><a href="#education" className='menu_item'>Education</a></li>
            <li><a href="#qualities" className='menu_item'>Personal qualities</a></li>
            <li><a href="#skills" className='menu_item'>My skills</a></li>
            <li><a href="#experience" className='menu_item'>Work experience</a></li>
            <li><a href="#examples" className='menu_item'>Examples of my work</a></li>
            <li><a href="#moreaboutme" className='menu_item'>More about me</a></li>
        </ul>
      </nav>
    );
}

  