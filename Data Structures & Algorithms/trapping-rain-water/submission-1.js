class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
      let maxL = height[0];
      let maxR = height[height.length-1];
      let L = 1;
      let R = height.length-2;
      let sum = 0;

      while(L <= R){
         if(maxL <= maxR){
            if((maxL-height[L]) >= 0){
               sum += (maxL-height[L]);
            }

            if(height[L] > maxL){
               maxL = height[L];
            }
            L++;
         }else{
            if((maxR-height[R]) >= 0){
               sum += (maxR-height[R]);
            }

            if(height[R] > maxR){
               maxR = height[R];
            }
            R--;
         }
      }

      return sum;
    }
}
