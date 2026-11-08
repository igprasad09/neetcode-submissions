class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {

        HashMap<String, List> hashTable = new HashMap<>();

        for(String s : strs){
            //sorting
            char stringArray[] = s.toCharArray();
            Arrays.sort(stringArray);
            String newString = new String(stringArray);
            
            //hashing
            if(!hashTable.containsKey(newString)){
                hashTable.put(newString, new ArrayList<String>());
            }
            hashTable.get(newString).add(s);
        }

        List<List<String>> temp = new ArrayList<>();

        hashTable.forEach((keys, values)->{
            temp.add(values);
        });

        return temp;

    }
}
