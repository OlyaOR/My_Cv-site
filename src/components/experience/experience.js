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
                  A one year now I have been working as a Frontend developer at Resliv. Our company develops and supports products for <a href="https://www.s7.ru/ru/" target="blank"><img src={S7} alt="S7Logo" className='s7logo'/></a>.
                  I support and improve a frontend part for administrative web application for the marketing department.
              </p>
              <p className='experience_items_second'>
                  <span>My responsibilities include:</span> <br/>
                  <ul>
                      <li>
                          Development of cross-browser and adaptive layout;
                      </li>
                      <li>
                          Implementation of frontend logic and styles for components;
                      </li>
                      <li>
                          Code refactoring, troubleshooting and bug fixing, code review;
                      </li>
                      <li>
                          Working with the design system;
                      </li>
                      <li>
                          Collaboration with Team Lead, Designers, Business Analysts, Frontend and Backend developers, QA specialists.
                      </li>
                  </ul>
              </p>
          </div>
      </section>
    );
}