import About from "../About/About";
import Carosel from "../Carosel/Carosel";
import NavBar from "../Navbar/NavBar";

const Home = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 mb-10">
                <NavBar></NavBar>
            </div>
            <div className="max-w-7xl mx-auto px-4 mb-10">
                <Carosel></Carosel>
            </div>
            <div className="max-w-7xl mx-auto px-4 my-16">
                <About></About>
            </div>
        </div>
    );
};

export default Home;