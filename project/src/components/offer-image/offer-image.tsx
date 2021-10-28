type OfferImageProps = {
  images: string[];
}

function OfferImage({images}: OfferImageProps): JSX.Element {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.map((image) => (
          <div key={image} className="property__image-wrapper">
            <img className="property__image" src={image} alt="Studio" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfferImage;
