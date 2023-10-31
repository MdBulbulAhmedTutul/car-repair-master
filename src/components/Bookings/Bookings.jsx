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

    const handleDelete = id => {
        const proceed = confirm('are soure delete');
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfull');
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining)
                    }
                })
        }
    }

    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 mb-10">
                <NavBar></NavBar>
            </div>
            <div className="max-w-7xl mx-auto px-4 mb-24 mt-[100px]">
                {
                    bookings.map(siBook =>
                        <BookingTable
                            key={siBook._id}
                            siBook={siBook}
                            handleDelete={handleDelete}
                            >
                        </BookingTable>)
                }
            </div>
            <div className="">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Bookings;