class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        if(nums.length == 0) return 0;
        let count = 0;
        let starters = [];
        set.forEach((num)=>{
            if(!set.has(num-1)){
                starters.push(num);
            } 
        });
        starters.map((num)=>{
            let tempCount = 1;
            while(true){
                num = num + 1;
                if(set.has(num)){
                    tempCount++;
                }else{
                    break;
                }
            }
            if(tempCount > count) count = tempCount;
        });
        return count;
    }
}
