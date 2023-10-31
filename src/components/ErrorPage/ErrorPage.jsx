import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="bg-gray-200 p-10 rounded-xl w-[500px] mx-auto mt-[300px]">
            <h2 className="text-3xl text-center font-semibold">Opps sorry</h2>
            <p className="text-center my-2">Content Unavilabe</p>
            <div className="justify-center">
                <Link className="flex justify-center" to="/">
                    <button className="text-white text-center bg-[#ff3438] px-4 py-3 rounded-lg">Back to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;