import './App.css';
import { useState } from 'react';
import BookDescription from './Componentes/Paginas/BookDescription';
import HomePage from './Componentes/Paginas/HomePage';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href={'/home'}>Home</a>
          </li>
        </ul>
      </nav>
      <div>
        <h1>APP</h1>
      </div>
    </>
  )
}

export default App
