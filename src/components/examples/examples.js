import React from 'react';
import './examples.scss';


export default function Examples() {
    return (
      <section className='examples'>
        <h2>Examples of my work</h2>
        <div className="examples_info">
            <p className='examples_info__text'>By clicking on the links you can see the final result of my projects. Some of them were made during training, the other was done independently. You can see code repositories of these projects at the link: <a href="https://github.com/OlyaOR" target="blank">My GitHub</a></p>
            <ul className='examples_info__items'>
                <li><a href="https://olyaor.github.io/wordpress/" target="blank">Wordpress</a></li>
                <li><a href="https://olyaor.github.io/Uber/" target="blank">Uber</a></li>
                <li><a href="https://landscapingforinterview.netlify.app/" target="blank">Landscaping</a></li>
                <li><a href="https://olyaor.github.io/RunSmart/dist/" target="blank">RunSmart</a></li>
                <li><a href="https://post-list-app-react.netlify.app" target="blank">PostApp</a></li>
                <li><a href="https://got-app-react.netlify.app" target="blank">GOT App</a></li>
                <li><a href="https://resto-app-react-redux.netlify.app/" target="blank">RestoApp</a></li>
                <li><a href="https://searchword.netlify.app/" target="blank">Search Word</a></li>
                <li><a href="https://taskfromspurit-digestion.netlify.app/" target="blank">Digestion</a></li>
            </ul>
        </div>
     </section>
    );
}