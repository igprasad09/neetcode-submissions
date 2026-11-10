class Solution {
    public int[] productExceptSelf(int[] nums) {
        int prefix[] = new int[nums.length];
        int suffix[] = new int[nums.length];
        int totalPrefix = 1;
        int totalSuffix = 1;
        int endPointer = nums.length-1;

        for(int i=0; i < nums.length; i++){
            if(i == 0){
                prefix[i] = totalPrefix;
            }else{
                totalPrefix *= nums[i-1];
                prefix[i] = totalPrefix;
            }

            if(endPointer == nums.length-1){
                suffix[endPointer] = totalSuffix;
                endPointer--;
            }else{
                totalSuffix *= nums[endPointer+1];
                suffix[endPointer] = totalSuffix;
                endPointer--;
            }
        }

        int result[] = new int[nums.length];
        for(int i=0; i<nums.length; i++){
            result[i] = prefix[i] * suffix[i];
        }

        return result;

    }
}  
