import { ChangeEvent } from 'react';

type AppScreenProps = {
  starNumber: number;
  onChangeRating: (evt: ChangeEvent<HTMLInputElement>) => void;
}

function Rating({starNumber, onChangeRating}: AppScreenProps): JSX.Element {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={starNumber}
        id={`${starNumber}-stars`}
        type="radio"
        onChange={(evt: ChangeEvent<HTMLInputElement>) => onChangeRating(evt)}
      />
      <label htmlFor={`${starNumber}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default Rating;
