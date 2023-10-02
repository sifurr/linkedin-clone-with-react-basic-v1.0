

const WelcomeSignIn = () => {
    return (
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
    );
};

export default WelcomeSignIn;