import {createReducer} from '@reduxjs/toolkit';
import {StatusLoading, cities} from '../../../const';
import {
  clearCommentForm,
  fetchFavoriteFailure,
  fetchFavoriteRequest,
  fetchFavoriteSuccess,
  loadOfferByIdFailure,
  loadOfferByIdRequest,
  loadOfferByIdSuccess,
  loadOfferCommentsFailure,
  loadOfferCommentsRequest,
  loadOfferCommentsSuccess,
  loadOfferList,
  loadOffersFailure,
  loadOffersNearbyFailure,
  loadOffersNearbyRequest,
  loadOffersNearbySuccess,
  loadOffersRequest,
  loadOffersSuccess,
  postFavoriteFailure,
  postFavoriteRequest,
  postFavoriteSuccess,
  postOfferCommentFailure,
  postOfferCommentRequest,
  postOfferCommentSuccess
} from './actions';
import {OfferType} from '../../../types/offer';
import {CommentType} from '../../../types/comment';

export type dataType = {
  cities: string[],
  offers: OfferType[],
  offerById: OfferType | null,
  offersNearby: OfferType[],
  offerComments: CommentType[],
  commentLoading: boolean,
  favoriteOffers: OfferType[],
  fetchFavoriteLoading: boolean,
  favoriteLoading: boolean,
  isClearCommentForm: boolean,
  offersLoading: boolean,
  offerByIdLoading: StatusLoading,
  offersNearbyLoading: boolean,
  offerCommentsLoading: boolean,
  errorLoadOfferById: string | null,
  errorLoadOffersNearby: string | null,
  errorLoadOfferComments: string | null,
  errorPostOfferComment: string | null,
  errorFetchFavorite: string | null,
  errorPostFavorite: string | null,
  errorloadOffers: string | null,
  error: string | null,
};

const initialState = {
  cities: cities,
  offers: [],
  offerById: null,
  offersNearby: [],
  offerComments: [],
  commentLoading: false,
  favoriteOffers: [],
  fetchFavoriteLoading: false,
  favoriteLoading: false,
  isClearCommentForm: false,
  offersLoading: false,
  offerByIdLoading: StatusLoading.Idle,
  offersNearbyLoading: false,
  offerCommentsLoading: false,
  errorLoadOfferById: null,
  errorLoadOffersNearby: null,
  errorLoadOfferComments: null,
  errorPostOfferComment: null,
  errorFetchFavorite: null,
  errorPostFavorite: null,
  errorloadOffers: null,
  error: null,
};

const appData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOfferList, (state: dataType, action) => {
      const {offers} = action.payload;
      state.offers = offers;
    })
    .addCase(loadOffersRequest, (state: dataType, action) => {
      state.offersLoading = true;
    })
    .addCase(loadOffersSuccess, (state: dataType, action) => {
      state.offersLoading = false;
    })
    .addCase(loadOffersFailure, (state: dataType, action) => {
      const {error} = action.payload;
      state.offersLoading = false;
      state.errorloadOffers = error;
    })
    .addCase(loadOfferByIdRequest, (state: dataType, action) => {
      state.offerByIdLoading = StatusLoading.Loading;
    })
    .addCase(loadOfferByIdSuccess, (state: dataType, action) => {
      const {offer} = action.payload;
      state.offerById = offer;
      state.offerByIdLoading = StatusLoading.Succeeded;
    })
    .addCase(loadOfferByIdFailure, (state: dataType, action) => {
      const {error} = action.payload;
      state.offerByIdLoading = StatusLoading.Failed;
      state.errorLoadOfferById = error;
    })
    .addCase(loadOffersNearbyRequest, (state: dataType, action) => {
      state.offersNearbyLoading = true;
    })
    .addCase(loadOffersNearbySuccess, (state: dataType, action) => {
      const {offers} = action.payload;
      state.offersNearby = offers;
      state.offersNearbyLoading = false;
    })
    .addCase(loadOffersNearbyFailure, (state: dataType, action) => {
      const {error} = action.payload;
      state.offersNearbyLoading = false;
      state.errorLoadOffersNearby = error;
    })
    .addCase(loadOfferCommentsRequest, (state: dataType, action) => {
      state.offerCommentsLoading = true;
    })
    .addCase(loadOfferCommentsSuccess, (state: dataType, action) => {
      const {comments} = action.payload;
      state.offerComments = comments;
      state.offerCommentsLoading = false;
    })
    .addCase(loadOfferCommentsFailure, (state: dataType, action) => {
      const {error} = action.payload;
      state.offerCommentsLoading = false;
      state.errorLoadOfferComments = error;
    })
    .addCase(postOfferCommentRequest, (state: dataType, action) => {
      state.commentLoading = true;
    })
    .addCase(postOfferCommentSuccess, (state: dataType, action) => {
      const {comments} = action.payload;
      state.offerComments = comments;
      state.commentLoading = false;
      state.isClearCommentForm = true;
    })
    .addCase(postOfferCommentFailure, (state: dataType, action) => {
      const {error} = action.payload;
      state.commentLoading = false;
      state.errorPostOfferComment = error;
    })
    .addCase(clearCommentForm, (state: dataType) => {
      state.isClearCommentForm = false;
    })
    .addCase(fetchFavoriteRequest, (state: dataType, action) => {
      state.fetchFavoriteLoading = true;
    })
    .addCase(fetchFavoriteSuccess, (state: dataType, action) => {
      const {offers} = action.payload;
      state.favoriteOffers = offers;
      state.fetchFavoriteLoading = false;
    })
    .addCase(fetchFavoriteFailure, (state: dataType, action) => {
      const {error} = action.payload;
      state.fetchFavoriteLoading = false;
      state.errorFetchFavorite = error;
    })
    .addCase(postFavoriteRequest, (state: dataType) => {
      state.favoriteLoading = true;
    })
    .addCase(postFavoriteSuccess, (state: dataType, action) => {
      const {id, status} = action.payload;
      state.favoriteLoading = false;
      const favoriteOfferMainPage = state.offers.find((offer) => offer.id === id);
      if (favoriteOfferMainPage) {
        favoriteOfferMainPage.isFavorite = status;
      }
      if (state.offerById && state.offerById.id === id) {
        state.offerById.isFavorite = status;
      }
      const favoriteOfferIndex = state.favoriteOffers.findIndex((offer) => offer.id === id);
      if (favoriteOfferIndex !== -1) {
        state.favoriteOffers.splice(favoriteOfferIndex, 1);
      }
    })
    .addCase(postFavoriteFailure, (state: dataType, action) => {
      const {error} = action.payload;
      state.favoriteLoading = false;
      state.errorPostFavorite = error;
    });
});

export {appData};
