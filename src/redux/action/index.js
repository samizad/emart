//for add Item to Card

export const addCard = (product) => {
  return {
    type: 'ADDITEM',
    payload: product
  };
};
//for Delete Item from Card

export const delCard = (product) => {
  return {
    type: 'DELITEM',
    payload: product
  };
};
