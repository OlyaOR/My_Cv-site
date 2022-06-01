import React from 'react';
import './skills.scss';


export default function Skills() {
    return (
      <section className='skills' >
        <div id="skills"></div>
        <h2>My Skills</h2>
        <p className='skills_text'>I have a number of skills. I actively use most of them at work, other I studied and had little practical experience.<br /> <span className='skills_text__main'>HTML, CSS, SCSS/SASS, Flex, Grid, JavaScript, TypeScript, Git, GitHub/GitLab, React, React hooks, React Native, Redux, ES6, REST API, Figma, styled-components, BEM, VSCode, IntelliJ IDEA, Slack, Jira and etc. OS: Mac, Linux, Windows.</span></p>
      </section>
    );
}