
class Solution {
    public int[] topKFrequent(int[] nums, int k) {

        HashMap<Integer, Integer> hashTable = new HashMap<>();

        // 1. Count frequency
        for (int i : nums) {
            hashTable.put(i, hashTable.getOrDefault(i, 0) + 1);
        }

        // 2. Create buckets
        List<Integer>[] count = new ArrayList[nums.length + 1];

        for (int i = 0; i < count.length; i++) {
            count[i] = new ArrayList<>();
        }

        // 3. Put elements into buckets based on frequency
        hashTable.forEach((key, value) -> {
            count[value].add(key);
        });

        // 4. Get top K frequent elements
        int result[] = new int[k];
        int point = 0;

        for (int i = count.length - 1; i > 0; i--) {

            if (count[i].size() > 0) {

                for (int j = 0; j < count[i].size(); j++) {

                    result[point] = count[i].get(j);
                    point++;

                    if (point == k) {
                        return result;
                    }
                }
            }
        }

        return result;
    }
}
