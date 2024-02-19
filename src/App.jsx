import { useState } from 'react'
import photo from "./assets/IMG_6765.svg"
import ListItem from "./components/ListItem"
import Button from './components/Button.jsx'
import { items, skills } from './data.js'
import './App.css'

function App() {
  const [content, setContent] = useState('Нажми на кнопку')

  function handleClick(type) {
    setContent(type)
  }
  return (
    <>
      <h1>РКСП - Практическая работа №2</h1>
      <div>
        <img src={photo} className="Photo" alt="Author Photo" />
        <div>
          <ul>
            <ListItem {...items[0]}></ListItem>
            <ListItem {...items[1]}></ListItem>
            <ListItem {...items[2]}></ListItem>
            <ListItem {...items[3]}></ListItem>
          </ul>
        </div>
      </div>
      
      <div>
        <h3>Чему я научился?</h3>

        <Button onClick={() => handleClick('skill1')}>Приложение</Button>
        <Button onClick={() => handleClick('skill2')}>Компоненты</Button>
        <Button onClick={() => handleClick('skill3')}>Data.js</Button>
        <Button onClick={() => handleClick('skill4')}>Хук useState</Button>

        <p>{skills[content]}</p>
      </div>
    </>
  )
}

export default App
