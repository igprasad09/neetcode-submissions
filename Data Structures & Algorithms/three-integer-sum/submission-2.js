class Solution {
    threeSum(nums) {
        nums.sort((a, b) => a - b);
         let res = [];
      for(let i=0; i < nums.length-2; i++){
          if(i != 0 && nums[i-1] == nums[i]){
            continue;
          }
          let L = i+1;
          let R = nums.length-1;
          while(L < R){
            let ans = nums[i] + nums[L] + nums[R];
            if(ans == 0){
               res.push([nums[i], nums[L], nums[R]]);
               L++;
               R--;

               while(L < R && nums[L] == nums[L-1]){
                    L++;
                }

                while(L < R && nums[R] == nums[R+1]){
                    R--;
                }
            }else{
               if(ans < 0){
                  L++;
               }else{
                  R--;
               }
            }
          }
      }
      return res;
    }
}
