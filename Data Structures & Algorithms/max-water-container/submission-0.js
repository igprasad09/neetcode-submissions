class Solution {

    maxArea(heights) {
        let L = 0;
        let R = heights.length-1;
        let most_water = 0;
        while(L < R){
            let width = R - L;
            let hight = Math.min(heights[L], heights[R]);
            if((width*hight) > most_water){
                most_water = width * hight;
                if(heights[L] < heights[R]){
                    L++;
                }else{
                    R--;
                }
            }else{
                if(heights[L] < heights[R]){
                    L++;
                }else{
                    R--;
                }
            }
        }
        return most_water;
    }

}
