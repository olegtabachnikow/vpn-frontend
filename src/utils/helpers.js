export function parseTimestamp(timestamp) {
  const date = new Date(timestamp);
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}

export const getProfitValue = (main, secondary, count) =>
  main * count - secondary * count;

export function getTotalDiscountedValue(plan, months, userDisc) {
  if (userDisc) {
    return Math.round(plan * months - ((plan * months) / 100) * userDisc);
  } else {
    return Math.round(plan * months);
  }
}
