/*
First, the absolute must-haves, in order:
*/
//Trees (especially Binary Search Trees)

/*
Big O Notation 
- system to determine how efficient code is in measuring the amount of computations code takes. 
- Faster & less memory use 
-measurement for how long code takes to execute by number of executions
-- Count number of simple operations 
--
Hash Tables
Object Oriented Design/Systems Design
Algorithms: Breadth First Search/Depth First Search, Binary Search, Merge Sort and Quicksort
Problem Analysis Methods
Brute Force
Divide and Conquer
Recursion
Dynamic Programming
Greedy Algorithms
All Topics to cover
(You'll need to to talk about how they're implemented and why you'd choose one implementation or data structure instead of another.)

General Topics
Recursion
Iterative Algorithm
Dynamic Programming
Pointers in C++
Big O, you must be able to derive the complexity without actually coding an algo.
Array, ArrayList, Dynamic Arrays, 2D Arrays, Vectors
Hashtable
Hashing Function
Collisions, Methods to avoid Collisions
Clustering in Hash-tables
Set, Hashset, Bags
LinkedList
Singly
Double
Circuler
Cycle Detection in Linked-List
Stack and Queues
Trees
Binary Tree
Binary Search Tree
Ternary Tree
Red Black Tree
AVL Tree
Tree Balancing
Minimum Spanning Tree
Tree Traversal
N-ary Tree
Trie Tree
Balanced Tree
Min/Max Heap
Graphs
Shortest path on unweighted Graph
Breadth First Search & Depth First Search
Paths
All pairs shortest path
Single Source Shortest path
Dijkstra
A*
Bellman Ford
Bit Manipulation
Regular Expressions
Basic Discrete Mathematics and Maths from CTCI Book
Operating System Concepts
Scheduling

Context Switching

Threads

Deadlocks

General Sorting and Searching
Sorting:
Bubble Sort
Quick Sort
Merge Sort
Radix Sort
Heap Sort
Insert Sort
Search :
Binary Search
You must know and discuss tradeoff of using them on different type of input data

Time Complexity of Sorts
Insert Sort -> O(n^2) [Insert into a new array at sorted position] [Better than selection sort]
Selection Sort -> O(n^2) [First loop to run n times and second to find the min and then swap at first loops index]
Bubble Sort -> O(n^2) use for loop and keep swapping between each pair of elements till list get sorted
Quick Sort -> O(n log n) Worst O(n^2) Take a pivot from middle using filter, sort left and right using recursive algos.
Merge Sort -> O(n log n) all cases, split array into two and use three while looped merge to combine
Heap Sort -> (n log n) use selection sort on a heap instead of an array
Counting Sort -> O(n+K) Create an array with 0s to Max number and fill it with occurrences and then add the previous index to current, at last just reduce the countArray to -1 and take the counting array element and place it in sorted array Got it? Of Course No
Radix Sort -> O(n+K) : Use counting sort to solve
Most importantly you'll need to be able to pick the right data structure and algorithm for a specific problem.

Test Cases
Edge case occurs at an extreme (maximum or minimum) operating parameter.
Corner case occurs outside of normal operating parameters, specifically when multiple environmental variables or conditions are simultaneously at extreme levels, even though each parameter is within the specified range for that parameter. (The "outside normal operating parameters" obviously means something like "outside typical combination of operating parameters", not strictly "outside allowed operating parameters". That is, you're still within the valid parameter space, but near its corner.)
Boundary case occurs when one of inputs is at or just beyond maximum or minimum limits.
Base case is where Recursion ends
*/
function addUpTo(n) {
    return n * (n+1) / 2;
}; 
