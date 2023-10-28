
const CheckOutForm = () => {
    return (
        <div className="max-w-5xl mx-auto bg-gray-200 p-10 rounded-xl">
            <form>
                <div className="flex items-center flex-col lg:flex-row">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                    </div>
                </div>
                <div className="flex items-center flex-col lg:flex-row">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                    </div>
                </div>
                <input className="bg-[#ff3438] w-full mt-6 rounded-lg text-white font-bold px-4 py-2 cursor-pointer" type="submit" value="Check Out" />
            </form>
        </div>
    );
};

export default CheckOutForm;