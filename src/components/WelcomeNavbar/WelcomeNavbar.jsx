import { NavLink } from 'react-router-dom';
import welcomeLogo from '../../assets/images/linkedin-logo-rectangle.png'


const WelcomeNavbar = () => {
    const navLinks =
        <>
            <NavLink to={'/articles'}>
                <div className='flex flex-col justify-center items-center mr-7'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" fill="none" viewBox="0 0 20 17" focusable="false" className="lazy-loaded" aria-busy="false">
                        <path d="m11 9.5h5v1h-5v-1zm5-5h-12v3h12v-3zm-5 8h5v-1h-5v1zm9-12v13c0 1.657-1.343 3-3 3h-14c-1.657 0-3-1.343-3-3v-13h20zm-2 2h-16v11c0 0.552 0.449 1 1 1h14c0.551 0 1-0.448 1-1v-11zm-9 7h-5v3h5v-3z" fill="currentColor" fillOpacity=".9"></path>
                    </svg>
                    Articles
                </div>
            </NavLink>
            <NavLink to={'/people'}>
                <div className='flex flex-col justify-center items-center mr-7'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" fill="none" viewBox="0 0 20 17" focusable="false" className="lazy-loaded" aria-busy="false">
                        <path d="M9 14v6H0v-6c0-1.7 1.3-3 3-3h3c1.7 0 3 1.3 3 3Zm5.5-3c1.9 0 3.5-1.6 3.5-3.5S16.4 4 14.5 4 11 5.6 11 7.5s1.6 3.5 3.5 3.5Zm1 2h-2c-1.4 0-2.5 1.1-2.5 2.5V20h7v-4.5c0-1.4-1.1-2.5-2.5-2.5ZM4.5 0C2 0 0 2 0 4.5S2 9 4.5 9 9 7 9 4.5 7 0 4.5 0Z" fill="currentColor"></path>
                    </svg>
                    People
                </div>
            </NavLink>
            <NavLink to={'/learning'}>
                <div className='flex flex-col justify-center items-center mr-7'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" fill="none" viewBox="0 0 20 17" focusable="false" className="lazy-loaded" aria-busy="false">
                        <path fillRule="evenodd" clipRule="evenodd" d="M23 3H1a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1ZM2 19h20V5H2v14Z" fill="currentColor"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M4 9h6V7H4v2Zm0 4h6v-2H4v2Zm0 4h6v-2H4v2Zm-2 2h10V5H2v14Z" fill="currentColor" fillOpacity=".25"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M14 9h6V7h-6v2Zm0 4h6v-2h-6v2Zm6 4h-6v-2h6v2Z" fill="currentColor" fillOpacity=".6"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M10 7.534v8.933a.28.28 0 0 0 .439.23l6.433-4.436A.307.307 0 0 0 17 12a.305.305 0 0 0-.128-.26l-6.433-4.437a.28.28 0 0 0-.439.23Z" fill="currentColor"></path>
                    </svg>
                    Learning
                </div>
            </NavLink>
            <NavLink to={'/jobs'}>
                <div className='flex flex-col justify-center items-center mr-7'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" fill="none" viewBox="0 0 20 17" focusable="false" className="lazy-loaded" aria-busy="false">
                        <path d="M15 4V3c0-1.7-1.3-3-3-3H8C6.3 0 5 1.3 5 3v1H0v4c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V4h-5ZM7 3c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v1H7V3Zm10 9c1.2 0 2.3-.5 3-1.4V15c0 1.7-1.3 3-3 3H3c-1.7 0-3-1.3-3-3v-4.4c.7.9 1.8 1.4 3 1.4h14Z" fill="currentColor"></path>
                    </svg>
                    Jobs
                </div>
            </NavLink>
            <NavLink to={'/get-the-app'}>
                <div className='flex flex-col justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 20 17" id="laptop-medium" data-supported-dps="24x24" fill="currentColor" focusable="false" className="lazy-loaded text" aria-busy="false">
                        <path d="M21 17V8c0-1.66-1.34-3-3-3H6C4.34 5 3 6.34 3 8v9H1v1c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-1h-2zM11 6h2v1h-2V6zm8 11h-5c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1H5V9c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v8z"></path>
                    </svg>
                    Get the app
                </div>
            </NavLink>
            <NavLink to={'/welcome-register'} className="capitalize text-base py-3 px-6 text-gray-700 hover:bg-[#3838380f] font-semibold rounded-[50px]">join now</NavLink>
            <NavLink
                to={'/welcome-sign-in'}
                className="capitalize text-base text-[#0a66c2] font-semibold border border-[#0a66c2] py-3 px-6 rounded-[50px] hover:bg-blue-50 hover:text-black">
                sign in</NavLink>
        </>
    return (
        <nav>
            <div className='flex justify-between items-center'>
                <div>
                    <img className='w-20' src={welcomeLogo} alt="linkedin logo for welcome page" />
                </div>
                <div className='flex gap-3 justify-between items-center'>
                    {navLinks}
                </div>
            </div>
        </nav>
    );
};

export default WelcomeNavbar;