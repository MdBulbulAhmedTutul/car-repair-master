import LoginForm from "../LoginForm/LoginForm";
import LoginNavbar from "../LoginNavbar/LoginNavbar";

const Login = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 mb-16">
                <LoginNavbar></LoginNavbar>
            </div>
            <div className="max-w-7xl mx-auto px-4 mt-16">
                <LoginForm></LoginForm>
            </div>
        </div>
    );
};

export default Login;