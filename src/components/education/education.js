import React, {useState} from 'react';
import './education.scss';
import webdev from './img/webdev.png';
import jsreact from './img/jsreact.png';
import close from './img/close-button.png';

export default function Education() {
    const [isOpen, setIsOpen] = useState(false);
    const [img, setImg] = useState('');
    const onOpen = (e) => {
        setImg(e.target.id);
        setIsOpen(true);
    };
    const onClose = () => {
        setImg('');
        setIsOpen(false);
    };
    return (
      <section className='education' >
        <div id="education"></div>
        <h2>Education</h2>
        <div className="education_items">
                <div className="education_item">
                    <h3>Higher education</h3>
                    Belarusian State Economic University. Specialty - economist.
                    Specialization - accounting, analysis and audit. <br/>
                    <h3>Level of English</h3>
                    I learned English in school and university and have been studying English with a tutor since June 2020. <br />
                    Level: B1 (Intermediate)<br/>
                    <h3>Other languages</h3>
                    Russian and Belarusian - Native;
                    Polish - Beginner (Now I'm learning Polish using the app, but in the near future I plan to study with a tutor.)
                </div>
                <div className="education_item">
                    <h3>Сourses</h3>
                    I have been studying on my own with the help of professional literature, training videos and courses.
                    <ul>For example I passed:
                        <li>Free courses on <a href='https://ru.code-basics.com/' target='blank'>code-basics.com</a>: HTML, CSS, JS</li>
                        <li>Free part of courses on <a href='https://ru.hexlet.io/' target='blank'>hexlet.io</a>: HTML, CSS, JS, GIT</li>
                        <li><a href='https://www.udemy.com/course/webdeveloper/' target='blank'>Udemy courses</a>: WEB-Developer 2020(2021), author: Ivan Petrichenko</li>
                        <li><a href='https://www.udemy.com/course/javascript_full/' target='blank'>Udemy courses</a>: The Complete JavaScript + React Course - From Scratch to Results, author: Ivan Petrichenko</li>
                    </ul>
                </div>
                <div className="education_item" onClick={ onOpen }>
                    <h3>Additionally</h3>
                    I have certificates of successful completion of the course. <br />
                    <div id='1'><img src={ webdev } alt="certificate web-dev" className='education_item__img'/></div>
                    <div id='2'><img src={ jsreact } alt="certificate js+react" className='education_item__img'/></div>
                </div>
            {
                isOpen &&
                <div onClick={ onClose } className='certificate'>
                    <img src={ img === '1' && !!img ? webdev : jsreact } alt='img'/>
                    <img src={close} alt='close button' onClick={ onClose } className='closeButton'/>
                </div>
            }
            </div>
      </section>
    );
}