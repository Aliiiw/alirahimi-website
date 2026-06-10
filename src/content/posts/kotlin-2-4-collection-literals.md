---
title: "What's New in Kotlin 2.4.0: Collection Literals, Stable Context Parameters, and iOS/Wasm Upgrades"
date: 2026-06-10T12:00:00+02:00
excerpt: "A detailed breakdown of the most important features, APIs, and compiler changes in Kotlin 2.4.0."
tags: ["kotlin", "android", "kotlin-2-4", "multiplatform"]
category: "Kotlin"
published: true
---
# What's New in Kotlin 2.4.0: Collection Literals, Stable Context Parameters, and iOS/Wasm Upgrades

Kotlin 2.4.0 is officially here. This release focuses heavily on maturing language features that have been in preview for a while, making Multiplatform integrations significantly smoother, and introducing some highly anticipated syntax improvements.

Here is a detailed breakdown of the most important features, APIs, and compiler changes in Kotlin 2.4.0.

---

## 1. Stable Language Features

Several experimental previews from Kotlin 2.2 and 2.3 have graduated to **Stable** in 2.4.0. You no longer need compiler flags or opt-in annotations to use these in production.

### Context Parameters
Context parameters are now stable. They provide a cleaner, type-safe alternative to context receivers, allowing you to declare implicit parameters that are automatically passed down by the compiler based on the calling context. This is highly useful for dependency injection, database transactions, styling contexts, or logging.

```kotlin
class TransactionContext

// Declaring a function that requires a TransactionContext
context(transaction: TransactionContext)
fun executeQuery(sql: String) {
    // transaction is implicitly available in scope
    println("Running SQL in transaction scope: $sql")
}

fun main() {
    val dbCtx = TransactionContext()
    
    // We enter the context using the context function or block
    with(dbCtx) {
        executeQuery("SELECT * FROM users") // Implicitly resolves dbCtx
    }
}
```

### Explicit Backing Fields
You can now explicitly define a backing field within a property block using the `field` keyword. This eliminates the classic Kotlin boilerplate of declaring a private mutable property just to expose a public read-only one.

```kotlin
class UserManager {
    // Public read-only property with a custom setter and explicit backing field
    val activeUsersCount: Int = 0
        // Use of explicit backing field is now fully supported
        field = 0 
        get() = field
        private set
        
    fun registerUser() {
        // We can modify the backing field directly inside the class
        activeUsersCount++
    }
}
```
> [!NOTE]
> IDE support for explicit backing fields without the `-Xexplicit-backing-fields` compiler option will be fully integrated in IntelliJ IDEA 2026.1.4.

### `@all` Meta-Target and Use-Site Defaults
Kotlin 2.4.0 stabilizes the `@all` meta-target for annotations. You can apply an annotation to a property and have the compiler apply it to all of its generated JVM elements (field, getter, setter, and constructor parameters) automatically.
Additionally, defaulting rules for use-site annotation targets have been updated to make behavior more predictable.

---

## 2. Experimental Language Features

Kotlin 2.4.0 also introduces several experimental features that you can opt into today.

### Collection Literals
One of the most requested syntax enhancements is finally entering experimental preview: **collection literals**. You can now create collections using simple bracket syntax `[]`.

```kotlin
// Opt-in using compiler option: -Xcollection-literals

// Creates a MutableList<String> directly
val shapes: MutableList<String> = ["triangle", "square", "circle"]

// If the type is omitted, the compiler defaults to a standard List
val fruits = ["apple", "banana", "cherry"]
```

You can also define custom `operator fun of` functions on your companion objects to enable bracket syntax for your own domain models (e.g., matrices or custom collection types):

```kotlin
class DoubleMatrix(vararg val rows: Row) {
    companion object {
        operator fun of(vararg rows: Row) = DoubleMatrix(*rows)
    }
    class Row(vararg val elements: Double) {
        companion object {
            operator fun of(vararg elements: Double) = Row(*elements)
        }
    }
}

val identityMatrix: DoubleMatrix = [
    [1.0, 0.0, 0.0],
    [0.0, 1.0, 0.0],
    [0.0, 0.0, 1.0],
]
```

### Explicit Context Arguments
When multiple overloads differ only by their context parameters, compiler resolution could previously get confused. Kotlin 2.4.0 introduces explicit context arguments to manually resolve these ambiguities.

```kotlin
class EmailSender
class SmsSender

context(emailSender: EmailSender)
fun sendNotification() { println("Sent email") }

context(smsSender: SmsSender)
fun sendNotification() { println("Sent SMS") }

context(email: EmailSender, sms: SmsSender)
fun notifyUser() {
    // Explicitly select which context overload to execute
    sendNotification(emailSender = email)
    sendNotification(smsSender = sms)
}
```
*To use this, opt in with the `-Xexplicit-context-arguments` compiler flag.*

### Improved Compile-Time Constants
Compile-time constant evaluation is now much more powerful. Kotlin can now evaluate:
- Unsigned type arithmetic at compile time.
- Standard string operations like `.lowercase()`, `.uppercase()`, and `.trim()`.
- The `.name` property on enum constants.
- Reflections via the `KCallable` interface.

*To use this, opt in with the `-Xintrinsic-const-evaluation` compiler flag.*

---

## 3. Standard Library Improvements

