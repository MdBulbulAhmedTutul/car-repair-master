import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className="text-center mt-[300px]">
            <progress className="progress w-56"></progress>
        </div>
    }



    if (user) {
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoutes;