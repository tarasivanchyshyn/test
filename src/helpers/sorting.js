export const sortProducts = (a, b) => {
  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  } else {
    return a.count - b.count;
  }
};