### Stable Common UUID API
Kotlin now includes a fully **Stable** `kotlin.uuid.Uuid` API in the common standard library. You no longer need JVM-specific dependencies (`java.util.UUID`) or expect/actual multiplatform wrappers to generate and parse UUIDs.

```kotlin
import kotlin.uuid.Uuid

fun main() {
    // Parse UUIDs from standard hex-and-dash format
    val id = Uuid.parse("f81d4fae-7dec-11d0-a765-00a0c91e6bf6")
    
    // Compare UUIDs using standard comparison operators
    val otherId = Uuid.parse("00000000-0000-0000-0000-000000000000")
    if (id > otherId) {
        println("Valid UUID sequence comparison")
    }
}
```
> [!NOTE]
> While parsing, formatting, and comparing UUIDs are fully stable, the helper functions for generating V4 and V7 UUIDs remain experimental and require an explicit opt-in.

### Native Sorted Order Checks
Instead of sorting a collection or writing custom loops to verify if a list is sorted, you can now use built-in extension functions:
- `.isSorted()` / `.isSortedDescending()`
- `.isSortedBy(selector)` / `.isSortedByDescending(selector)`
- `.isSortedWith(comparator)`

These functions are highly efficient; they evaluate elements lazily and return `false` as soon as they encounter the first out-of-order pair.

```kotlin
val numbers = listOf(1, 2, 3, 4)
println(numbers.isSorted()) // true

val unsortedUsers = listOf(User("Alice", 24), User("Bob", 31), User("Charlie", 29))
println(unsortedUsers.isSortedBy { it.age }) // false
```

### Map Fallbacks: Handling Nulls vs. Missing Keys
When querying maps with nullable values, there has historically been ambiguity: does `null` mean the key was missing, or was the key present with a value of `null`? Kotlin 2.4.0 adds clear fallback functions to let you handle these cases explicitly.
- `getOrElseIfNull` / `getOrPutIfNull`: Fallback to default if the key is missing **OR** its value is null.
- `getOrElseIfMissing` / `getOrPutIfMissing`: Fallback to default **ONLY** if the key is missing from the map.

```kotlin
@OptIn(ExperimentalStdlibApi::class)
fun main() {
    val cache = mutableMapOf<String, String?>("user" to null)

    // Overwrites the null value because "user" has a null value
    cache.getOrPutIfNull("user") { "default_value" } // {user=default_value}

    val missingCache = mutableMapOf<String, String?>("user" to null)
    // Keeps the null value because the key "user" exists in the map
    missingCache.getOrPutIfMissing("user") { "default_value" } // {user=null}
}
```

---

## 4. Multiplatform, Native, and Wasm Upgrades

### Swift Export graduates to Alpha
Interoperability with Swift is a major focus in Kotlin Multiplatform. In 2.4.0, Swift Export reaches Alpha status with native concurrency support:
1. **Structured Concurrency**: Kotlin `suspend` functions are now automatically exported as native Swift `async` counterparts.
2. **Flow Export**: You can now export `kotlinx.coroutines` `Flow` directly to Swift. The KMP compiler maps them to Swift’s native `AsyncSequence` out of the box using `.asAsyncSequence()`.

```swift
// Swift side code consuming a Kotlin Flow directly
for try await element in myKotlinFlow.asAsyncSequence() {
    print(element)
}
```

### Swift Package Manager (SPM) Integration
Kotlin Multiplatform projects can now declare Swift package dependencies directly in their `build.gradle.kts` configuration for iOS targets, making dependency management between Cocoa and Kotlin much cleaner.

```kotlin
kotlin {
    swiftPMDependencies {
        swiftPackage(
            url = url("https://github.com/firebase/firebase-ios-sdk.git"),
            version = from("12.11.0"),
            products = listOf(product("FirebaseAnalytics"))
        )
    }
}
```

### Kotlin/Wasm and WebAssembly Component Model
Kotlin/Wasm has enabled **incremental compilation by default**, meaning development rebuild times are significantly faster.
Furthermore, this release introduces experimental support for the **WebAssembly Component Model**, allowing Kotlin/Wasm to run outside the browser (e.g., on the serverless edge with `wasi:http`).

### Kotlin/JS Improvements
- **Value Class Export**: You can now mark value classes with `@JsExport` to compile them into regular TypeScript classes.
- **Type Variance Preservation**: Generic `in` and `out` declarations are preserved and mapped directly to TypeScript's variance annotations in generated `.d.ts` files.
- **`@JsNoRuntime` for Interfaces**: Drops runtime metadata overhead for exported interfaces, treating them as pure TypeScript interfaces.

---

## How to Upgrade

To upgrade to Kotlin 2.4.0, update your Gradle or Maven build scripts:

### Gradle (build.gradle.kts)
```kotlin
plugins {
    kotlin("jvm") version "2.4.0"
    // Or for multiplatform
    // kotlin("multiplatform") version "2.4.0"
}
```

### Maven (pom.xml)
With Kotlin 2.4.0, the Maven plugin automatically aligns the JVM target with the Java compiler configuration when `<extensions>true</extensions>` is set:

```xml
<properties>
    <maven.compiler.release>17</maven.compiler.release>
    <kotlin.version>2.4.0</kotlin.version>
</properties>

<build>
    <plugins>
        <plugin>
            <groupId>org.jetbrains.kotlin</groupId>
            <artifactId>kotlin-maven-plugin</artifactId>
            <version>${kotlin.version}</version>
            <extensions>true</extensions>
        </plugin>
    </plugins>
</build>
```
