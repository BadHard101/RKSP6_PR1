import classes from './Prac4.module.css'
import Header from "../../Header/Header.jsx";

export default function Prac4() {

    return (
        <>
            <Header/>
            <div className={classes.prac3}>
                <h1>РКСП - Практическая работа №4</h1>
                <p>Приложение теперь работает <b>без перезагрузок страниц</b> при помощи "Link", в которые обернуты компоненты "Button"</p>
            </div>
        </>
    )
}