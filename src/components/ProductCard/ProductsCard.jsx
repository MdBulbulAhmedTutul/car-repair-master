import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProductsCard = ({ product }) => {
    // eslint-disable-next-line react/prop-types, no-unused-vars
    const { img, title, price, id } = product;
    return (
        <div className="bg-white border-2 border-gray-300 rounded-xl p-4">
            <img className="w-full h-[200px] bg-gray-100 rounded-xl mb-4" src={img} alt="" />
            <h2 className="text-xl font-semibold mb-3">{title}</h2>
            <p><span className="font-semibold mb-2">Price: $</span>{price}</p>
            <div className="rating rating-md">
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
            </div>
            <div>
                <Link>
                    <button className="bg-[#ff3438] px-4 py-2 rounded-lg text-white font-bold my-4">Buy Now</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductsCard;