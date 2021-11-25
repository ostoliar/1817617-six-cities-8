import {createSelector} from 'reselect';
import {StatusLoading} from '../../../const';
import {CommentType} from '../../../types/comment';
import {OfferType} from '../../../types/offer';
import {State} from '../../../types/state';
import {NameSpace} from '../root-reducer';

export const selectCities = (state: State): string[] => (
  state[NameSpace.Data].cities
);
export const selectOffers = (state: State): OfferType[] => (
  state[NameSpace.Data].offers
);
export const selectOffersLoading = (state: State): boolean => (
  state[NameSpace.Data].offersLoading
);
export const selectErrorLoadOffers = (state: State): string | null => (
  state[NameSpace.Data].errorLoadOffers
);
export const selectOfferComments = (state: State): CommentType[] => (
  state[NameSpace.Data].offerComments
);
export const selectErrorLoadOfferComments = (state: State): string | null => (
  state[NameSpace.Data].errorLoadOfferComments
);
export const selectCommentLoading = (state: State): boolean => (
  state[NameSpace.Data].commentLoading
);
export const selectIsClearCommentForm = (state: State): boolean => (
  state[NameSpace.Data].isClearCommentForm
);
export const selectOfferByIdLoading = (state: State): StatusLoading => (
  state[NameSpace.Data].offerByIdLoading
);
export const selectOfferById = (state: State): OfferType | null => (
  state[NameSpace.Data].offerById
);
export const selectErrorLoadOfferById = (state: State): string | null => (
  state[NameSpace.Data].errorLoadOfferById
);
export const selectOffersNearby = (state: State): OfferType[] => (
  state[NameSpace.Data].offersNearby
);
export const selectFavoriteOffers = (state: State): OfferType[] => (
  state[NameSpace.Data].favoriteOffers
);

export const selectOfferByIdCombo = createSelector(
  [selectOfferByIdLoading, selectOfferById, selectErrorLoadOfferById],
  (offerLoading, offer, offerError) => ({
    offerLoading,
    offer,
    offerError,
  }),
);
