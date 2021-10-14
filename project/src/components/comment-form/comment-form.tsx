import { ChangeEvent, FormEvent, useState } from 'react';
import Rating from '../rating/rating';
import { STARS_COUNT_RATING } from '../../const';

function CommentForm(): JSX.Element {
  const [comment, setComment] = useState({
    rating: '0',
    review: '',
  });

  const {review} = comment;

  const onChangeComment = (evt: ChangeEvent<{name: string, value: string}>) => {
    const {name, value} = evt.target;

    setComment((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {(Array.from({length: STARS_COUNT_RATING}, (_, number) => number + 1)).reverse().map((item) => <Rating starNumber={item} onChangeRating={onChangeComment} key={item}/>)}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        onChange={(evt: ChangeEvent<HTMLTextAreaElement>) => onChangeComment(evt)}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit">Submit</button>
      </div>
    </form>
  );
}

export default CommentForm;
