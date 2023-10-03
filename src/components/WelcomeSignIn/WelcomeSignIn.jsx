import { FcGoogle } from 'react-icons/fc';

const WelcomeSignIn = () => {

    return (
        <>
            <div className="">
                <form>
                    <div>
                        <label htmlFor="email-or-phone">Email or phone</label>
                        <div>
                            <input className="p-4 w-full outline-none border-2 mt-2 rounded border-[#00000070]" type="email" name="email" id="email" />
                        </div>
                    </div>
                    <div className="mt-5">
                        <label htmlFor="password">Password</label>
                        <div className="relative">
                            <input className="p-4 w-full outline-none border-2 mt-2 rounded border-[#00000070]" type="password" id="password" name="password" />
                            <span className="absolute top-[25px] right-4">Show</span>
                        </div>
                    </div>
                    <div className="mt-5">
                        <p className="text-[#0a66c2] font-bold">Forgot password?</p>
                    </div>
                    <div className="mt-5">
                        <button type="submit" className="text-white bg-[linkedinColor] w-full bg-[#0a66c2] text-base p-4 rounded-[50px] font-semibold">Sign in</button>
                    </div>
                </form>
                <div className="flex flex-row justify-center items-center my-4">
                    <hr className="w-[45%]"></hr>
                    <span className="w-[10%] text-center">or</span>
                    <hr className="w-[45%]"></hr>
                </div>
                <button type="submit" className="bg-[linkedinColor] w-[95%] lex flex-col items-center justify-center border text-base rounded-[50px] font-semibold">
                    <div className='flex items-center justify-center gap-2 py-3'>
                        <FcGoogle className='text-2xl'></FcGoogle>
                        <span className='text-[#0000008d]'>
                            Continue with Google
                        </span>
                    </div>
                </button>
                <button type="submit" className="w-full border border-[#000000de] text-base mt-4 mb-6 rounded-[50px] font-semibold">
                    <div className=' py-3'>
                        <span className='text-[#000000de] text-xl'>
                            New to LinkedIn? Join now
                        </span>
                    </div>
                </button>                
            </div>
        </>
    );
};

export default WelcomeSignIn;