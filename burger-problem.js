function solution(ingredient) {
  let burger = 0;
  for (let i = 3; i < ingredient.length; i++) {
    if (ingredient.length > 3) {
      if (
        ingredient[i] === 1 &&
        ingredient[i - 1] === 3 &&
        ingredient[i - 2] === 2 &&
        ingredient[i - 3] === 1
      ) {
        burger++;
        ingredient.splice(i - 3, 4);
        i -= 4
      }
    }

  }
  return burger;
}