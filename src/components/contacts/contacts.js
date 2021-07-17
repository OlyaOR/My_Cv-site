import './contacts.scss';

export default function Contacts() {
    return (
      <section className='contacts'>
        <h2>Contacts</h2>
        <div className='contacts_block'>
            <ul className='contacts_block__main'l>
                <li>Location: Republic of Belarus. Minsk.</li>
                <li>Phone: <a href="tel:+375292735778">+(375)29-273-57-78</a></li>
                <li>Email: olga.gavrilova.og94@gmail.com</li>
                <li><a href="https://rabota.by/resume/a315511aff08ea1d1b0039ed1f336f52516a53" target="blank">My CV on rabota.by</a> </li>
            </ul>
            <ul className='contacts_block__social-network'>
                <li>Github: <a href="https://github.com/OlyaOR" target="blank">https://github.com/OlyaOR</a></li>
                <li><a href="https://www.linkedin.com/in/olya-rozhkova-or" target="blank">LinkedIn</a></li>
                <li><a href="https://vk.com/olyaroa" target="blank">VKontakte</a></li>
                <li>Instagram:<a href="https://www.instagram.com/olya.rozhkova.or" target="blank">@olya.rozhkova.or</a></li>
            </ul>
            
        </div>
      </section>
    );
}

