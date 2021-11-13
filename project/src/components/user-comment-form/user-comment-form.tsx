import {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {useParams} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import cn from 'classnames';
import StarRating from '../star-rating/star-rating';
import {valueRating} from '../../const';
import {commentAction} from '../../store/reducer/data/api-actions';
import LoaderButton from '../buttons-loader/buttons-loader';
import styles from './user-comment-form.module.css';
import {clearCommentForm} from '../../store/reducer/data/actions';
import {
  selectCommentLoading,
  selectIsClearCommentForm
} from '../../store/reducer/data/selectors';

type FormStateItemType = {
    value: string,
    isValid: boolean,
    minValue?: number,
    maxValue?: number,
};

function UserCommentForm(): JSX.Element {
  const [
    formState,
    setFormState,
  ] = useState<{[key: string]: FormStateItemType}>({
    rating: {
      value: '0',
      isValid: false,
    },
    review: {
      value: '',
      isValid: false,
      minValue: 50,
      maxValue: 300,
    },
  });
  const dispatch = useDispatch();
  const {id: idUrl} = useParams<{id: string}>();
  const commentLoading = useSelector(selectCommentLoading);
  const isClearCommentForm = useSelector(selectIsClearCommentForm);

  useEffect(() => {
    if (isClearCommentForm) {
      setFormState({
        ...formState,
        rating: {
          ...formState.rating,
          value: '0',
        },
        review: {
          ...formState.review,
          value: '',
        },
      });

      dispatch(clearCommentForm());
    }
  }, [dispatch, formState, isClearCommentForm]);

  const handleChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const {name, value} = evt.target;
    let isValid = false;
    if (
      name === 'review'
      && formState.review.maxValue
      && formState.review.minValue
    ) {
      isValid = Boolean(
        value.length >= formState.review.minValue
        && value.length < formState.review.maxValue,
      );
    } else {
      isValid = Boolean(value);
    }

    setFormState({
      ...formState,
      [name]: {
        ...formState[name],
        value,
        isValid,
      },
    });
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(commentAction({
      id: idUrl,
      rating: formState.rating.value,
      comment: formState.review.value,
    }));
  };

  const buttonCls = cn('reviews__submit form__submit button', [styles.buttonRelative]);

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.keys(valueRating).reverse().map((key) => (
          <StarRating
            starNumber={key}
            starActionNumber={formState.rating.value}
            title={valueRating[key]}
            key={key}
            onChangeRating={handleChange}
          />
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formState.review.value}
        onChange={handleChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className={buttonCls}
          type="submit"
          disabled={
            (!formState.rating.isValid || !formState.review.isValid)
            || commentLoading
          }
        >
          {
            commentLoading
              ?
              <>
                <span className={styles.loader}><LoaderButton /></span>
                <span className={styles.buttonText}>Loading...</span>
              </>
              : 'Submit'
          }
        </button>
      </div>
    </form>
  );
}

export default UserCommentForm;
