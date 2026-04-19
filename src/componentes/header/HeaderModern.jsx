import { useState, useEffect, useRef } from "react";

function HeaderModern() {
  const [visible, setVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="header-container" ref={headerRef}>
      <button className="header-btn" onClick={() => setVisible(!visible)}>☰</button>
      <nav className={`header-menu ${visible ? "show" : "hide"}`}>
        <ul>
          <li>Inicio</li>
          <li>Galería</li>
          <li>Hola</li>
        </ul>
      </nav>
    </div>
  );
}

export default HeaderModern;
