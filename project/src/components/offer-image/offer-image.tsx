type AppScreenProps = {
    image: string;
  }

function OfferImage({image}: AppScreenProps): JSX.Element {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={image} alt="Studio" />
    </div>
  );
}

export default OfferImage;

