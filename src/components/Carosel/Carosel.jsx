import banner1 from '../../assets/images/homeCarousel/1.jpg';
import banner2 from '../../assets/images/homeCarousel/2.jpg';
import banner3 from '../../assets/images/homeCarousel/3.jpg';
import banner4 from '../../assets/images/homeCarousel/4.jpg';
const Carosel = () => {
    return (
        <div className="carousel w-full">
            {/* slider 1 */}
            <div id="slide1" className="relative h-[550px] carousel-item w-full">
                <div className='absolute w-full h-full bg-black opacity-40 rounded-xl'></div>
                <img src={banner1} className="w-full rounded-xl" />
                <div className='absolute text-white left-10 top-[30%]'>
                    <h2 className='text-3xl font-semibold mb-4'>Affordable Price For <br /> Car Servicing</h2>
                    <p className='mb-4'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                    <div>
                        <button className='bg-[#ff3438] px-4 py-2 rounded-lg'>Discover</button>
                        <button className='bg-[#ff3438] px-4 py-2 rounded-lg ml-3'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex right-6 bottom-6">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle ml-4">❯</a>
                </div>
            </div>
            {/* slider 2 */}
            <div id="slide2" className="carousel-item relative h-[550px] w-full">
                <div className='absolute w-full h-full bg-black opacity-40 rounded-xl'></div>
                <img src={banner2} className="w-full rounded-xl" />
                <div className='absolute text-white left-10 top-[30%]'>
                    <h2 className='text-3xl font-semibold mb-4'>Affordable Price For <br /> Car Servicing</h2>
                    <p className='mb-4'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                    <div>
                        <button className='bg-[#ff3438] px-4 py-2 rounded-lg'>Discover</button>
                        <button className='bg-[#ff3438] px-4 py-2 rounded-lg ml-3'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex right-6 bottom-6">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle ml-4">❯</a>
                </div>
            </div>
            {/* slider 3 */}
            <div id="slide3" className="carousel-item relative h-[550px] w-full">
                <div className='absolute w-full h-full bg-black opacity-50 rounded-xl'></div>
                <img src={banner3} className="w-full rounded-xl" />
                <div className='absolute text-white left-10 top-[30%]'>
                    <h2 className='text-3xl font-semibold mb-4'>Affordable Price For <br /> Car Servicing</h2>
                    <p className='mb-4'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                    <div>
                        <button className='bg-[#ff3438] px-4 py-2 rounded-lg'>Discover</button>
                        <button className='bg-[#ff3438] px-4 py-2 rounded-lg ml-3'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex right-6 bottom-6">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle ml-4">❯</a>
                </div>
            </div>
            {/* slider 4 */}
            <div id="slide4" className="carousel-item relative h-[550px] w-full">
                <div className='absolute w-full h-full bg-black opacity-40 rounded-xl'></div>
                <img src={banner4} className="w-full rounded-xl" />
                <div className='absolute text-white left-10 top-[30%]'>
                    <h2 className='text-3xl font-semibold mb-4'>Affordable Price For <br /> Car Servicing</h2>
                    <p className='mb-4'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                    <div>
                        <button className='bg-[#ff3438] px-4 py-2 rounded-lg'>Discover</button>
                        <button className='bg-[#ff3438] px-4 py-2 rounded-lg ml-3'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex right-6 bottom-6">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle ml-4">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Carosel;