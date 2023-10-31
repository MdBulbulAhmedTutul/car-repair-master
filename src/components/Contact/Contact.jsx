import { AiFillClockCircle } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiFillPhone } from 'react-icons/ai';
const Contact = () => {
    return (
        <div className='bg-black text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10 rounded-xl'>
            <div className='flex items-center'>
                <div>
                    <AiFillClockCircle className='text-3xl'></AiFillClockCircle>
                </div>
                <div className='ml-4'>
                    <p>We are open monday-friday</p>
                    <h2 className='text-xl font-semibold'>7:00 am - 9:00 pm</h2>
                </div>
            </div>
            <div className='flex items-center'>
                <div>
                    <AiFillPhone className='text-3xl'></AiFillPhone>
                </div>
                <div className='ml-4'>
                    <p>Have a question?</p>
                    <h2 className='text-xl font-semibold'>+2546 251 2658</h2>
                </div>
            </div>
            <div className='flex items-center'>
                <div>
                    <FaMapMarkerAlt className='text-3xl'></FaMapMarkerAlt>
                </div>
                <div className='ml-4'>
                    <p>Need a repair? our address</p>
                    <h2 className='text-xl font-semibold'>Liza Street, New York</h2>
                </div>
            </div>
        </div>
    );
};

export default Contact;