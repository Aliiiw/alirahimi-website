---
title: "Kotlin 2.4.0: Collection Literals Are Small, but I Really Like Them"
date: 2026-06-10T12:00:00+02:00
excerpt: "Kotlin 2.4.0 adds experimental collection literals, letting us create lists with bracket syntax. It is a small change, but a very Kotlin-like one."
tags: ["kotlin", "android", "kotlin-2-4", "programming"]
category: "Kotlin"
published: true
---
# Kotlin 2.4.0: Collection Literals Are Small, but I Really Like Them

I was reading through the Kotlin 2.4.0 release notes, and this tiny example immediately caught my attention:

```kotlin
fun main() {
    val shapes: MutableList<String> = ["triangle", "square", "circle"]
    println(shapes)
}
```

That is it. No new architecture, no complicated API, just brackets.

The usual version is still perfectly fine:

```kotlin
val shapes = mutableListOf("triangle", "square", "circle")
```

But the new collection literal syntax feels clean, especially when the expected collection type is already obvious from the surrounding code.

## How it works

The compiler uses the expected type to decide which collection to create:

```kotlin
val names: List<String> = ["Ali", "Sara", "John"]
val selectedIds: Set<Int> = [10, 20, 30]
val queue: MutableList<String> = ["first", "second"]
```

When there is no explicit expected type, Kotlin defaults to `List`:

```kotlin
val fruits = ["apple", "banana", "cherry"]
```

It also goes beyond the standard collections. A custom type can provide an `operator fun of`, which means bracket syntax can be used for things such as matrices:

```kotlin
val identityMatrix: DoubleMatrix = [
    [1.0, 0.0, 0.0],
    [0.0, 1.0, 0.0],
    [0.0, 0.0, 1.0],
]
```

This is probably where the feature becomes more interesting than simply saving a few characters.

## The important footnote: it is experimental

Collection literals are not stable yet. To try them, the compiler flag must be enabled:

```kotlin
kotlin {
    compilerOptions {
        freeCompilerArgs.add("-Xcollection-literals")
    }
}
```

I would happily test this in a playground or a side project, but I would wait before adding it to a production Android codebase. Experimental syntax can still change, and every new piece of syntax is one more thing the whole team needs to understand.

## A few other Kotlin 2.4.0 changes worth noticing

Collection literals are the most visually obvious change, but Kotlin 2.4.0 includes several practical updates:

- Context parameters and explicit backing fields are now stable.
- The common `kotlin.uuid.Uuid` API is stable, except for V4 and V7 generation.
- New functions such as `isSorted()` and `isSortedBy()` can check order without sorting the collection again.
- Kotlin/Native now uses concurrent marking in its garbage collector by default, improving pause times for latency-sensitive apps.
- Swift export is now Alpha, with better support for structured concurrency and exporting Kotlin `Flow` as Swift `AsyncSequence`.

For Android projects, there is also one upgrade detail to check first: Kotlin 2.4.0 raises the minimum supported Android Gradle Plugin version to **8.5.2**.

## My take

I like changes like this because they make everyday code slightly easier to scan without trying to reinvent the language.

Will bracket syntax change how we build Android apps? Of course not. But Kotlin has always been good at removing small bits of noise, and collection literals fit that philosophy well.

For now, I am curious to try them and see whether they still feel clear after the novelty wears off.

Would you use collection literals in your Kotlin codebase, or do you prefer the explicit `listOf()` and `mutableListOf()` style?

---

Read the full [Kotlin 2.4.0 release notes](https://kotlinlang.org/docs/whatsnew24.html).

← [Back to Home](/)
