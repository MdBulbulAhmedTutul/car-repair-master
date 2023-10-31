import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({children}) => {
    const  {user, loading} = useContext(AuthContext);

    if(loading){
        return <div className="radial-progress" style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" }}>70%</div>
    }



    if(user){
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoutes;