import NavBar from "../Navbar/NavBar";
import CheckOutForm from "../checkOutForm/CheckOutForm";
import Footer from "../footer/Footer";

const CheckOut = () => {
    
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 mb-10">
                <NavBar></NavBar>
            </div>
            <h2>check out page</h2>
            <div>
                <CheckOutForm></CheckOutForm>
            </div>
            <div className="mt-16">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default CheckOut;