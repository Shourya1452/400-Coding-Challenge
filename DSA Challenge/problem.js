const problems = [
    {
      id: 1,
      title: "Concatenation of Array",
      difficulty: "easy",
      category: "array",
      link: "https://leetcode.com/problems/concatenation-of-array/",
      description: "Concatenate an array with itself."
    },
    {
      id: 2,
      title: "Shuffle the Array",
      difficulty: "easy",
      category: "array",
      link: "https://leetcode.com/problems/shuffle-the-array/",
      description: "Shuffle an array by swapping elements based on the given indices."
    },
    {
      id: 3,
      title: "Kids With the Greatest Number of Candies",
      difficulty: "easy",
      category: "array",
      link: "https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/",
      description: "Determine which kids have the greatest number of candies after some extra candies are distributed."
    },
    {
      id: 4,
      title: "Number of Good Pairs",
      difficulty: "easy",
      category: "array",
      link: "https://leetcode.com/problems/number-of-good-pairs/",
      description: "Count the number of good pairs in an array, where a good pair is one where the numbers are equal and the indices are different."
    },
    {
      id: 5,
      title: "How Many Numbers Are Smaller Than the Current Number",
      difficulty: "easy",
      category: "array",
      link: "https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/",
      description: "For each number in the array, count how many numbers are smaller than it."
    },
    {
      id: 6,
      title: "Maximum and Minimum Element in an Array",
      difficulty: "easy",
      category: "array",
      link: "https://leetcode.com/problems/maximum-and-minimum-element-in-an-array/",
      description: "Find the maximum and minimum elements in an array."
    },
    {
      id: 7,
      title: "Reverse the Array",
      difficulty: "easy",
      category: "array",
      link: "https://leetcode.com/problems/reverse-the-array/",
      description: "Reverse the elements of the array in place."
    },
    {
      id: 8,
      title: "Contains Duplicate",
      difficulty: "easy",
      category: "array",
      link: "https://leetcode.com/problems/contains-duplicate/",
      description: "Check if an array contains any duplicates."
    },
    {
      id: 9,
      title: "Row with Max 1's",
      difficulty: "easy",
      category: "array",
      link: "https://practice.geeksforgeeks.org/problems/row-with-max-1s0023/1",
      description: "Find the row with the maximum number of 1's in a binary matrix."
    },
    {
      id: 10,
      title: "Build Array from Permutation",
      difficulty: "easy",
      category: "array",
      link: "https://leetcode.com/problems/build-array-from-permutation/",
      description: "Create a new array based on the given permutation of indices."
    },
    {
      id: 11,
      title: "Add to Array Form of Integer",
      difficulty: "easy",
      category: "array",
      link: "https://leetcode.com/problems/add-to-array-form-of-integer/",
      description: "Add a number to an array that represents a large integer."
    },
    {
      id: 12,
      title: "Count Inversions",
      difficulty: "medium",
      category: "array",
      link: "https://www.codingninjas.com/codestudio/problems/count-inversions_615",
      description: "Count the number of inversions in an array, where an inversion is when a larger number precedes a smaller one."
    },
    {
      id: 13,
      title: "Transpose Matrix",
      difficulty: "medium",
      category: "2D array",
      link: "https://leetcode.com/problems/transpose-matrix/",
      description: "Transpose the given matrix, i.e., convert rows to columns."
    },
    {
      id: 14,
      title: "Find the Duplicate Number",
      difficulty: "easy",
      category: "array",
      link: "https://leetcode.com/problems/find-the-duplicate-number/",
      description: "Find the duplicate number in an array where each number appears at least once."
    },
    {
      id: 15,
      title: "Merge Sorted Array",
      difficulty: "easy",
      category: "array",
      link: "https://leetcode.com/problems/merge-sorted-array/",
      description: "Merge two sorted arrays into one sorted array."
    },
    {
      id: 16,
      title: "Maximum Subarray",
      difficulty: "easy",
      category: "array",
      link: "https://leetcode.com/problems/maximum-subarray/",
      description: "Find the contiguous subarray that has the largest sum."
    },
    {
      id: 17,
      title: "Chocolate Distribution Problem",
      difficulty: "medium",
      category: "array",
      link: "https://www.geeksforgeeks.org/chocolate-distribution-problem/",
      description: "Distribute chocolates among students so that the difference between the maximum and minimum chocolates is minimized."
    },
    {
      id: 18,
      title: "Search in Rotated Sorted Array",
      difficulty: "medium",
      category: "array",
      link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
      description: "Search for an element in a rotated sorted array."
    },
    {
      id: 19,
      title: "Best Time to Buy and Sell Stock",
      difficulty: "easy",
      category: "array",
      link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
      description: "Find the maximum profit you can make by buying and selling stocks."
    },
    {
      id: 20,
      title: "Repeat and Missing Number Array",
      difficulty: "easy",
      category: "array",
      link: "https://leetcode.com/problems/repeat-and-missing-number-array/",
      description: "Find the missing and repeating number in an array."
    },
    // String 
    {
          id: 1,
          title: "Reverse Words in a String",
          difficulty: "medium",
          category: "strings",
          link: "https://leetcode.com/problems/reverse-words-in-a-string/",
          description: "Reverse the order of words in a given string, while preserving spaces."
        },
        {
          id: 2,
          title: "Check if the Sentence is Pangram",
          difficulty: "easy",
          category: "strings",
          link: "https://leetcode.com/problems/check-if-the-sentence-is-pangram",
          description: "Determine if a given sentence contains every letter of the alphabet at least once."
        },
        {
          id: 3,
          title: "Maximum Number of Words Found in Sentences",
          difficulty: "easy",
          category: "strings",
          link: "https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/",
          description: "Find the sentence with the maximum number of words from a given list of sentences."
        },
        {
          id: 4,
          title: "Valid Palindrome",
          difficulty: "easy",
          category: "strings",
          link: "https://leetcode.com/problems/valid-palindrome/",
          description: "Check if a string is a palindrome, considering only alphanumeric characters and ignoring case."
        },
        {
          id: 5,
          title: "Count the Number of Consistent Strings",
          difficulty: "easy",
          category: "strings",
          link: "https://leetcode.com/problems/count-the-number-of-consistent-strings/",
          description: "Count the number of consistent strings that can be formed from a given list of words and a set of allowed characters."
        },
        {
          id: 6,
          title: "Remove Consecutive Characters",
          difficulty: "easy",
          category: "strings",
          link: "",
          description: "Remove consecutive duplicate characters from a string."
        },
        {
          id: 7,
          title: "Longest Common Prefix",
          difficulty: "medium",
          category: "strings",
          link: "",
          description: "Find the longest common prefix string amongst an array of strings."
        },
        {
          id: 8,
          title: "Convert a Sentence into its Equivalent Mobile Numeric Keypad Sequence",
          difficulty: "medium",
          category: "strings",
          link: "",
          description: "Convert a given sentence into its corresponding mobile keypad sequence."
        },
        {
          id: 9,
          title: "Print all the Duplicates in the Input String",
          difficulty: "easy",
          category: "strings",
          link: "",
          description: "Print all characters that appear more than once in the input string."
        },
        {
          id: 10,
          title: "Valid Parentheses",
          difficulty: "medium",
          category: "strings",
          link: "https://leetcode.com/problems/valid-parentheses/",
          description: "Check if the parentheses in the string are valid, using a stack for matching pairs."
        },
        {
          id: 11,
          title: "Valid Anagram",
          difficulty: "easy",
          category: "strings",
          link: "https://leetcode.com/problems/valid-anagram/",
          description: "Check if two strings are anagrams of each other."
        },
    // Searching & Sorting  
    {
        id: 1,
        title: "Permute Two Arrays such that Sum of Every Pair is Greater or Equal to K",
        difficulty: "medium",
        category: "Searching & Sorting",
        link: "https://www.geeksforgeeks.org/permutation-of-two-arrays-such-that-sum-of-every-pair-is-greater-or-equal-to-k/",
        description: "Given two arrays, permute them such that the sum of every pair of elements is greater than or equal to a given value K."
      },
      {
        id: 2,
        title: "Counting Sort",
        difficulty: "medium",
        category: "Sorting",
        link: "https://www.geeksforgeeks.org/counting-sort/",
        description: "Implement counting sort to sort elements of an array based on their frequency."
      },
      {
        id: 3,
        title: "Find Common Elements in Three Sorted Arrays",
        difficulty: "medium",
        category: "Searching",
        link: "https://www.geeksforgeeks.org/find-common-elements-in-three-sorted-arrays/",
        description: "Find the common elements in three sorted arrays."
      },
      {
        id: 4,
        title: "Searching in an Array Where Adjacent Elements Differ by At Most K",
        difficulty: "medium",
        category: "Searching",
        link: "https://www.geeksforgeeks.org/searching-an-element-in-an-array-where-adjacent-elements-differ-by-at-most-k/",
        description: "Search for an element in an array where the difference between adjacent elements is at most K."
      },
      {
        id: 5,
        title: "Ceiling in a Sorted Array",
        difficulty: "medium",
        category: "Searching",
        link: "https://www.geeksforgeeks.org/ceiling-in-a-sorted-array/",
        description: "Find the ceiling of a given number in a sorted array. The ceiling is the smallest element that is greater than or equal to the given number."
      },
      {
        id: 6,
        title: "Pair with Given Difference",
        difficulty: "medium",
        category: "Searching",
        link: "https://www.geeksforgeeks.org/find-a-pair-with-the-given-difference/",
        description: "Given an array, find a pair of elements whose difference is equal to a given value."
      },
      {
        id: 7,
        title: "Print Subarrays with 0 Sum",
        difficulty: "medium",
        category: "array",
        link: "https://www.geeksforgeeks.org/find-subarrays-with-zero-sum/",
        description: "Print all subarrays of an array whose sum is zero."
      },

    // Binary Search
    
    {
        id: 1,
        title: "Binary Search",
        difficulty: "easy",
        category: "binary search",
        link: "https://leetcode.com/problems/binary-search/",
        description: "Implement binary search to find the target value in a sorted array."
      },
      {
        id: 2,
        title: "Find Peak Element",
        difficulty: "medium",
        category: "binary search",
        link: "https://leetcode.com/problems/find-peak-element/",
        description: "Find a peak element in an array where an element is considered a peak if it's greater than its neighbors."
      },
      {
        id: 3,
        title: "Find First and Last Position of Element in Sorted Array",
        difficulty: "medium",
        category: "binary search",
        link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
        description: "Find the first and last position of a target element in a sorted array."
      },
      {
        id: 4,
        title: "Chocolate Distribution Problem",
        difficulty: "medium",
        category: "binary search",
        link: "https://www.geeksforgeeks.org/chocolate-distribution-problem/",
        description: "Distribute chocolates to students such that the difference between the maximum and minimum number of chocolates given is minimized."
      },
      {
        id: 5,
        title: "Search in Rotated Sorted Array",
        difficulty: "medium",
        category: "binary search",
        link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
        description: "Search for a target element in a rotated sorted array."
      },

    // Map & Sets
    {
        id: 1,
        title: "Two Sum",
        difficulty: "easy",
        category: "map & sets",
        link: "https://leetcode.com/problems/two-sum/",
        description: "Find two numbers in the array that add up to a specific target."
      },
      {
        id: 2,
        title: "Jewels and Stones",
        difficulty: "easy",
        category: "map & sets",
        link: "https://leetcode.com/problems/jewels-and-stones/",
        description: "Determine how many characters in the string `stones` are also in the string `jewels`."
      },
      {
        id: 3,
        title: "Find Lucky Integer in an Array",
        difficulty: "easy",
        category: "map & sets",
        link: "https://leetcode.com/problems/find-lucky-integer-in-an-array/",
        description: "Find the lucky integer in an array, where the lucky integer is a number that appears exactly `n` times in the array."
      },

    //Stack & Queue
    
    {
        id: 1,
        title: "Implement two stacks in an Array",
        difficulty: "medium",
        category: "Stacks & Queues",
        link: "https://example.com", // Replace with actual link if available
        description: "Implement two stacks in a single array."
    },
    {
        id: 2,
        title: "Evaluation of Postfix Expression",
        difficulty: "medium",
        category: "Stacks & Queues",
        link: "https://example.com", // Replace with actual link if available
        description: "Evaluate a postfix expression using a stack."
    },
    {
        id: 3,
        title: "Implement Stack using Queues",
        difficulty: "medium",
        category: "Stacks & Queues",
        link: "https://example.com", // Replace with actual link if available
        description: "Implement a stack using two queues."
    },
    {
        id: 4,
        title: "Queue Reversal",
        difficulty: "medium",
        category: "Stacks & Queues",
        link: "https://example.com", // Replace with actual link if available
        description: "Reverse the elements of a queue using a stack."
    },
    {
        id: 5,
        title: "Implement Stack Queue using Deque",
        difficulty: "medium",
        category: "Stacks & Queues",
        link: "https://example.com", // Replace with actual link if available
        description: "Implement a queue and stack using a deque."
    },
    {
        id: 6,
        title: "Reverse first k elements of queue",
        difficulty: "medium",
        category: "Stacks & Queues",
        link: "https://example.com", // Replace with actual link if available
        description: "Reverse the first k elements of a queue."
    },
    {
        id: 7,
        title: "Design Stack with Middle Operation",
        difficulty: "hard",
        category: "Stacks & Queues",
        link: "https://example.com", // Replace with actual link if available
        description: "Design a stack with the ability to perform a middle operation."
    },
    {
        id: 8,
        title: "Infix to Postfix",
        difficulty: "medium",
        category: "Stacks & Queues",
        link: "https://example.com", // Replace with actual link if available
        description: "Convert an infix expression to postfix notation."
    },
    {
        id: 9,
        title: "Design and Implement Special Stack",
        difficulty: "hard",
        category: "Stacks & Queues",
        link: "https://example.com", // Replace with actual link if available
        description: "Design a stack that supports special operations."
    },
    {
        id: 10,
        title: "Longest Valid String",
        difficulty: "medium",
        category: "Stacks & Queues",
        link: "https://example.com", // Replace with actual link if available
        description: "Find the longest valid substring in a string of parentheses."
    },
    {
        id: 11,
        title: "Find if an expression has duplicate parenthesis",
        difficulty: "medium",
        category: "Stacks & Queues",
        link: "https://example.com", // Replace with actual link if available
        description: "Check if an expression contains duplicate parentheses."
    },
    {
        id: 12,
        title: "Stack Permutations",
        difficulty: "hard",
        category: "Stacks & Queues",
        link: "https://example.com", // Replace with actual link if available
        description: "Check if one array is a stack permutation of another."
    },
    {
        id: 13,
        title: "Count natural numbers whose permutation is greater than the number",
        difficulty: "medium",
        category: "Stacks & Queues",
        link: "https://example.com", // Replace with actual link if available
        description: "Count the natural numbers whose permutation is greater than the given number."
    },
    {
        id: 14,
        title: "Sort a stack using Recursion",
        difficulty: "hard",
        category: "Stacks & Queues",
        link: "https://example.com", // Replace with actual link if available
        description: "Sort a stack using recursion."
    },
    {
        id: 15,
        title: "Queue-based approach for first non-repeating character in a stream",
        difficulty: "medium",
        category: "Stacks & Queues",
        link: "https://example.com", // Replace with actual link if available
        description: "Use a queue-based approach to find the first non-repeating character in a stream."
    },
    {
        id: 16,
        title: "The Celebrity Problem",
        difficulty: "hard",
        category: "Stacks & Queues",
        link: "https://example.com", // Replace with actual link if available
        description: "Identify the celebrity in a party using a stack."
    },
    {
        id: 17,
        title: "Next Larger Element",
        difficulty: "medium",
        category: "Stacks & Queues",
        link: "https://example.com", // Replace with actual link if available
        description: "Find the next greater element for each element in an array."
    },
    {
        id: 18,
        title: "Distance of nearest cell",
        difficulty: "medium",
        category: "Stacks & Queues",
        link: "https://example.com", // Replace with actual link if available
        description: "Find the distance of the nearest cell with a specific value."
    },
    {
        id: 19,
        title: "Rotten Oranges",
        difficulty: "medium",
        category: "Stacks & Queues",
        link: "https://example.com", // Replace with actual link if available
        description: "Find the minimum time to rot all oranges."
    },
    {
        id: 20,
        title: "Next Smaller Element",
        difficulty: "medium",
        category: "Stacks & Queues",
        link: "https://example.com", // Replace with actual link if available
        description: "Find the next smaller element for each element in an array."
    },
    {
        id: 21,
        title: "Circular Tour",
        difficulty: "hard",
        category: "Stacks & Queues",
        link: "https://example.com", // Replace with actual link if available
        description: "Find the starting point for a circular tour of gas stations."
    },

    // Linked List

    {
        id: 1,
        title: "Reverse Linked List",
        difficulty: "medium",
        category: "linked list",
        link: "https://leetcode.com/problems/reverse-linked-list/",
        description: "Reverse a singly linked list."
      },
      {
        id: 2,
        title: "Linked List Cycle",
        difficulty: "medium",
        category: "linked list",
        link: "https://leetcode.com/problems/linked-list-cycle/",
        description: "Detect if a linked list has a cycle."
      },
      {
        id: 3,
        title: "Merge Two Sorted Lists",
        difficulty: "easy",
        category: "linked list",
        link: "https://leetcode.com/problems/merge-two-sorted-lists/",
        description: "Merge two sorted linked lists into a new sorted list."
      },
      {
        id: 4,
        title: "Delete without Head node",
        difficulty: "easy",
        category: "linked list",
        link: "https://leetcode.com/problems/delete-node-in-a-linked-list/",
        description: "Delete a given node from a linked list without the head node."
      },
      {
        id: 5,
        title: "Remove duplicates from an unsorted linked list",
        difficulty: "medium",
        category: "linked list",
        link: "https://leetcode.com/problems/remove-duplicates-from-unsorted-list/",
        description: "Remove duplicate nodes from an unsorted linked list."
      },
      {
        id: 6,
        title: "Sort a linked list of 0s, 1s, and 2s",
        difficulty: "medium",
        category: "linked list",
        link: "https://leetcode.com/problems/sort-list/",
        description: "Sort a linked list containing 0s, 1s, and 2s in linear time."
      },
      {
        id: 7,
        title: "Multiply two numbers represented by linked lists",
        difficulty: "medium",
        category: "linked list",
        link: "https://leetcode.com/problems/multiply-strings/",
        description: "Multiply two numbers represented by linked lists."
      },
      {
        id: 8,
        title: "Remove nth node from the end of the list",
        difficulty: "medium",
        category: "linked list",
        link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
        description: "Remove the nth node from the end of a linked list."
      },
      {
        id: 9,
        title: "Reorder List",
        difficulty: "medium",
        category: "linked list",
        link: "https://leetcode.com/problems/reorder-list/",
        description: "Reorder a linked list such that the first element is followed by the last, second by the second last, and so on."
      },
      {
        id: 10,
        title: "Detect and remove loop in a linked list",
        difficulty: "hard",
        category: "linked list",
        link: "https://leetcode.com/problems/linked-list-cycle-ii/",
        description: "Detect and remove the loop in a linked list."
      },
      {
        id: 11,
        title: "Get the Intersection Point of Two Linked Lists",
        difficulty: "medium",
        category: "linked list",
        link: "https://leetcode.com/problems/intersection-of-two-linked-lists/",
        description: "Find the intersection point of two linked lists."
      },
      {
        id: 12,
        title: "Flatten a linked list with next and child pointers",
        difficulty: "hard",
        category: "linked list",
        link: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/",
        description: "Flatten a multilevel doubly linked list."
      },
      {
        id: 13,
        title: "Linked List in Zig-Zag Fashion",
        difficulty: "medium",
        category: "linked list",
        link: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/",
        description: "Rearrange a linked list in a zigzag fashion."
      },
      {
        id: 14,
        title: "Reverse a Doubly Linked List",
        difficulty: "medium",
        category: "linked list",
        link: "https://leetcode.com/problems/reverse-doubly-linked-list/",
        description: "Reverse a doubly linked list."
      },
      {
        id: 15,
        title: "Delete nodes with greater value on the right side",
        difficulty: "medium",
        category: "linked list",
        link: "https://leetcode.com/problems/delete-nodes-which-have-a-greater-value-on-right-side/",
        description: "Delete all nodes which have a greater node value on the right side."
      },
      {
        id: 16,
        title: "Segregate even and odd elements in a linked list",
        difficulty: "medium",
        category: "linked list",
        link: "https://leetcode.com/problems/segregate-even-and-odd-elements-in-a-linked-list/",
        description: "Rearrange a linked list such that all even nodes are placed before odd nodes."
      },
      {
        id: 17,
        title: "Point to next higher value node in a linked list with an arbitrary pointer",
        difficulty: "medium",
        category: "linked list",
        link: "https://leetcode.com/problems/point-to-next-higher-value-node-in-a-linked-list/",
        description: "Create an arbitrary pointer that points to the next node with a higher value."
      },
      {
        id: 18,
        title: "Rearrange a given linked list in place",
        difficulty: "medium",
        category: "linked list",
        link: "https://leetcode.com/problems/rearrange-a-given-linked-list-in-place/",
        description: "Rearrange a given linked list in place such that odd indexed nodes appear first."
      },
      {
        id: 19,
        title: "Sort Biotonic Doubly Linked Lists",
        difficulty: "hard",
        category: "linked list",
        link: "https://leetcode.com/problems/sort-biotonic-doubly-linked-lists/",
        description: "Sort a biotonic doubly linked list."
      }
];
