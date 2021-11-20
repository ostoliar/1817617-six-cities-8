type OfferPropertyDescriptionProps = {
  text: string;
}

function OfferPropertyDescription({text}: OfferPropertyDescriptionProps): JSX.Element {
  return (
    <p
      className="property__text"
      data-testid="propertyText"
    >
      {text}
    </p>
  );
}

export default OfferPropertyDescription;
