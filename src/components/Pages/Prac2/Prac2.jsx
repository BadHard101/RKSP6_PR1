import {useState} from "react";
import photo from "../../../assets/photo1.jpg";
import ListItem from "../../ListItem.jsx";
import {items, skills} from "../../../data.js";
import Button from "../../Button/Button.jsx";
import classes from './Prac2.module.css'

export default function Prac2() {
    const [content, setContent] = useState('skill0')

    function handleClick(type) {
        setContent(type)
    }
    return (
        <div className={classes.prac2}>
            <h1>РКСП - Практическая работа №2</h1>
            <div>
                <img src={photo} className={classes.Photo} alt="Author Photo" />
                <div>
                    <ul className={classes.ul}>
                        <ListItem
                            title={items[0].title}
                            desc={items[0].desc}
                        ></ListItem>
                        <ListItem {...items[1]}></ListItem>
                        <ListItem {...items[2]}></ListItem>
                        <ListItem {...items[3]}></ListItem>
                    </ul>
                </div>
            </div>

            <div>
                <h3>Чему я научился?</h3>

                    <Button isActive={content === 'skill1'} onClick={() => handleClick('skill1')}>Приложение</Button>
                    <Button isActive={content === 'skill2'} onClick={() => handleClick('skill2')}>Компоненты</Button>
                    <Button isActive={content === 'skill3'} onClick={() => handleClick('skill3')}>Data.js</Button>
                    <Button isActive={content === 'skill4'} onClick={() => handleClick('skill4')}>Хук useState</Button>
                <p>{skills[content]}</p>
            </div>
        </div>
    )
}