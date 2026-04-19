import ImageCard from "../ImageCard/ImageCard";
import { useState } from "react";
import Modal from "../modal/modal";

function Gallery({ images }) {
  if (!images) return <p>Cargando...</p>;
  /* const [selectedImage, setSelectedImage] = useState(null); */
  const [currentIndex, setCurrentIndex] = useState(null);

  return (
    <>
      <div className="gallery">
        {images.map((img, index) => (
          <div
            className="image-card"
            key={img.id}
            onClick={() => setCurrentIndex(index)}
          >
            <img src={img.url} alt={img.title} />
            {/* <p>{img.title}</p> */}
          </div>
        ))}
      </div>
      <Modal
        image={currentIndex !== null ? images[currentIndex] : null}
        onClose={() => setCurrentIndex(null)}
        onNext={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
        onPrev={() =>
          setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
        }
      />
    </>
  );
}

export default Gallery;
