function szepTomb(tomb) {
  if (!Array.isArray(tomb)) {
    return false;
  }
  let elsoElem = typeof tomb[0];
  for (let i = 1; i < tomb.length; i++) {
    if (typeof tomb[i] !== elsoElem) {
      return false;
    }
  }
  return true;
}