import Button from "../Button/Button.jsx";
import {Link, useNavigate} from "react-router-dom";
import {pracs} from '../../data.js'
import classes from './Header.module.css'
import {useEffect, useState} from "react";
import {removeUser} from "../../store/slices/userSlice.jsx";
import {useDispatch} from "react-redux";
import {useAuth} from "../Pages/Prac6/hooks/use-auth.jsx";

export default function Header() {
    const [pracState, setPracState] = useState('')

    function handlePracChange(name) {
        setPracState(name)
    }


    // Prac6 AUTH
    const navigate = useNavigate();
    const {isAuth, email} = useAuth();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }
    }, [isAuth, navigate]);

    return isAuth ? (
        <header className={classes.header}>
            {
                pracs.map((prac, index) => (
                    <Link key={index} to={`${prac.path}`}>
                        <Button isActive={pracState === `${prac.name}`}
                                onClick={() => handlePracChange(prac.name)}
                        >{prac.name}</Button>
                    </Link>
                ))
            }

            {/* Prac6 AUTH*/}
            <button
                className="btn btn-danger"
                onClick={() => dispatch(removeUser())}
            >
                Log out from {email}
            </button>
        </header>
    ) : null;
}