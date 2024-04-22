import {Link} from "react-router-dom";
import {SignUp} from "../components/SignUp.jsx";

const RegisterPage = () => {
    return (
        <div className="container mt-5">
            <h1 className="mb-4">Регистрация</h1>
            <SignUp/>
            <p>
                <Link to="/login" className="btn btn-primary">
                    Авторизация
                </Link>
            </p>
        </div>
    )
}

export default RegisterPage