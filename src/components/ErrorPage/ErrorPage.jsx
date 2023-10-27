import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Opps sorry</h2>
            <Link to="/">
                <button>Back to Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;