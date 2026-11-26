class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.trim();
        let i = 0;
        let j = s.length-1;
        while(i < j){
            let charAtI = s[i].toLowerCase();
            let charAtJ = s[j].toLowerCase();
            if(!((charAtI >= "a" && charAtI <= "z") || (charAtI >= "0" && charAtI <= "9"))){
                i++;
                continue;
            }
            if(!((charAtJ >= "a" && charAtJ <= "z") || (charAtJ >= "0" && charAtJ <= "9"))){
                j--;
                continue;
            }
            if(charAtI !== charAtJ){
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
}
