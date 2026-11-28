class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
      let minL = Infinity;
      let profit = 0;
      for(let i=0; i<prices.length; i++){
         if(prices[i] < minL){
            minL = prices[i]
         }

         let temp = prices[i] - minL;
         if(temp > profit){
            profit = temp;
         }
      }
      return profit;
    }
}
