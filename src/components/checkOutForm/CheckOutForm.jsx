import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const CheckOutForm = () => {
    const service = useLoaderData();
    // eslint-disable-next-line no-unused-vars
    const { title, _id, price, img } = service;
    const { user } = useContext(AuthContext);
    const handleCheckOut = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email;
        const price = form.price.value;
        const date = form.date.value;
        const booking = {
            customerName: name,
            email,
            img,
            date,
            price,
            service_id: _id,
            service: title
        }
        console.log(booking);
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire('Booking Successfull!')
                }
            })
    }
    return (
        <div className="max-w-5xl mx-auto bg-gray-200 p-10 rounded-xl">
            <form onSubmit={handleCheckOut}>
                <div className="flex items-center flex-col lg:flex-row">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name='date' placeholder="Date" className="input input-bordered" required />
                    </div>
                </div>
                <div className="flex items-center flex-col lg:flex-row">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' defaultValue={user?.email} placeholder="Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text">Due amount</span>
                        </label>
                        <input type="text" name='price' defaultValue={'$' + price} className="input input-bordered" required />
                    </div>
                </div>
                <input className="bg-[#ff3438] w-full mt-6 rounded-lg text-white font-bold px-4 py-2 cursor-pointer" type="submit" value="Check Out" />
            </form>
        </div>
    );
};

export default CheckOutForm;