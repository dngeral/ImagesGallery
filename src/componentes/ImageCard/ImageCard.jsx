function ImageCard({imagen}){
  return(
    <div className="image-card">
      <img src="{imagen.url}" alt="{imagen.titulo}" />
      <p>{imagen.titulo}</p>
    </div>
  );
}

export default ImageCard;