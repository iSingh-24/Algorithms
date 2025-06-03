const maxProfit = (prices) => {
  let maxProfit = 0;
  let lowest = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < prices.length; i++) {
    let currNum = prices[i];

    lowest = lowest > currNum ? currNum : lowest;

    maxProfit = maxProfit < currNum - lowest ? currNum - lowest : maxProfit;
  }

  return maxProfit;
};
