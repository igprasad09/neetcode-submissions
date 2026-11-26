class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let temp = "";
        strs.map((str)=>{
            let strSize = str.length;
            temp += String(strSize);
            temp += "#";
            for(let i=0; i<strSize; i++){
                temp += str[i];
            }
        });
        return temp;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
       let result = [];
       for(let i=0; i<str.length; i++){
        let sizeString = "";

            // Read the length until #
            while (str[i] !== "#") {
                sizeString += str[i];
                i++;
            }

            let strSize = parseInt(sizeString);
          i++;

            let temp = "";
            let end = i + strSize;

            // Read the actual string
            while (i < end) {
                temp += str[i];
                i++;
            }

            result.push(temp);

            // Adjust i because the outer for-loop increments it
            i--;
       } 
       return result;
    }
}
