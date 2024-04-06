import classes from './Prac3.module.css'

export default function Prac3() {

    return (
        <div className={classes.prac3}>
            <h1>РКСП - Практическая работа №3</h1>
            <p><b>Приложнение теперь работает по ссылкам</b> определенным в App.jsx при помощи "Routes" по следующим ссылкам:</p>
            <ul style={{fontSize: '1.8em'}}>
                <li>/</li>
                <li>/prac1</li>
                <li>/prac2</li>
                <li>/prac3</li>
            </ul>
        </div>
    )
}