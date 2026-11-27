class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
      let maxLeft = [];
      let maxRight = [height];
      let minLeftAndRight = [];
      let sumAnswer = 0;
      
      let max = 0;
      for(let i=0; i<height.length; i++){
         maxLeft.push(max);
         if(height[i] > max) max = height[i];
      }
      
      max = 0;
      let point = height.length-1;
      for(let i=height.length-1; i>=0; i--){
         maxRight[point--] = max;
         if(height[i] > max) max = height[i];
      }

      for(let i=0; i<height.length; i++){
         minLeftAndRight[i] = Math.min(maxLeft[i], maxRight[i]);
      }

      for(let i=0; i<height.length-1; i++){
         if((minLeftAndRight[i]-height[i]) >= 0){
            sumAnswer += minLeftAndRight[i]-height[i];
         }
      }

      return sumAnswer;
    }
}
