import * as actionTypes from "../actions/actionTypes";
var _ = require("lodash");

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT_TO_CART:
      if (!_.find(state, { id: action.product.id })) {
        return [...state, Object.assign({}, action.product)];
      } else {
        return [...state];
      }

    case actionTypes.REMOVE_PRODUCT_FROM_CART:
      return state.filter((data, i) => data.id !== action.id);
    default:
      return state;
  }
};
