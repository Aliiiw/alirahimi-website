---
title: "Programming Interviews Exposed – Part 2: Algorithms Interviewers Expect You to Recognize"
date: 2026-02-10T12:00:00+01:00
excerpt: "Part 2 of Programming Interviews Exposed notes, focused on algorithmic patterns interviewers expect you to recognize, including Big-O, sorting, binary search, recursion, BFS, DFS, and dynamic programming."
tags: ["algorithms","datastructures","interviews","android","kotlin"]
category: "Interviews"
published: true
---
# Programming Interviews Exposed

## Part 2 — Algorithms Interviewers Expect You to Recognize

Continuing my notes from _Programming Interviews Exposed (3rd Edition)_.

Part 2 is about algorithms — not as academic topics, but as **patterns interviewers expect you to recognize quickly**.

Once you stop seeing problems as unique and start seeing patterns, interviews change completely.

---

# 1️⃣ Big-O

_The question behind every question_

If you don’t understand Big-O, your solution is never finished.

Interviewers are silently asking:

- What’s the time complexity?
- Can this scale?
- Can you do better?

Even if they don’t say it directly.

Big-O is not about memorizing symbols —  
It’s about understanding trade-offs.

---

# 2️⃣ Sorting

_You’re rarely asked to implement it_

Interviews care more about **when to use sorting**, not memorizing its implementation.

Know the characteristics:

- QuickSort → Fast on average
- MergeSort → Stable & predictable
- HeapSort → Priority-based

More important than coding it:

- Do you recognize when sorting simplifies a problem?
- Do you understand its complexity impact?

---

# 3️⃣ Binary Search

_Most people underuse it_

Many “hard” problems are just binary search in disguise.

Binary search works:

- On sorted arrays
- On answer space
- On monotonic conditions

If a problem says:

> “Find the minimum/maximum value that satisfies a condition”

There’s a good chance binary search applies.

---

# 4️⃣ Recursion

_Powerful. Dangerous. Necessary._

Heavily used in:

- Trees
- DFS
- Backtracking

If you can trace recursion confidently, tree problems become manageable.

Rules to remember:

- Define the base case first
- Then define the recursive case
- Be aware of stack depth

Recursion isn’t magic — it’s controlled repetition.

---

# 5️⃣ BFS vs DFS

_Choosing correctly matters more than coding fast_

This decision shows your understanding level.

BFS is ideal for:

- Shortest path in unweighted graphs
- Level-by-level traversal

DFS is ideal for:

- Detecting cycles
- Finding connected components
- Deep exploration

The real skill is not implementing them —  
It’s knowing **why you chose one**.

---

# 6️⃣ Dynamic Programming

_Overlapping problems, cached answers_

DP sounds scary — but it’s structured thinking.

Common forms:

- Memoization (top-down)
- Tabulation (bottom-up)

Core idea:

- Break the problem into subproblems
- Store results
- Avoid recomputation

If you recognize overlapping subproblems, you're halfway there.

---

# Interview Reality

Algorithms don’t test memory.  
They test:

- Pattern recognition
- Abstraction ability
- Communication under pressure

Problems repeat.  
Patterns repeat even more.

The faster you recognize the pattern,  
the calmer the interview becomes.

---

Part 1 covered Data Structures.  
This completes the Algorithms overview.

More Android and interview-focused content coming soon.

---

← [Back to Home](/)
