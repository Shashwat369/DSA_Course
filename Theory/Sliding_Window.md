
# Sliding Window

# Table of Contents

1. What is Sliding Window?
2. Why do we use it?
3. When should we use it?
4. Types of Sliding Window
5. Time Complexity
6. Working Principle
7. Visualization
8. Fixed Size Window
9. Variable Size Window
10. Examples
11. Common Patterns
12. Advantages
13. Disadvantages
14. Interview Questions
15. Tips to Identify Sliding Window Problems
16. Summary

---

# What is Sliding Window?

Sliding Window is an optimization technique used to solve problems involving arrays and strings by maintaining a window (continuous subarray or substring) instead of recalculating everything repeatedly.

Instead of checking every possible subarray (O(n²)), we slide a window across the array and update only the necessary values.

---

# Why do we use Sliding Window?

Suppose

```
Array

[2,1,5,1,3,2]
```

Find the maximum sum of every subarray of size 3.

Without Sliding Window

```
[2,1,5]
[1,5,1]
[5,1,3]
[1,3,2]
```

Each sum is calculated separately.

Time Complexity

```
O(n²)
```

Using Sliding Window

```
Window

[2,1,5]

↓

[1,5,1]

↓

[5,1,3]

↓

[1,3,2]
```

Only one element enters and one leaves.

Time Complexity

```
O(n)
```

---

# When should we use Sliding Window?

Use Sliding Window when:

- Array
- String
- Continuous Subarray
- Continuous Substring
- Maximum
- Minimum
- Longest
- Shortest
- Sum
- Average
- Count

Keywords

```
Continuous
Subarray
Substring
Window
Longest
Shortest
Maximum
Minimum
```

---

# Types of Sliding Window

There are two types.

---

# 1. Fixed Size Window

Window size never changes.

Example

```
k = 3

[2 1 5]
```

↓

```
[1 5 1]
```

↓

```
[5 1 3]
```

Used in

- Maximum Sum
- Average
- Count

---

# 2. Variable Size Window

Window size increases or decreases depending on the condition.

Example

```
Left      Right

↓

[a b c a b c b b]

        ↑
```

Used in

- Longest Substring
- Minimum Window
- Fruit Into Baskets
- Character Replacement

---

# Time Complexity

| Approach | Complexity |
|-----------|------------|
| Brute Force | O(n²) |
| Sliding Window | O(n) |

Space

```
O(1)
```

Sometimes

```
O(k)
```

if HashMap or Set is used.

---

# Working Principle

Window

```
Left

↓

[2 1 5 1 3 2]

      ↑

Right
```

Move Right

↓

Window expands

If condition breaks

↓

Move Left

Repeat

---

# Visualization

```
Initial

L

↓

[2 1 5 1 3 2]

R
```

Slide

```
    L

↓

[2 1 5 1 3 2]

      R
```

Slide

```
        L

↓

[2 1 5 1 3 2]

          R
```

Window keeps moving.

---

# Example 1

## Maximum Sum Subarray of Size K

Input

```
nums = [2,1,5,1,3,2]

k = 3
```

Subarrays

```
2+1+5=8

1+5+1=7

5+1+3=9

1+3+2=6
```

Answer

```
9
```

Python Code

```python
def max_sum(nums, k):

    window_sum = sum(nums[:k])

    max_sum = window_sum

    for i in range(k, len(nums)):

        window_sum += nums[i]

        window_sum -= nums[i-k]

        max_sum = max(max_sum, window_sum)

    return max_sum
```

Time

```
O(n)
```

---

# Example 2

## Maximum Average Subarray

```python
def max_average(nums, k):

    window = sum(nums[:k])

    ans = window

    for i in range(k, len(nums)):

        window += nums[i]

        window -= nums[i-k]

        ans = max(ans, window)

    return ans / k
```

---

# Example 3

## Longest Substring Without Repeating Characters

Input

```
abcabcbb
```

Answer

```
3

abc
```

Python

```python
def lengthOfLongestSubstring(s):

    left = 0

    seen = set()

    ans = 0

    for right in range(len(s)):

        while s[right] in seen:

            seen.remove(s[left])

            left += 1

        seen.add(s[right])

        ans = max(ans, right-left+1)

    return ans
```

Time

```
O(n)
```

---

# Example 4

## Minimum Size Subarray Sum

Input

```
target = 7

nums = [2,3,1,2,4,3]
```

Output

```
2

[4,3]
```

Python

```python
def minSubArrayLen(target, nums):

    left = 0

    total = 0

    ans = float('inf')

    for right in range(len(nums)):

        total += nums[right]

        while total >= target:

            ans = min(ans, right-left+1)

            total -= nums[left]

            left += 1

    return ans if ans != float('inf') else 0
```

---

# Example 5

## Fruit Into Baskets

```
Only 2 unique fruits allowed.
```

Sliding Window + HashMap

```
Apple Mango Mango Apple Orange

Window adjusts whenever
more than 2 fruits appear.
```

---

# Example 6

## Longest Repeating Character Replacement

LeetCode Hard Favorite

```
AABABBA

k = 1
```

Sliding Window + Frequency Array

---

# Dry Run

Input

```
nums

[2,1,5,1,3,2]

k=3
```

Window

```
[2,1,5]

sum=8
```

Slide

```
Remove 2

Add 1

New Window

[1,5,1]

sum=7
```

Slide

```
Remove 1

Add 3

Window

[5,1,3]

sum=9
```

Maximum

```
9
```

---

# Common Sliding Window Problems

Fixed Window

- Maximum Sum
- Average
- Count Negatives
- Count Distinct

Variable Window

- Longest Substring
- Minimum Window Substring
- Character Replacement
- Fruit Into Baskets
- Longest Ones
- Max Consecutive Ones

---

# Advantages

- O(n) solution
- Constant space
- Faster than nested loops
- Easy after practice
- Interview favorite

---

# Disadvantages

- Works only for continuous segments
- Window adjustment logic can be tricky
- Variable window problems are harder

---

# Difference Between Two Pointers and Sliding Window

| Two Pointers | Sliding Window |
|--------------|----------------|
| Two indexes | Two indexes + Window |
| Pair problems | Subarray/Substring |
| Sorted arrays | Continuous range |
| Move independently | Maintain window |

---

# Tips to Identify Sliding Window

If the question contains:

- Continuous
- Subarray
- Substring
- Maximum
- Minimum
- Longest
- Shortest
- Fixed Size
- Variable Size

Think

```
Sliding Window
```

---

# Popular Interview Questions

Easy

- Maximum Sum Subarray
- Maximum Average Subarray
- Contains Duplicate II

Medium

- Longest Substring Without Repeating Characters
- Fruit Into Baskets
- Permutation in String
- Longest Ones
- Minimum Size Subarray Sum

Hard

- Minimum Window Substring
- Sliding Window Maximum
- Subarrays With K Distinct
- Longest Repeating Character Replacement

---

# Cheat Sheet

```
Sliding Window

1. Fixed Window

Expand

Remove Left

Add Right

-------------------------

2. Variable Window

Expand Right

Condition Break

Shrink Left

Repeat

-------------------------

Time

O(n)

Space

O(1)

or

O(k)

Keywords

Continuous
Subarray
Substring
Longest
Shortest
Maximum
Minimum
```

---

# Summary

✅ Uses two pointers to maintain a continuous window.

✅ Optimizes O(n²) solutions to O(n).

✅ Best for arrays and strings.

✅ Two Types:

- Fixed Size Window
- Variable Size Window

✅ Frequently asked in coding interviews.

