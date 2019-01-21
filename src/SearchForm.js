import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchMovie } from './redux/actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchMovie: (title, releaseYear) => {
    dispatch(fetchMovie(title, releaseYear));
  },
});

class SearchForm extends PureComponent {

  static propTypes = {
    dispatchFetchMovie: PropTypes.func.isRequired,
  };

  onClick = () => {
    this.props.dispatchFetchMovie('Batman Begins', 2005);
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.onClick}>search</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);