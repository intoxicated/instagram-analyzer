/*
 *
 * SearchResultPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectSearchResultPage from './selectors';
import styles from './styles.css';

export class SearchResultPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.searchResultPage}>
      This is SearchResultPage container !
      </div>
    );
  }
}

const mapStateToProps = selectSearchResultPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultPage);
