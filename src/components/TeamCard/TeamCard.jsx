import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
// eslint-disable-next-line react/prop-types
const TeamCard = ({team}) => {
    // eslint-disable-next-line react/prop-types
    const {img, title, desc} = team;

    return (
        <div className="border-2 border-gray-200 p-4 rounded-lg">
            <img className="rounded-lg w-full" src={img} alt="" />
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mb-4">{desc}</p>
            <div className="mt-4 flex items-center">
                <a href=""><BsFacebook className='text-3xl'></BsFacebook></a>
                <a href=""><BsTwitter className='ml-3 text-3xl'></BsTwitter></a>
                <a href=""><BsInstagram className='ml-3 text-3xl'></BsInstagram></a>
                <a href=""><BsLinkedin className='ml-3 text-3xl'></BsLinkedin></a>
            </div>
        </div>
    );
};

export default TeamCard;