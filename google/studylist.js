/*
Linear data structures - Array, linked lists, STacks, Queues 
Non-linear - trees binary tree, graphs 
Arrays ---- (size is fixed ) must specify array size - in many languages - specify memory
Linked Lists-can grow not continguous not in order has element we want to store plus a pointer to the subsequent element in list
but price paid is random access - to access must traverse entire list until you get the element. 9 from node to node 
look up is O(n) - 
HASH TABLES==> - used when speedy insertion, deletion, and lookup elements is priority - constant time 
hash table is array with a hash function - hash function takes piece of data as input and outputs integer (hash value);
hash value function takes key - puts out hash vaulue- value maps key to index in the table - 
use hash function where to store a given key, and use it to see where to search for a key - must be consistent
can store data of all types. 
but careful of collission - the result of 2 keys hashing to the same index. 
-- 2 ways to resolve collission - linear probing and separate chaining
linear probing - if key is hashed to same index of a previously stored value, it gets hashed to the next avaialable slot in
the table
but once a collision occurs you significantly increase chances another collision will occur
in the same area, this is called Clustering a problem with linear probing
this causes lookup,insertin,deletion to devolved to O(n);
SEPARATE CHAINING -
talbe is array of points to linked lists
inserted in constant time for instertion when collision happens
look up time then is O(n/k); where k is size of the hash table. so just O(n);
but still improvement 
-- hash function - 1. should make use of all info provided by a key, to maximize hash values.
2. uniformly distributed output across table -reduce length of list if collisions
3. maps similar keys to very diff hash values - makes collisions less likely. 
-- uses only very fast operaitons - use simple quick operations to minimize run time

//========================================
Runtime analysis allows us to measure how efficient code is. Runtime anlaysis is generally done using Big-O notation, which represents how fast code will run in the worst case.
Big O Notation  (Analyze performance) Big O, you must be able to derive the complexity without actually coding an algo.
- system to determine how efficient code is in measuring the amount of computations code takes. 
- Faster & less memory use 
-measurement for how long code takes to execute by number of executions (how does time grow as input grows); 
relationship between input and time it takes to run the operations. (TIME COMPLEXITY) 
-- Count number of simple operations 
--O(n) = linear
-- O(n^2) quadratic
-- O(1) - constant
-- 
get rid of the constants - imagine it into infinity what will it look like. 
--1. arithmetic operations are constant
2. variable assignment is constant
3. accessing elmeent in array (indx) or object (key) is constant
4. in a loop, complexity is the length of the loop times the complexity of whatever happens inside of the loop
--
1. diff steps get added O(a+b) 
2.Drop constants  
    When we drop the constant coefficients and the less significant terms, we use asymptotic notation.
3. diff inputs means diff variables not O(n^2) but O(a*b) for 2 diff arrays
4. drop non-dominate terms - 
worst -> best
O(n^2) -> O(nlogn) -> O(n) -> O(logn) -> O(1)
SPACE COMPLEXITY - auxiliary space complexity - in the algo
1. most primitives are constant space - (bool, num, null, undefined)
2. string require O(n) -string length
3. reference types usually O(n) n is lenght of array or num of object keys
log is the inverse of exponentiation 
log2(8) = 3; -log of base 2 of 8 = 3, because 2 to the 3rd (2^3) = 8; 
log2(value) = exponent || 2^exponent = value
logs need to have a base 
log a number is the number of times you can divide that number by 2 until you get to 1. 
logarithmic is great 
Certain searching algorithims have logarithmic time complexity 
efficient sorting algos involve logs
recursion sometimes involve logarithmic space complexity
----
Objects - unordered key:value pairs - quick , fast access and removal 
insrtion removal n access are O(1)/ and searching is O(n) if don't know value
Object.keys() is O(n)/ Object.entries/Object.hasOwnProperty('keyname') is O(1); 
Arrays - ordered list - useful but can come at a cost for operations
access O(1), insertion(depends) -removal depends searching O(n);
Sort - O(n*logN)
forEach/map/filter/reduce/etc O(n); 
solve problem - 1. understand it fully 2. concrete examples 3. break it down 4. solve or simplify 5. refactor /optimize
//========================================
Hash Tables/map
combining the accessibility of an array with the dynamism (ability to change, grow shrink) of a linked list 
key: value pair 
hash function to store the data - hash code to store value 
use put and get to insert data and retrieve it 
======================
Patterns - Frequency counter, Multiple pointers, sliding window, divide and conquer, 
greedy algorithms, backtracking, 
====
Recursive and Dynamic 
Dynmic - break large problem into smaller problem. 
Recursive algorithms involve a function calling itself in order to solve a smaller version of a problem. 
    Similarly, dynamic programing algorithms break down problems into subproblems in order to solve a larger problem. 
    Although the two concepts aren't exactly the same, dynamic programming solutions are often implemented recursively.
recursion - ex. factorial(n) = n*factorial(n-1); factorial(1) = 1.
fact(3) = 3 * 2 * 1 = 6/ recursive stack or iteraviley 
factorial (n) {
    if (n==1) return 1; 
    return  n * factorial(n-1); 
}
this causes big run times and takes up lots of space so use memoization to help 
with it can be O(n) time
call stack memory - O(n); space complexity
use grid[row][column] instead of grid [y][x] cause many mistakenly due grid[x][y]
DYNAMIC PROGRAMMING (DP)
What do we conclude from this? We need to break up a problem into a series of overlapping sub-problems,
 and build up solutions to larger and larger sub-problems. If you are given a problem, which can be broken down 
 into smaller sub-problems, and these smaller sub-problems can still be broken into smaller ones - and if you manage 
 to find out that there are some over-lappping sub-problems, then you've encountered a DP problem.
 -famous ones unix diff, bellman ford , tex, wasp
 Bellman-Ford - an algorithm that computes shortest paths from a single source vertex to all of the other vertices in a
 ghted digraph.[1] It is slower than Dijkstra's algorithm for the same problem, but more versatile, as it is capable of 
 handling graphs in which some of the edge weights are negative numbers. 
 In programming, Dynamic Programming is a powerful technique that allows one to solve different types of problems in 
 time O(n^2) or O(n^3) for which a naive approach would take exponential time.
 Writes down "1+1+1+1+1+1+1+1 =" on a sheet of paper.
"What's that equal to?"
Counting "Eight!"
Writes down another "1+" on the left.
"What about that?"
"Nine!" " How'd you know it was nine so fast?"
"You just added one more!"
"So you didn't need to recount because you remembered there were eight! Dynamic Programming is just a fancy way to say
 remembering stuff to save time later!"
 Dynamic programming is basically, recursion plus using common sense. What it means is that recursion allows you to 
 express the value of a function in terms of other values of that function. Where the common sense tells you that if 
 you implement your function in a way that the recursive calls are done in advance, and stored for easy access, 
 it will make your program faster. This is what we call Memoization - it is memorizing the results of some specific 
    states, which can then be later accessed to solve other sub-problems.
The intuition behind dynamic programming is that we trade space for time, i.e. to say that instead of calculating all
 the states taking a lot of time but no space, we take up space to store the results of all the sub-problems to save
  time later.
  A code for it using pure recursion:

  int fib (int n) {
        if (n < 2)
            return 1;
        return fib(n-1) + fib(n-2);
    }
Using Dynamic Programming approach with memoization:

 void fib () {
        fibresult[0] = 1;
        fibresult[1] = 1;
        for (int i = 2; i<n; i++)
           fibresult[i] = fibresult[i-1] + fibresult[i-2];
    }
    DP--2 types
    1. Optimization problems.
2. Combinatorial problems.
One can think of dynamic programming as a table-filling algorithm: you know the calculations you have to do, so you pick 
the best order to do them in and ignore the ones you don't have to fill in.
Write a backtrack.

When coming up with the memoization solution for a problem, start with a backtrack solution that finds the correct answer. 
Backtrack solution enumerates all the valid answers for the problem and chooses the best one.

Here are some restrictions on the backtrack solution:

It should be a function, calculating the answer using recursion.
It should return the answer with return statement, i.e., not store it somewhere.
All the non-local variables that the function uses should be used as read-only, i.e. the function can modify only local variables and its arguments.
============================================
Object Oriented Design/Systems Design
Algorithms: Breadth First Search/Depth First Search, Binary Search, Merge Sort and Quicksort
Problem Analysis Methods
Brute Force - try every single path on a graph to find the shortest path to get to point a to z 
trying every permuation, every edge and vertice  - O(n!); very bad. 
number of nodes * 1 less * 1 less so on and so forth

==========================(indexOf loops through the array) // arr2.splice(correctIndx, 1) ->remove it 
frequency counter - uses objects or sets to collect values / frequencies  of values -helps avoid nested loops
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    let freqCount1 = {}, freqCount2 = {}
    for (let val of arr1) {freqCount1[val] = (freqCount1[val] || 0)+1 }
    for (let val of arr2) {freqCount1[val] = (freqCount2[val] || 0)+1 }
    for (let key in freqCount1) {
        if(!(key ** 2 in freqCount2)) return false;
        if (freqCount2[key**2] !== freqCount1[key]) { return false};
    }
    return true; 
}
===========================
multiple pointer - 2 pointers usually start at ends or middle and move in diff directions to do comparison

===============================
Divide and Conquer
================================
Recursion = roughly O(2^n); 
Dynamic Programming
Greedy Algorithms - This means that a greedy algorithm picks the best immediate choice and never reconsiders its choices. In terms of optimizing a solution, this simply means that the greedy solution will try and find local optimum solutions - which can be many - and might miss out on a global optimum solution.
All Topics to cover
(You'll need to to talk about how they're implemented and why you'd choose one implementation or data structure instead of another.)

General Topics

Iterative Algorithm

Pointers in C++
Array, ArrayList, Dynamic Arrays, 2D Arrays, Vectors

Hashing Function

Set, Hashset, Bags
=================================
LinkedList Linked Lists-can grow not continguous not in order has element we want to store plus a pointer to the subsequent element in list
but price paid is random access - to access must traverse entire list until you get the element. 9 from node to node 
look up is O(n) - 
    Singly
    SIMPLE data structure stores list of values where each value is connected or linked to the next one
    data field and next field 
    data holds value and next is address of next node - a chain 
    first node is Head , goes in one direction with no way to go back.
Double
    has data field for value 
    has both a link to previous node and subsequent node 
    if links to a null field, there is nothing more
Circular linked list
    if you connect the last node to the head as its next address 

Disadvantages - can take up more memory then an array cause address store
    adding value is easy though 
    deleting is easy can just change next field of previous 
    has wide variety of uses in cs a powerful way to store list of values

Cycle Detection in Linked-List
Stack and Queues
================================
Trees will always have n-1 edges with n nodes 
TREES - (heirarchal) binary search tree, balanced - insert and find are O(log n) and unbalanced both are O(n); 
Trees Trees are a common non-linear data structure. They don’t store data in a linear way, but instead organize hierarchically. A tree is normally 
represented by nodes which contain a value and point to other nodes. - like files and folders
Often called HIERARCHICAL DATA STRUCTURE 
top of tree is a root - 
each element on tree is a node - connected by an edge 
leaf is end - means node has no children  
a node can only have one parent - but may have multiple children
Often used in cs to represent state such as tic tac toe cause one move can lead to multiple board postiions
- greatly used for faster searching and sorting operations - one of most powerful data structures
Binary Tree 
    tree where nodes can only have 2 children 
    leaf node is node with no children 
=======
searches - about relationships - string difference, they are ways of searchingj
DFS - a stack either our own or the call stack via recursion - LIFO - uses: backtracking, complete search, exhuasting path
it goes deep. 
BFS - w/ a queue - (FIFO) uses- check if a path exists between nodes, finding "hops" or distance out of 'levels" 
away. goes wide. 
so in a graph breadth first goes wide and circles outward, while dfs will go deep 
O(v+e) time and O(v) space. 
Breadth First Search - look at each node at each level, across whole wide expanse.
    To implement a BFS algorithm, we use the queue data structure to help.
    First add the root node into the queue with the put method.
    Iterate while the queue is not empty.
    Get the first node in the queue, and then print its value.
    Add both left and right children into the queue (if the current nodehas children).
    Done. We will print the value of each node, level by level, with our queuehelper.
Depth First Search - a Stack - look at all the nodes of a descendant before moving n 
    DFS explores a path all the way to a leaf before backtracking and exploring another path. 
    Let’s take a look at an example with this type of traversal.
    When we go deep to the leaf and backtrack, this is called DFS algorithm.
    Now that we are familiar with this traversal algorithm, we will discuss types of DFS: 
    pre-order, in-order, and post-order.
    DEPTH FIRST Tree Traversal - ways you walk the tree 
    INORDER- first go to left nodes then root then right nodes (if root is b and left is A and right is c)
    it be ABC - way to print the nodes in order
    PREORDER - go from root then left then right BAC
    POSTORDER - left then right then root - ACB 
Binary Search Tree ------
    Binary Search Tree A Binary Search Tree is sometimes called ordered or sorted binary trees, and it keeps 
    its values in sorted order, so that lookup and other operations can use the principle of binary search, 
    binary search is divide and conquer. 
Binary Search Tree  (BST) is an extension of Binary tree with some added constraints. 
    In BST, the value of the left child of a node must be smaller than or equal to the value 
    of its parent and the value of the right child is always larger than or equal to the value of its parent.
    This property of Binary Search Tree makes it suitable for searching operations as at each node we can 
    decide accurately whether the value will be in left subtree or right subtree. Therefore, it is called 
    a Search Tree.
Ternary Tree ----
Red Black Tree - O(log n) search - Red-Black is another type of self-balancing tree. The name Red-Black is given to it because
   each node in a Red-Black tree is either painted Red or Black according to the properties of the Red- Black 
   Tree. This make sure that the tree remains balanced. Although the Red-Black tree is not a perfectly balanced
   tree but its properties ensure that the searching operation takes only O(log n) time.
   Whenever a new node is added to the Red-Black Tree, the nodes are rotated and painted again if needed to
    maintain the properties of the Red-Black Tree
AVL Tree --The name AVL is given on the name of its inventors Adelson-Velshi and Landis. 
    This was the first dynamically balancing tree. In AVL tree, each node is assigned a balancing 
    factor based on which it is calculated whether the tree is balanced or not. In AVL tree, 
    the heights of children of a node differ by at most 1. The valid balancing factor in AVL tree are 1,
    0 and -1.  When a new node is added to the AVL tree and tree becomes unbalanced then rotation is 
    done to make sure that the tree remains balanced. The common operations like lookup, insertion and 
    deletion takes O(log n) time in AVL tree. It is widely used for Lookup operations.
Tree Balancing
Minimum Spanning Tree
N-ary - tree structures that have many children per-node are known as n-ary trees. Tries are n-ary trees.
N-ary Tree --In an N-ary tree, the maximum number of children that a node can have is limited to N. 
    A binary tree is 2-ary tree as each node in binary tree has at most 2 children. Trie data structure 
    is one of the most commonly used implementation of N-ary tree. A full N-ary tree is a tree in which 
    children of a node is either 0 or N. A complete N-ary tree is the tree in which all the leaf nodes are 
    at the same level.
Trie Tree -- n-ary tree  type of tree that stores the value for each node based on its position in the trie.
    commonly used to store strings. think of dictionary ear,earl,ears,eat,eater
    each letter is a node 
    add identifier for the last node/letter , if doesn't have valid identifier then not valid word.
    search-oriented data structures, a trie stores keys and associated values. Together, the key and value are called an entry. 
    The key is always a string, but the value could be of any type, as the trie just stores and retrieves it
     as an opaque value. Often this value is a unique identifier or pointer that gets you to some data related 
      the key (e.g., primary key of a record in a DBMS).
      let current node = root node
    for each letter in the key
    find the child node of current node associated with that letter
    if there is no child node associated with that letter, create a new node and add it to current node as a child associated with the letter
    set current node = child node
    add value to current node
    As you might expect, the height of a trie is always equal to the length of the longest key added to it. This means that tries tend to be very 
    wide and not terribly deep, which makes retrieval speed much quicker. Adding a new key requires creating at most len(key) nodes, but if your 
    keys share common prefixes (which is typical), you will re-use nodes from previously-added keys.
    Retrieving Keys and Values#
At this point you can see how this structure sets us up for very fast retrieval of keys that start with a prefix. To do so, we follow this algorithm
let current node = root node
for each letter in the prefix
find the child node of current node associated with that letter
if there is no child associated with that letter, no keys start with the prefix, so return an empty/nil list
set current node = child node
current node now points to the branch containing all keys that start with the prefix; recurse down the branch, gathering the keys and values, and return them
The important thing to note here is that finding the start of the branch containing all keys and values takes at most len(prefix) lookups, regardless of how many entries there are in the trie. The retrieval complexity depends on the length of the key prefix, not the number of entries in the trie, so the retrieval performance remains about the same as we add more entries. Compare that with a binary search tree, which requires at most log(n) comparisons to find the first matching key, where n is the number of entries in the tree.

Since the branch we find for a short prefix might contain a lot of keys and values, we typically return only the first m entries from the branch, where m is a parameter passed by the caller (usually a relatively small value since we're often showing these as a list of suggestions). To get this subset, you do a depth-first recursion down the branch, following the letters in each node according to their alphabetical order. As soon as you gather m keys and values, you return to stop the recursion.
Hybrid Tries#
    Although tries offer very fast retrieval, they aren't terribly space-efficient unless most of your keys are short and share common prefixes (i.e., dictionary words). Longer keys that don't share prefixes create a "leggy" tree structure, resembling a many-tentacled octopus!
    In these situations, it's common to use a variant known as a hybrid trie. Instead of always creating a new node for each letter in the key, the leaf nodes in a hybrid trie store a list of key suffixes until those reach some maximum number, for example, 50. When the 51st key is added, the leaf node the transforms itself into a typical trie node, and creates a new leaf node for each distinct first-letter in the key suffixes it holds. Each of the new child leaf nodes then stores what remains of the key suffixes for their respective letter.
    It's easier to show this visually than to describe it. Assume that we a hybrid trie where one of the leaf nodes has the maximum number of key suffixes allowed:
Balanced Tree
Heaps can be seen as an array 
Heaps -A heap is really nothing more than a binary tree with some additional rules that it has to follow. These two rules are the two properties that define what differentiates a heap structure 
    from any other tree structure.
    Heap must be a complete binary tree - means all levels of tree must be filled except last one,
    also the last level must have left most nodes filled always
    Let’s talk about shape first. In order for a binary tree to qualify as a heap, it must be complete tree; in other words, every single level of the tree must be completely filled — with the last level being the only exception. Additionally, the last level of the tree must always have the left-most nodes filled first.
Another way of thinking about this is that one entire level of nodes must all have children added to them before they can have grandchildren nodes.
A heap is a tree-based data structure that usually comes in two varieties: 
    (1) Max-heaps where the the value in any node is greater than all the values in it's child nodes and  
    (2) Min-heaps where the value in any node is less than all of the values in it's child nodes.

2 forms of heaps - Min/Max Heap
    MIN Heap- elements are all smaller than their children, so root node will be the very smallest element
    so looking down the tree the elements get bigger and bigger. 
    alwys insert next empty spot, top to bottom , left to right.
    if number is not in correct order, bubble it up to correct spot.
    remove min -take root out, but swap it with last element added, then if not in right place bubble it down till smallest
    spot. 
    implementation - can use array to store the values, makes it compact. 
    parent = (index -2) / 2
Binary heaps are super efficient for implementing priority queues because it’s very easy to know and retrieve/remove the element with the highest priority: it will always be the root node!
======================
Graphs - Graphs are a non-linear data structure considering of nodes and edges (which connect pairs of nodes). Graphs are used to solve many real-life problems and are often used to represent networks (e.g. friends on a social network).
    set of nodes connected by edges, 
    no rules like in a tree, 
    like discreet mathematics
    a graph G is an ordered pair of a set V of vertices and a set E of edges.
    G = (V,E); =>  Ordered pair
    (a,b) !== (b,a) if a !== b
    unordered pair - {a,b} - important not important - a,b === b,a
    edge is defined by its two end points(vertices) 
    directed edge - point with origin and destination
    (u) -> (v) (u,v) 
    unidrected - is unordered {u,v} no fixed direction 
    a graph with all directed is a directed graph or Digraph
    all undirected edges is just undirected graph
    social network is undirected - can suggest friends of friends - no true direciton so goes both ways.
    Based on friends connections in a graph you can see who may be a suggestion
    Find all nodes with shortest paths to a node
    www - a directed graph - web page links to another page , could be one direction cause web page may not ink back to that page.
    like my website links to wiki but wiki doesn't link to my page.
    web crawling - systematically browse web and stores data on it
    web crawling is graph traversal - visiting all nodes 
Weighted graph and unweighted graph
some connections can have more weight, value, - intra city network with one way streets is digraph
but inter city - city to city is 2 way streets so undirected graph
label edges with weights - give them values for their length - 
Unweighted graph is weighted graph but all weight of edges are the same. 
social network is unweighted , undirected graph
world wide web was unweighted, directed graph 
intercity is weighted undirected graph 

Shortest path on unweighted Graph


Paths
All pairs shortest path
Single Source Shortest path
Dijkstra -number of the nodes squared N^2- It is a greedy algorithm that finds the shortest path from a starting node to all other nodes in a
 graph. It uses a priority queue to keep track of the nodes that have been visited and the shortest distance to them. 
 It is not guaranteed to find the shortest path if there are multiple shortest paths.
 Algorithm 
1) Create a set sptSet (shortest path tree set) that keeps track of vertices included in the shortest-path tree, i.e., whose minimum distance from the source is calculated and finalized. Initially, this set is empty. 
2) Assign a distance value to all vertices in the input graph. Initialize all distance values as INFINITE. Assign distance value as 0 for the source vertex so that it is picked first. 
3) While sptSet doesn’t include all vertices 
….a) Pick a vertex u which is not there in sptSet and has a minimum distance value. 
….b) Include u to sptSet. 
….c) Update distance value of all adjacent vertices of u. To update the distance values, iterate through all adjacent vertices. For every adjacent vertex v, if the sum of distance value of u (from source) and weight of edge u-v, is less than the distance value of v, then update the distance value of v. 
improved few years later O(n log n+l);

A* - a path finding algorithm used to find path between two points usually in a graph. 
such as growth between cities, tic tac toe , find shortest path to your classroom, 
could go every path but that takes long time - a tries most promising path first. 
need to compare 2 positions in graph and see which is better, - try heuristic 
A* system uses 2 lists - open and closed lists, closed is all nodes explored, open list are nodes left to visit.
keeping track of them you can find best path to your point to get to. 

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
Sorting: Searching algorithms are used to Sorting algorithms are used to rearrange a list of elements so that they're 
in a speciified order (e.g. sorting numbers to go from highest to lowest).

Bubble Sort 
Quick Sort
Merge Sort - splits array into 2 halves so on and so forth until all elements are 1 array.
then compares first 2 arrays puts smaller num first and the bigger second, merges these two arrays
then compare the next two so on and so forth,
keep comparing 2 arrays - merging them until one big array. O(n log n) - n is times we need to compare an dmerge items
which is directly proportional to the number of items in array, log n comes from number of merge steps. 
better than selection sort. 
Radix Sort
Heap Sort
Insert Sort
Selection sort - one by one organize from smallest to largest- n^2
Search :
Binary Search - O(log n) depends on random access - It is a divide and conquer, often used for binary tree searches.
needs to be ordered 


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

Stacks are a data structure that store a collection of items that inserted and removed according to the last-in first-out (LIFO) principle. Similarly, Queues store items according ot the first-in first-out (FIFO) principle.
stacks and queues - linear data structures - flexible in size
    add elements as you go
    but stack LIFO data structure last in first out 
    like stack of plates 
    queue though is FIFO - first in first out 
Priority queue- queue data structure with some additional properties
1. every item has a priority assictied with it - usually integer
2. an item with a high priority is dequeued before and item with low priority
3. two items with equal priority are dequeued based on their order in the queue.
- need to check the next queue based on importance - 
tree could be unbalanced, list takes too much time, 
require tree to be complete and in order - can always easily accesss max or min based on heap type

Binary heaps are super efficient for implementing priority queues because it’s very easy to know and retrieve/remove the element with the highest priority: it will always be the root node!
Operations	peek	insert	delete
Linked List	O(1)	O(n)	O(1)
Binary Heap	O(1)	O(log n)	O(log n)
Binary Search Tree	O(1)	O(log n)	O(log n)
*/
function addUpTo(n) {
    return n * (n+1) / 2;
}; 
