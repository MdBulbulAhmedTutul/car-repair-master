import about1 from '../../assets/images/about_us/parts.jpg'
import about2 from '../../assets/images/about_us/person.jpg';
const About = () => {
    return (
        <div className="hero-content flex-col lg:flex-row">
            <div className='flex-1 relative'>
                <img src={about2} className="w-full rounded-xl " />
                <img className='absolute  -right-16 -bottom-16 w-[300px] rounded-xl border-2 border-white' src={about1} alt="" />
            </div>
            <div className='flex-1 lg:ml-20 sm:mt-24'>
                <h4 className='text-xl font-bold text-[#ff3438] mb-3'>About Us</h4>
                <h1 className="text-3xl mb-3 font-bold">We are qualified & of experience <br /> in this field</h1>
                <p className='mb-3'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                <button className="bg-[#ff3438] mt-4 px-4 py-2 text-white font-bold rounded-lg">Get more info</button>
            </div>
        </div>
    );
};

export default About;