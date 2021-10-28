import { ChangeEvent } from 'react';

type RatingProps = {
  starNumber: string;
  title: string;
  onChangeRating: (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

function Rating({title, starNumber, onChangeRating}: RatingProps): JSX.Element {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={starNumber}
        id={`${starNumber}-stars`}
        type="radio"
        onChange={onChangeRating}
      />
      <label htmlFor={`${starNumber}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
}

export default Rating;
