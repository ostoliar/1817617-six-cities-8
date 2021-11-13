import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {
  selectErrorLoadOfferComments,
  selectOfferComments
} from '../../store/reducer/data/selectors';
import {selectAuthorizationStatus} from '../../store/reducer/user/selectors';
import {CommentType} from '../../types/comment';
import UserCommentForm from '../user-comment-form/user-comment-form';
import UserComment from '../user-comment/user-comment';

const MAX_COUNT_COMMENTS = 10;

const sortUpDate = (commentA: CommentType, commentB: CommentType) =>
  Date.parse(commentB.date) - Date.parse(commentA.date);

function OfferComment(): JSX.Element {
  const authorizationStatus = useSelector(selectAuthorizationStatus);
  const offerComments = useSelector(selectOfferComments);
  const errorLoadOfferComments = useSelector(selectErrorLoadOfferComments);

  return (
    <section className="property__reviews reviews">
      {!errorLoadOfferComments && (
        <h2 className="reviews__title">
          Reviews &middot; {' '}
          <span className="reviews__amount">
            {offerComments.length}
          </span>
        </h2>
      )}
      <ul className="reviews__list">
        {offerComments
          .slice(0, MAX_COUNT_COMMENTS)
          .sort(sortUpDate)
          .map((comment) =>
            <UserComment comment={comment} key={comment.id} />)}
      </ul>
      {
        authorizationStatus === AuthorizationStatus.Auth
          ? <UserCommentForm />
          : (
            <span>Only registered users can add reviews {' '}
              {
                <Link style={{textDecoration: 'underline'}}to={AppRoute.SignIn}>
                  <span>Sign in</span>
                </Link>
              }
            </span>
          )
      }
    </section>
  );
}

export default OfferComment;
