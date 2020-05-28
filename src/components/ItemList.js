import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';
import { createSelector } from 'reselect';

import { ItemsTree } from './TreeItems';

class ItemList extends Component {
  componentDidMount() {
    this.props.fetchData('http://5af1eee530f9490014ead8c4.mockapi.io/items');
  }

  render() {
    const { items, isLoading, sortedItems } = this.props;
    return isLoading ? (
      <div>Loading...</div>
    ) : (
      <div>
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.label}</li>
          ))}
        </ul>
        <ItemsTree items={sortedItems} />
      </div>
    );
  }
}

ItemList.propTypes = {
  fetchData: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  sortedItems: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

function formTree(items, id = 0) {
  return items
    .filter((item) => item.parent_id === id)
    .map((item) => ({ ...item, children: formTree(items, item.id) }));
}

const sortItems = createSelector(
  (state) => state.items,
  (items) => {
    return formTree(items);
  }
);

const mapStateToProps = (state) => {
  return {
    items: state.items,
    sortedItems: sortItems(state),
    isLoading: state.apiCallsInProgress > 0,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
