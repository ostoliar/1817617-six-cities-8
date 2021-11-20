type OfferPropertyProps = {
  good: string;
}

function OfferProperty({good}: OfferPropertyProps): JSX.Element {
  return (
    <li className="property__inside-item">
      {good}
    </li>
  );
}

export default OfferProperty;
