import About from "../About/About";
import Carosel from "../Carosel/Carosel";
import NavBar from "../Navbar/NavBar";
import Service from "../Service/Service";
import Footer from "../footer/Footer";

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
            <div className="max-w-7xl mx-auto px-4 my-24">
                <Service></Service>
            </div>
            <div className="mt-16">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;