import About from "../About/About";
import Carosel from "../Carosel/Carosel";
import Contact from "../Contact/Contact";
import NavBar from "../Navbar/NavBar";
import Products from "../Products/Products";
import Service from "../Service/Service";
import Teams from "../Teams/Teams";
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
            <div className="max-w-7xl mx-auto px-4 my-24">
                <Contact></Contact>
            </div>
            <div className="max-w-7xl mx-auto px-4 my-24">
                <Products></Products>
            </div>
            <div className="max-w-7xl mx-auto px-4 my-24">
                <Teams></Teams>
            </div>
            <div className="mt-16">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;