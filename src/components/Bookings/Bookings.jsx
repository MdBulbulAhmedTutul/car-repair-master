import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import NavBar from "../Navbar/NavBar";
import BookingTable from "../bookingTable/BookingTable";
import Footer from "../footer/Footer";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([])
    const url = `http://localhost:5000/bookings?email=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 mb-10">
                <NavBar></NavBar>
            </div>
            <div className="max-w-7xl mx-auto px-4 my-16">
                {
                    bookings.map(siBook => <BookingTable key={siBook._id} siBook={siBook}></BookingTable>)
                }
            </div>
            <div className="">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Bookings;