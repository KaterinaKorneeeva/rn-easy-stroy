import {NameSpace} from "./reducers/reducer";
import {createSelector} from 'reselect';
import {getCurrentCityOffers, sortOffersBy, adaptOffersToClient, adaptOfferToClient, adaptReviewsToClient} from "../utils";

export const getAuthorizationStatusSelector = (state) => state[NameSpace.USER].authorizationStatus;

export const getCurrentCitySelector = (state) => state[NameSpace.APP_STATE].currentCity;

export const getCitiesSelector = (state) => state[NameSpace.APP_STATE].cities;

export const getCurrentSortTypeSelector = (state) => state[NameSpace.APP_STATE].currentSortType;

export const getActiveCardSelector = (state) => state[NameSpace.APP_STATE].activeCard;

export const getAuthInfoSelector = (state) => state[NameSpace.USER].authInfo;

const getFavoriteOffers = (state) => state[NameSpace.API_DATA].favoriteOffers;


// export const getFavoriteOffersSelector = createSelector(
//     getFavoriteOffers,
//     (offers) => {
//       const tempArray = [];
//       const unicCities = Array.from(new Set(offers.map((offer) => offer.city.name)));
//       unicCities.forEach((city) => {
//         tempArray.push({
//           cityName: city,
//           offers: adaptOffersToClient(offers.filter((offer) => offer.city.name === city))
//         });
//       });
//       return tempArray;
//     }
// );
