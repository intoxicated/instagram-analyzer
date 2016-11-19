import { createSelector } from 'reselect';

/**
 * Direct selector to the searchResultPage state domain
 */
const selectSearchResultPageDomain = () => state => state.get('searchResultPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SearchResultPage
 */

const selectSearchResultPage = () => createSelector(
  selectSearchResultPageDomain(),
  (substate) => substate.toJS()
);

export default selectSearchResultPage;
export {
  selectSearchResultPageDomain,
};
