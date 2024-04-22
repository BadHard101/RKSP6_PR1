import classes from './Prac6.module.css'
import Header from "../../Header/Header.jsx";

export default function Prac6() {

    return (
        <>
            <Header/>
            <div className={classes.prac6}>
                <h1>РКСП - Практическая работа №6</h1>
                <p>Приложение теперь требует <b>регистрации и авторизации</b>, а также обеспечивает аутентификацию
                    пользователя.</p>
                <p>Оно работатет через сервис <b>Google Firebase</b>, который реализует отраслевые стандарты, такие как
                    OAuth 2.0 и OpenID Connect</p>
            </div>
        </>
    )
}