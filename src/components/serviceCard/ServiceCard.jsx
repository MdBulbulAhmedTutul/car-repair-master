import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
const ServiceCard = ({ service }) => {
    // eslint-disable-next-line react/prop-types
    const {_id, img, price, title } = service;
    return (
        <div className="border-2 border-gray-300 p-4 rounded-lg">
            <img className="w-full h-[230px] rounded-lg" src={img} alt="" />
            <h2 className="my-2 text-xl font-semibold">{title}</h2>
            <p className='text-[#ff3438]'>Price: ${price}</p>
            <div className="mt-3 flex items-center justify-between">
                <Link to={`checkout/${_id}`}>
                    <button className="bg-[#ff3438] px-4 py-2 rounded-lg text-white">Booking Now</button>
                </Link>
                <AiOutlineArrowRight className='text-2xl text-[#ff3438]'></AiOutlineArrowRight>
            </div>
        </div>
    );
};

export default ServiceCard;