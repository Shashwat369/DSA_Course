# Two Pointers

# Table of Contents

1. What is Two Pointers?
2. Why do we use it?
3. When should we use it?
4. Types of Two Pointers
5. Time Complexity
6. Working Principle
7. Visualization
8. Examples
9. Common Patterns
10. Interview Questions
11. Advantages
12. Disadvantages
13. Tips to Identify Two Pointer Problems
14. Summary

---

# What is Two Pointers?

Two Pointers is an algorithmic technique where we use **two variables (pointers/indexes)** to traverse a data structure (mostly arrays or strings).

Instead of using nested loops (O(n²)), two pointers often reduce the complexity to **O(n)**.

Think of it as two people walking on the same road from different directions or together.

---

# Why do we use Two Pointers?

Without Two Pointers:

```text
for i
    for j
        compare
```

Time Complexity:

```
O(n²)
```

Using Two Pointers:

```text
left
          right

Move only one pointer at a time.
```

Time Complexity:

```
O(n)
```

Huge performance improvement.

---

# When should we use Two Pointers?

Use this technique when:

- Array is sorted
- Need pair of values
- Need subarray
- Need substring
- Reverse array
- Remove duplicates
- Merge arrays
- Compare characters
- Sliding window problems

---

# Types of Two Pointers

There are mainly 3 types.

---

## 1. Opposite Direction

Pointers start from opposite ends.

```
0               n-1

L               R
↓               ↓

[1 2 3 4 5 6 7]
```

Mostly used in:

- Pair Sum
- Reverse Array
- Palindrome
- Container With Most Water

---

## 2. Same Direction

Both pointers move in the same direction.

```
Slow
↓

Fast
↓

[1 2 3 4 5]
```

Used for:

- Remove duplicates
- Remove elements
- Move zeros
- Linked List problems

---

## 3. Sliding Window

Both pointers maintain a window.

```
left        right

↓

[1 2 3 4 5 6]

        ↑
```

Used in:

- Longest substring
- Maximum sum subarray
- Minimum window
- Variable-size window

---

# Time Complexity

| Approach | Complexity |
|----------|------------|
| Nested Loops | O(n²) |
| Two Pointers | O(n) |

Space Complexity

```
O(1)
```

---

# Working Principle

Suppose

```
nums = [2,4,6,8,10]
target = 12
```

Initialize

```
left = 0
right = n-1
```

Current

```
2          10

sum = 12
```

Found answer.

---

Another example

```
nums = [1,2,4,6,9]

target = 10
```

Iteration 1

```
1      9

sum =10
```

Done.

---

Suppose

```
nums = [1,3,5,7,9]

target = 8
```

Iteration

```
1     9

sum=10

Too big

Move right--
```

Now

```
1   7

sum=8

Found
```

---

# Visualization

```
Array

0 1 2 3 4 5

1 2 3 4 5 6

L         R
```

If sum too small

```
L++
```

If sum too large

```
R--
```

Repeat until

```
L >= R
```

---

# Example 1

## Two Sum (Sorted Array)

Problem

Find two numbers whose sum equals target.

Example

```
nums = [2,4,6,8,10]

target = 14
```

Solution

```python
def two_sum(nums, target):
    left = 0
    right = len(nums)-1

    while left < right:

        current = nums[left] + nums[right]

        if current == target:
            return [left, right]

        elif current < target:
            left += 1

        else:
            right -= 1

    return []
```

Output

```
[1,4]
```

Time

```
O(n)
```

---

# Example 2

## Reverse Array

```
Input

[1,2,3,4,5]
```

Output

```
[5,4,3,2,1]
```

Code

```python
def reverse(arr):

    left = 0
    right = len(arr)-1

    while left < right:

        arr[left], arr[right] = arr[right], arr[left]

        left += 1
        right -= 1

    return arr
```

---

# Example 3

## Check Palindrome

Input

```
MADAM
```

Code

```python
def palindrome(s):

    left = 0
    right = len(s)-1

    while left < right:

        if s[left] != s[right]:
            return False

        left += 1
        right -= 1

    return True
```

Output

```
True
```

---

# Example 4

## Remove Duplicates from Sorted Array

Input

```
[1,1,2,2,3,4,4]
```

Code

```python
def remove_duplicates(nums):

    if not nums:
        return 0

    slow = 0

    for fast in range(1, len(nums)):

        if nums[fast] != nums[slow]:

            slow += 1
            nums[slow] = nums[fast]

    return slow + 1
```

Time

```
O(n)
```

---

# Example 5

## Move Zeroes

Input

```
[0,1,0,3,12]
```

Output

```
[1,3,12,0,0]
```

Code

```python
def move_zeroes(nums):

    slow = 0

    for fast in range(len(nums)):

        if nums[fast] != 0:

            nums[slow], nums[fast] = nums[fast], nums[slow]

            slow += 1

    return nums
```

---

# Common Patterns

## Pattern 1

Opposite Ends

```
L ---------- R
```

Problems

- Pair Sum
- Reverse
- Palindrome

---

## Pattern 2

Slow Fast

```
S

F
```

Problems

- Remove duplicates
- Linked List cycle
- Middle node

---

## Pattern 3

Sliding Window

```
Left

Right
```

Problems

- Longest substring
- Max sum
- Minimum window

---

# Real Life Example

Imagine two friends standing at opposite ends of a road.

```
A ---------------------- B
```

If they walk toward each other, eventually they meet.

Exactly the same concept is used in Two Pointers.

---

# Advantages

- Faster than nested loops
- O(n) solution
- Easy implementation
- Constant memory
- Frequently asked in interviews

---

# Disadvantages

- Mostly useful on sorted arrays
- Doesn't work for every problem
- Pointer movement logic can be tricky

---

# Tips to Identify Two Pointer Problems

Look for these keywords:

- Pair
- Sorted array
- Reverse
- Palindrome
- Remove duplicates
- Move zeroes
- Merge arrays
- Two Sum II
- Container
- Trapping Rain Water
- 3Sum
- 4Sum

If the problem says:

- sorted array
- find pair
- compare ends

Think:

```
Two Pointers
```

---

# Popular Interview Problems

Easy

- Two Sum II
- Reverse String
- Valid Palindrome
- Merge Sorted Array
- Remove Duplicates
- Move Zeroes

Medium

- 3Sum
- 4Sum
- Container With Most Water
- Sort Colors
- Partition Labels

Hard

- Trapping Rain Water
- Minimum Window Substring
- Sliding Window Maximum

---

# Comparison

| Brute Force | Two Pointers |
|-------------|--------------|
| O(n²) | O(n) |
| Nested loops | Two indexes |
| Slow | Fast |
| More comparisons | Fewer comparisons |
| Easy but inefficient | Efficient |

---

# Summary

✅ Uses two indexes.

✅ Mostly works on sorted arrays.

✅ Can reduce O(n²) to O(n).

✅ Common pointer movements:

```
Left++
```

```
Right--
```

```
Slow++
```

```
Fast++
```

---

# Revision Cheat Sheet

```
Two Pointers

1. Opposite Direction
   Left < Right

2. Same Direction
   Slow + Fast

3. Sliding Window
   Left + Right Window

Applications

✔ Pair Sum
✔ Reverse Array
✔ Palindrome
✔ Remove Duplicates
✔ Move Zeroes
✔ Merge Arrays
✔ 3Sum
✔ 4Sum
✔ Container With Most Water
✔ Trapping Rain Water

Time Complexity

O(n)

Space Complexity

O(1)
```