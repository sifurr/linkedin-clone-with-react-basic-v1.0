import WelcomeNavbar from "../../components/WelcomeNavbar/WelcomeNavbar";
import WelcomeSignIn from "../../components/WelcomeSignIn/WelcomeSignIn";
import bannerImg from '../../assets/images/wecomepage-img.svg'
import { Link } from "react-router-dom";

const Welcome = () => {
    return (
        <div>
            <div className="max-w-[1200px] mx-auto">
                <WelcomeNavbar></WelcomeNavbar>
                <div className="flex mt-20 gap-2">
                    <div className="w-1/2">
                        <h3 className="text-3xl lg:text-[56px] font-light lg:font-extralight mt-14 mb-12 text-[#8f5849c8]">Welcome to your  <br /> professional community </h3>
                        <div className="w-2/3">
                            <WelcomeSignIn></WelcomeSignIn>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <img src={bannerImg} alt="" />
                    </div>
                </div>
            </div>
            {/* explore */}
            <div className='bg-[#f3f2f0]'>
                <div className='max-w-[1200px] mx-auto'>
                    <div className="flex">
                        <div className="w-2/5">
                            <div className='text-5xl text-[#000000E6] font-extralight pt-20 space-y-4 mb-10'>
                                <p>Explore</p>
                                <p>collaborative</p>
                                <p>articles</p>
                            </div>
                            <p className='text-xl text-[#000000E6] font-light'>
                                We’re unlocking community knowledge in a new way. Experts add insights directly into each article, started with the help of AI.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-28 pl-10 pb-32 justify-center items-center w-3/5">
                            <Link to={'/'}
                                className="text-[#000000E6] font-medium text-lg border border-[#000000E6] py-3 px-6 hover:bg-[#605D5810] rounded-[50px]"
                            >
                                Marketing
                            </Link>
                            <Link to={'/'}
                                className="text-[#000000E6] font-medium text-lg border border-[#000000E6] py-3 px-6 hover:bg-[#605D5810] rounded-[50px]"
                            >
                                Public Administration
                            </Link>
                            <Link to={'/'}
                                className="text-[#000000E6] font-medium text-lg border border-[#000000E6] py-3 px-6 hover:bg-[#605D5810] rounded-[50px]"
                            >
                                Healthcare
                            </Link>
                            <Link to={'/'}
                                className="text-[#000000E6] font-medium text-lg border border-[#000000E6] py-3 px-6 hover:bg-[#605D5810] rounded-[50px]"
                            >
                                Engineering
                            </Link>
                            <Link to={'/'}
                                className="text-[#000000E6] font-medium text-lg border border-[#000000E6] py-3 px-6 hover:bg-[#605D5810] rounded-[50px]"
                            >
                                IT Services
                            </Link>
                            <Link to={'/'}
                                className="text-[#000000E6] font-medium text-lg border border-[#000000E6] py-3 px-6 hover:bg-[#605D5810] rounded-[50px]"
                            >
                                Sustainability
                            </Link>
                            <Link to={'/'}
                                className="text-[#000000E6] font-medium text-lg border border-[#000000E6] py-3 px-6 hover:bg-[#605D5810] rounded-[50px]"
                            >
                                Business Administration
                            </Link>
                            <Link to={'/'}
                                className="text-[#000000E6] font-medium text-lg border border-[#000000E6] py-3 px-6 hover:bg-[#605D5810] rounded-[50px]"
                            >
                                Telecommunications
                            </Link>
                            <Link to={'/'}
                                className="text-[#000000E6] font-medium text-lg border border-[#000000E6] py-3 px-6 hover:bg-[#605D5810] rounded-[50px]"
                            >
                                HR Management
                            </Link>
                            <Link to={'/'}
                                className="text-blue-700 font-medium text-lg border border-blue-700 py-3 px-6 hover:bg-[#605D5810] rounded-[50px]"
                            >
                                Show All
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Suggested Search */}
            <div>
                <div className='max-w-[1200px] mx-auto'>
                    <div className="flex">
                        <div className="w-2/5">
                            <div className='text-5xl text-[#000000E6] font-extralight pt-20 space-y-4 mb-10'>
                                <p>Find the right job or internship for you</p>
                            </div>
                        </div>
                        <div className="w-3/5 pt-14 pl-10 pb-32 ">
                            <h3 className="pb-2 font-semibold text-[#00000096] uppercase">SUGGESTED SEARCHES</h3>
                            <div className="flex flex-wrap gap-2 items-center">

                                <Link to={'/'}
                                    className="text-[#000000E6] font-medium text-lg border border-[#000000E6] py-3 px-6 hover:bg-[#605D5810]  rounded-[50px]"
                                >
                                    Engineering
                                </Link>
                                <Link to={'/'}
                                    className="text-[#000000E6] font-medium text-lg border border-[#000000E6] py-3 px-6 hover:bg-[#605D5810]  rounded-[50px]"
                                >
                                    Business Development
                                </Link>
                                <Link to={'/'}
                                    className="text-[#000000E6] font-medium text-lg border border-[#000000E6] py-3 px-6 hover:bg-[#605D5810]  rounded-[50px]"
                                >
                                    Finance
                                </Link>
                                <Link to={'/'}
                                    className="text-[#000000E6] font-medium text-lg border border-[#000000E6] py-3 px-6 hover:bg-[#605D5810]  rounded-[50px]"
                                >
                                    Administrative Assistant
                                </Link>
                                <Link to={'/'}
                                    className="text-[#000000E6] font-medium text-lg border border-[#000000E6] py-3 px-6 hover:bg-[#605D5810]  rounded-[50px]"
                                >
                                    Retail Associate
                                </Link>
                                <Link to={'/'}
                                    className="text-[#000000E6] font-medium text-lg border border-[#000000E6] py-3 px-6 hover:bg-[#605D5810]  rounded-[50px]"
                                >
                                    Customer Service
                                </Link>
                                <Link to={'/'}
                                    className="text-[#000000E6] font-medium text-lg border border-[#000000E6] py-3 px-6 hover:bg-[#605D5810]  rounded-[50px]"
                                >
                                    Operations
                                </Link>
                                <Link to={'/'}
                                    className="text-[#000000E6] font-medium text-lg border border-[#000000E6] py-3 px-6 hover:bg-[#605D5810]  rounded-[50px]"
                                >
                                    Information Technology
                                </Link>
                                <Link to={'/'}
                                    className="text-[#000000E6] font-medium text-lg border border-[#000000E6] py-3 px-6 hover:bg-[#605D5810]  rounded-[50px]"
                                >
                                    marketing
                                </Link>
                                <Link to={'/'}
                                    className="text-[#000000E6] font-medium text-lg border border-[#000000E6] py-3 px-6 hover:bg-[#605D5810]  rounded-[50px]"
                                >
                                    Human Resource
                                </Link>
                                <Link to={'/'}
                                    className="text-[#000000E6] font-medium text-lg border border-[#000000E6] py-3 px-6 hover:bg-[#605D5810]  rounded-[50px]"
                                >
                                Show More >
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;