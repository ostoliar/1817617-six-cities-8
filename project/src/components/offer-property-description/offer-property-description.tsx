type OfferPropertyDescriptionProps = {
    text: string;
  }

function OfferPropertyDescription({text}: OfferPropertyDescriptionProps): JSX.Element {
  return (
    <p className="property__text">
      {text}
    </p>
  );
}

export default OfferPropertyDescription;

