import { images } from '../data/images';
import Gallery from '../componentes/Gallery/Gallery';

function GalleryPages(){
  return (
    <div className='gallery-page'>
      <h1>Galería</h1>
      <Gallery images={images} />
      
    </div>
  );
}

export default GalleryPages;