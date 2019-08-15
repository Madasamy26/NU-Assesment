import * as actionTypes from "./actionTypes";

export const addProduct = product => {
  return {
    type: actionTypes.ADD_PRODUCT_TO_CART,
    product: product
  };
};

export const deleteProduct = id => {
  return {
    type: actionTypes.REMOVE_PRODUCT_FROM_CART,
    id: id
  };
};
