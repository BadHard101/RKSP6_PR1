import {useDispatch} from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {Form} from "./Form.jsx";
import {useNavigate} from "react-router-dom";
import {setUser} from "../../../../store/slices/userSlice.jsx";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // {console.log(user.accessToken)}
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate('/');
            })
            .catch(() => {
                console.error;
                alert('Неверно')
            })
    }

    return (
        <Form
            title="Войти"
            handleClick={handleLogin}
        />
    )
}
export {Login}