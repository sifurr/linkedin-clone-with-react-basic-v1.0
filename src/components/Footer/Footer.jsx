import { Link } from "react-router-dom";
import footerLogo from "../../assets/images/linkedin-logo-rectangle.png"


const Footer = () => {
    return (
        <div className="">
            <ul className="grid grid-cols-2">
                <li className="flex gap-3">
                    <img className="h-[15px]" src={footerLogo} alt="" />
                    <span>&copy; 2203 </span>
                </li>

                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Accessibility</Link>
                </li>
                <li>
                    <Link to="/">User Agreement
                    </Link>
                </li>
                <li>
                    <Link to="/">Privacy Policy</Link>
                </li>
                <li>
                    <Link to="/">Cookie Policy</Link>
                </li>
                <li>
                    <Link to="/">Copyright Policy</Link>
                </li>
                <li>
                    <Link to="/">Brand Policy</Link>
                </li>
                <li>
                    <Link to="/">Guest Controls</Link>
                </li>
                <li>
                    <Link to="/">Community Guidelines</Link>
                </li>
                <li>
                    <Link to="/">Languages </Link>
                </li>
            </ul>
        </div>
    );
};

export default Footer;