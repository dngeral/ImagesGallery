import { useState } from 'react';
/* import Header from './componentes/header/Header'; */
import HeaderModern from './componentes/header/HeaderModern'
import GalleryPages from './paginas/GalleryPages';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderModern/>
      <GalleryPages/>
    </>
  )
}

export default App
