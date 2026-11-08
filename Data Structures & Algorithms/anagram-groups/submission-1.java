class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {

        HashMap<String, List<String>> hashTable = new HashMap<>();

        for(String s : strs){
            //counting
            int count[] = new int[26];
            for(int i=0; i<s.length(); i++){
                char ch = s.charAt(i);
                count[ch - 'a']++;
            }
            //converting in the string
            String newString = Arrays.toString(count);
            //hashing
            if(!hashTable.containsKey(newString)){
                hashTable.put(newString, new ArrayList<String>());
            }
            hashTable.get(newString).add(s);
        }

        List<List<String>> result = new ArrayList<>();
        hashTable.forEach((key, values)->{
             result.add(values);
        });

        return result;

    }
}
