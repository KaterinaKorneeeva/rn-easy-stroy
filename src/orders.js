export const statusNameById = (statuses, id) => {
   return statuses.find(((item) => item.id === id));
};

export const sellerInfoById = (sellers, id) => {
   return sellers.find(((item) => item.id === id));
};