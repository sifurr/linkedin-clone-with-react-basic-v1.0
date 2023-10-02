import { Outlet } from "react-router-dom";
import Welcome from "../../pages/Welcome/Welcome";

const Home = () => {
    return (
        <div className="mx-4 mt-2">
            <Welcome></Welcome>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;