import Contacts from "../shared/contacts/contacts";
import './footer.scss';

function Footer(){

    return (
        <footer className="footer">
            <Contacts />
            <span>Want to get in contact with me? Email me at <a className="link" href="mailto:callumrobertson402@gmail.com">callum.robertson402@gmail.com</a>
            </span>
            <hr className="hr" />
            <span className="footer-text">Inspired by <a className="link" href="https://jgthms.com/css-in-44-minutes-ebook/">CSS in 44 minutes</a> by Jeremy Thomas</span>
            <span className="footer-text">Background Image by <a className="link" href="https://unsplash.com/photos/xC7Ho08RYF4">eberhard grossgasteiger</a> on <a className="link" href="https://unsplash.com/">Unsplash</a></span>
            <span className="footer-text">Icons by <a className="link" href="https://fontawesome.com/">Font Awesome</a></span>
        </footer>
    )
}

export default Footer;