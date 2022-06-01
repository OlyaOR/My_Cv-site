import React from 'react';
import './experience.scss';
import S7 from "./img/S7_new_logo.svg.png";

export default function Experience() {
    return (
      <section className='experience' >
        <div id="experience"></div>
        <h2>Work experience</h2>
          <div className='experience_items'>
              <p className='experience_items_first'>
                  Almost a year now I have been working as a Frontend developer at Resliv. Our company develops and supports products for <a href="https://www.s7.ru/ru/" target="blank"><img src={S7} alt="S7Logo" className='s7logo'/></a>.
                  I support and improvement a frontend part for administrative web application for the marketing department.
              </p>
              <p className='experience_items_second'>
                  <span>My responsibilities include:</span> <br/>
                  <ul>
                      <li>
                          cross-browser and adaptive layout;
                      </li>
                      <li>
                          adding functionality and styles for components;
                      </li>
                      <li>
                          refactoring code, fixing bugs, doing code review and working with the design system;
                      </li>
                      <li>
                          communication with other members of team: qa engineers, frontend and backend developers, team lead, designers and analysts.
                      </li>
                  </ul>
              </p>
          </div>
      </section>
    );
}