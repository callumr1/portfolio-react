import callum from "../../../images/callum.jpg";
import callum2x from "../../../images/callum@2x.jpg";
import callum3x from "../../../images/callum@3x.jpg";
import './heroImage.scss';

function HeroImage(){
    return (
        <aside className="side">
            <figure id="picture" className="picture">
                <div className="picture-shadow"></div>
                <img id="pictureImage" className="picture-image" src={callum} srcSet={`
                        ${callum}   1x,
                        ${callum2x} 2x,
                        ${callum3x} 3x`} alt="Portrait of Callum Robertson" width="320" height="320" />
            </figure>
        </aside>
    )
}

export default HeroImage;