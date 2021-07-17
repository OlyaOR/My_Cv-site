import './education.scss';
import webdev from './img/webdev.png';
import jsreact from './img/jsreact.png';

export default function Education() {
    return (
      <section className='education'>
        <h2>Education</h2>
        <div className="education_items">
                <div className="education_item">
                    <h3>Higher education</h3>
                    Belarusian State Economic University. <br />
                    Specialization - accounting, analysis and audit. <br />
                    Specialty - economist.
                    <h3>Level of English</h3>
                    I learned English in school and university and have been studying English with a tutor for more than year now. <br />
                    Level: A2-B1 (Pre-Intermediate)
                </div>
                <div className="education_item">
                    <ul><h3>Сourses:</h3>
                        <li>Free courses on code-basics.com: HTML, CSS, JS</li>
                        <li>Free part of courses on hexlet.io: HTML, CSS, JS, GIT</li>
                        <li>Udemy courses: WEB-Developer 2020(2021), author: Ivan Petrichenko</li>
                        <li>Udemy courses: The Complete JavaScript + React Course - From Scratch to Results, author: Ivan Petrichenko</li>
                    </ul>
                </div>
                <div className="education_item">
                    <h3>Additionally</h3>
                    I have been studying on my own with the help of professional literature, free Hexlet courses, Code-basics courses and paid courses on Udemy. I have certificates of successful completion of the course. <br />
                    <img src={webdev} alt="certificate web-dev" className='education_item__img'/>
                    <img src={jsreact} alt="certificate js+react" className='education_item__img'/>
                </div>
            </div>
      </section>
    );
}