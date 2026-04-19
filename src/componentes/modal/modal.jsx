import { useState, useEffect } from "react";

function Modal({ image, onClose, onNext, onPrev }) {

  if (!image) return null;

  // ✅ AHORA sí dentro del componente
  const [displayedImage, setDisplayedImage] = useState(image);
  const [fade, setFade] = useState(true);

  /* teclado */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  /* transición fade */
  useEffect(() => {
    if (!image) return;

    setFade(false);

    const timeout = setTimeout(() => {
      setDisplayedImage(image);
      setFade(true);
    }, 150);

    return () => clearTimeout(timeout);
  }, [image]);

  /* swipe móvil */
  let touchStartX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;

    if (touchStartX - touchEndX > 50) onNext();
    if (touchEndX - touchStartX > 50) onPrev();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <button className="close-btn" onClick={onClose}>✖</button>

      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button onClick={onPrev}>⬅</button>

        <img
          src={displayedImage?.url}
          alt={displayedImage?.title}
          className={`modal-image ${fade ? "fade-in" : "fade-out"}`}
        />

        <button onClick={onNext}>➡</button>

        <p>{displayedImage?.title}</p>
      </div>
    </div>
  );
}

export default Modal;