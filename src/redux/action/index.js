//for add Item to Cart

export const addItem = (product) => {
  return {
    type: 'ADDITEM',
    payload: product
  };
};
//for Delete Item from Cart

export const delItem = (product) => {
  return {
    type: 'DELITEM',
    payload: product
  };
};
