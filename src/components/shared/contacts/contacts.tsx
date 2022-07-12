import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faCodepen, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import './contacts.scss';

function Contacts(){

    const githubLink: string = "https://github.com/callumr1";
    const linkedinLink: string = "https://www.linkedin.com/in/callum-robertson1/";
    const codepenLink: string = "https://codepen.io/callumr1/";
    const stackoverflowLink: string = "https://stackoverflow.com/users/9724409/callumr?tab=profile";

    const contacts: ContactProps[] = [
        {
            link: githubLink,
            icon: faGithub
        },
        {
            link: linkedinLink,
            icon: faLinkedin
        },
        {
            link: codepenLink,
            icon: faCodepen
        },
        {
            link: stackoverflowLink,
            icon: faStackOverflow
        }
    ]

    return (
        <div className="contact">
            <ul className="social">
                {contacts.map(contact => {
                    return <Contact {...contact} />
                })}
            </ul>
        </div>
    )
}

interface ContactProps {
    link: string;
    icon: IconDefinition;
}

function Contact(props: ContactProps){
    return (
        <li>
            <a href={props.link} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={props.icon} />
            </a>
        </li>
    )
}

export default Contacts;