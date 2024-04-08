import Button from "../Button/Button.jsx";
import {Link} from "react-router-dom";
import {pracs} from '../../data.js'
import classes from './Header.module.css'
import {useState} from "react";

export default function Header() {
    const [pracState, setPracState] = useState('')

    function handlePracChange(name) {
        setPracState(name)
    }

    return (
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
        </header>
    )
}