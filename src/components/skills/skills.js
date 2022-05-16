import React from 'react';
import './skills.scss';


export default function Skills() {
    return (
      <section className='skills' >
        <div id="skills"></div>
        <h2>My Skills</h2>
        <p className='skills_text'>At the moment, I have a number of skills. <br /> <span className='skills_text__main'>HTML, CSS, SCSS/SASS, Flex, Grid, JavaScript, TypeScript, Git, GitHub/GitLab, React, React hooks, React Native, Redux, ES6, REST API, Figma, styled-components, BEM, VSCode, IntelliJ IDEA, Slack, Jira, OS: Windows, Mac Linux and etc.</span> <br/> I actively use most of them at work, the rest I studied and had little practical experience. </p>
      </section>
    );
}