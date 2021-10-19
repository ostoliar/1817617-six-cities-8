import { CommentType } from '../../types/comment';
import CommentForm from '../comment-form/comment-form';
import UserComment from '../user-comment/user-comment';

type AppScreenProps = {
  currentComments: CommentType[];
}

function OfferComment({currentComments}: AppScreenProps): JSX.Element {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{currentComments.length}</span></h2>
      <ul className="reviews__list">
        {currentComments.map((comment) => <UserComment comment={comment} key={comment.id} />)}
      </ul>
      <CommentForm />
    </section>
  );
}

export default OfferComment;
