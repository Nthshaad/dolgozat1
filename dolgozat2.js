function hatvanyoz(tomb, hatvany) {
  if (!Array.isArray(tomb) || typeof hatvany !== 'number') {
    return [];
  }
  let eredmeny = [];
  for (let i = 0; i < tomb.length; i++) {
    eredmeny.push(Math.pow(tomb[i], hatvany));
  }
  return eredmeny;
}