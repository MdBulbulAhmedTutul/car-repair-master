import { useEffect, useState } from "react";
import ProductsCard from "../ProductCard/ProductsCard";

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className="text-center mb-16">
                <h3 className="font-bold text-[#ff3438] mb-2">Popular Products</h3>
                <h2 className="text-3xl font-semibold mb-3">Browse Our Products</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which dont look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    products.map(product => <ProductsCard key={product.id} product={product}></ProductsCard>)
                }
            </div>
        </div>
    );
};

export default Products;