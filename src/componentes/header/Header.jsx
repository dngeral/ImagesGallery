import { useState } from "react";

/* 
.header-container {
  display: flex;
  flex-direction: row;   
  align-items: center;   
  gap: 15px;
}

.header-active {
  transition: max-height 0.3s ease;
  overflow: hidden;
}

.header-oculto {
  max-height: 0;
}

.header-active ul {
  display: flex;
  flex-direction: row;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
}
*/

function Header() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="header-container">
        <button className="header-btn" onClick={() => setVisible(!visible)}>
          ☰
        </button>
        <nav className={`header-active ${visible ? "" : "header-oculto"}`}>
          <ul>
            <li>Inicio</li>
            <li>Galería</li>
            <li>Hola</li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
