class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> hashTable = new HashMap<>();
        for(int i=0; i<nums.length; i++){
            int result = target - nums[i];
            if(hashTable.containsKey(result)){
                return new int[]{hashTable.get(result), i};
            }
        hashTable.put(nums[i], i);
        }
        return new int[]{};
    }
}
