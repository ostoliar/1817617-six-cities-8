import { User } from './offer';

export type CommentType = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: User,
}
