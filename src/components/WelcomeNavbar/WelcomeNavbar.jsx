import { NavLink } from 'react-router-dom';
import welcomeLogo from '../../assets/images/linkedin-logo-rectangle.png'

const WelcomeNavbar = () => {
    const navLinks = 
    <>
        <NavLink to={'/join-now'} className="capitalize text-base text-gray-700 font-bold">join now</NavLink>
        <NavLink 
        to={'/welcome-sign-in'} 
        className="capitalize text-base text-[#0a66c2] font-bold border border-[#0a66c2] py-3 px-6 rounded-[50px]">
            sign in</NavLink>
    </>
    return (
        <nav>
            <div className='flex justify-between items-center'>
                <div>
                    <img className='w-20' src={welcomeLogo} alt="linkedin logo for welcome page" />
                </div>
                <div className='flex gap-10 justify-between items-center'>
                    {navLinks}
                </div>
            </div>
        </nav>
    );
};

export default WelcomeNavbar;