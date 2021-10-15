type AppScreenProps = {
    text: string;
  }

function OfferPropertyDescription({text}: AppScreenProps): JSX.Element {
  return (
    <p className="property__text">
      {text}
    </p>
  );
}

export default OfferPropertyDescription;

