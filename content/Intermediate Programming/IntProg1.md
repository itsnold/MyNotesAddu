# Week 1: Java Fundamentals

05 3am to yvy> [!summary] What this covers
> Java program structure, JVM workflow, identifiers, primitive data types, operators, expressions, casting, variables, constants, and concatenation.

## Contents

- [[#Introduction to Java Programs]]
- [[#Java Virtual Machine (JVM) Workflow]]
- [[#Identifiers & Reserved Words]]
- [[#Primitive Data Types]]
- [[#Arithmetic Operators & Precedence]]
- [[#Expressions & Casting]]
- [[#Variables & Constants]]
- [[#Concatenation]]

---

## Introduction to Java Programs

> [!definition] Key Terms
> **Computer Program** — a sequence of statements to accomplish a task.
> 
> **Programming** — the process of planning and creating a program.
> 
> **Java Program** — a collection of classes. Every application must have a `main` method.
> 
> **Tokens** — the smallest individual units in a program: `keywords`, `identifiers`, `symbols`, `literals`.

---

## Java Virtual Machine (JVM) Workflow

Here's how Java code gets executed:

> [!info] JVM Pipeline
> ```
> Java Source Code (.java)
>        ↓
> Java Compiler (javac)
>        ↓
> Byte Code (.class)
>        ↓
> JVM (Interpreter)
>        ↓
> Operating System
> ```

So you write `.java` files, the compiler turns them into `.class` bytecode, and the JVM interprets that bytecode for your specific OS. This is what makes Java "write once, run anywhere."

---

## Identifiers & Reserved Words

> [!info] Reserved Words (Keywords)
> These are built into Java and can't be used as names:
> 
> `int`, `float`, `double`, `char`, `void`, `public`, `static`, `return`, `class`, `if`, `else`, `for`, `while`, etc.

> [!definition] Identifiers
> Names you give to variables, methods, classes, etc.
> 
> **Rules:**
> - Can contain letters, digits, underscore (`_`), or dollar sign (`$`)
> - Must NOT begin with a digit
> - No spaces allowed
> - Case-sensitive (`myVar` ≠ `MyVar`)

---

## Primitive Data Types

Java has 8 primitive data types:

> [!abstract] Data Types & Memory
> | Type | Size | Range / Description |
> |:---|:---|:---|
> | `byte` | 1 byte | $-128$ to $127$ |
> | `short` | 2 bytes | $-32,768$ to $32,767$ |
> | `int` | 4 bytes | $-2^{31}$ to $2^{31}-1$ |
> | `long` | 8 bytes | $-2^{63}$ to $2^{63}-1$ |
> | `float` | 4 bytes | 6-7 decimal digits precision |
> | `double` | 8 bytes | 15 decimal digits precision |
> | `char` | 2 bytes | Unicode character / ASCII values |
> | `boolean` | 1 bit | `true` or `false` |

---

## Arithmetic Operators & Precedence

> [!info] Operators
> | Operator | Operation |
> |:---:|---|
> | `+` | Addition |
> | `-` | Subtraction |
> | `*` | Multiplication |
> | `/` | Division |
> | `%` | Modulo (remainder) |
> 
> **Unary** operators work on one operand (like `-x`).
> **Binary** operators work on two operands (like `x + y`).

> [!warning] Order of Precedence
> 1. `*`, `/`, `%` — evaluated first (higher precedence)
> 2. `+`, `-` — evaluated after (lower precedence)
> 
> Operators at the same level are evaluated **left to right**.

---

## Expressions & Casting

> [!tip] Mixed Expressions
> If an operator has both an integer and a floating-point operand, the result is automatically a floating-point number.

> [!definition] Type Casting
> Explicitly converting one data type to another.
> 
> **Syntax:** `(dataTypeName) expression`

> [!example] Casting Examples
> `(int)(7.9 + 6.7)` → evaluates `14.6` first, then casts to `14`
> 
> `(int)(7.9) + (int)(6.7)` → casts each first: `7 + 6 = 13`
> 
> Notice the difference! Order of operations matters.

---

## Variables & Constants

> [!definition] Named Constant
> Declared using `final`. Value cannot change after assignment.
> 
> Convention: use ALL_CAPS.
> ```java
> final double PI = 3.1416;
> ```

> [!definition] Variable
> Content can change during execution. Must be declared before use.
> ```java
> double amountDue;
> int count = 0;
> ```

---

## Concatenation

The process of joining values using the `+` symbol.

> [!abstract] Concatenation Rules
> | Expression | Result |
> |---|---|
> | `String + String` | Concatenate |
> | `String + Number` | Concatenate (number becomes string) |
> | `Number + Number` | Add (arithmetic) |

> [!example] Concatenation Examples
> ```java
> "Hello" + "World"     // "HelloWorld"
> "Age: " + 25          // "Age: 25"
> 10 + 20               // 30
> "Sum: " + 10 + 20     // "Sum: 1020" (left to right!)
> "Sum: " + (10 + 20)   // "Sum: 30"
> ```


# Week 2: Input, Operators & Style

> [!summary] What this covers
> Scanner class for user input, increment/decrement operators, output methods, escape sequences, comments, and compound assignment.

## Contents

- [[#Getting User Input (Scanner Class)]]
- [[#Increment and Decrement Operators]]
- [[#Output & Escape Sequences]]
- [[#Programming Style & Form]]
- [[#Compound Assignment]]

---

## Getting User Input (Scanner Class)

To read data from the standard input stream (`System.in`), use the `Scanner` class.

```java
import java.util.Scanner;

Scanner console = new Scanner(System.in);
```

> [!info] Common Scanner Methods
> | Method | Reads |
> |:---|:---|
> | `nextInt()` | integer |
> | `nextDouble()` | double |
> | `next()` | single word (stops at space) |
> | `nextLine()` | whole line (including spaces) |
> | `nextBoolean()` | boolean |

> [!example] Usage
> ```java
> System.out.print("Enter your name: ");
> String name = console.nextLine();
> 
> System.out.print("Enter your age: ");
> int age = console.nextInt();
> ```

---

## Increment and Decrement Operators

> [!info] Operators
> `++` — increments value by 1
> `--` — decrements value by 1

> [!warning] Pre vs. Post — this matters!
> **Pre-increment (`++variable`)** — increments first, then uses the value
> 
> **Post-increment (`variable++`)** — uses the value first, then increments

> [!example] The Difference
> ```java
> int x = 5;
> int a = ++x;  // x becomes 6, then a = 6
> 
> int y = 5;
> int b = y++;  // b = 5, then y becomes 6
> ```
> 
> Same logic applies to `--`.

---

## Output & Escape Sequences

> [!info] Output Methods
> `System.out.print()` — prints without newline
> 
> `System.out.println()` — prints and appends a newline

> [!abstract] Escape Sequences
> | Sequence | What it does |
> |:---:|---|
> | `\n` | Newline |
> | `\t` | Tab |
> | `\b` | Backspace |
> | `\\` | Backslash (literal) |
> | `\"` | Double quote (literal) |

> [!example] Using Escape Sequences
> ```java
> System.out.println("Hello\tWorld");   // Hello    World
> System.out.println("Line1\nLine2");   // Two lines
> System.out.println("Say \"Hi\"");     // Say "Hi"
> ```

---

## Programming Style & Form

> [!tip] Good Practices
> **Semicolon** — statement terminator, every statement needs one
> 
> **Blanks** — use whitespace to separate tokens and improve readability
> 
> **Indentation** — makes code structure clear

> [!info] Comments
> ```java
> // Single-line comment
> 
> /* Multi-line
>    comment */
> ```

> [!info] Import Statements
> Used to bring in packages:
> ```java
> import java.util.Scanner;
> import java.io.*;  // imports everything in java.io
> ```
> 
> Note: `java.lang` (includes `String`, `System`, etc.) is imported automatically.

---

## Compound Assignment

Shorthand for modifying a variable using its current value.

> [!abstract] Compound Operators
> | Shorthand | Equivalent To |
> |---|---|
> | `x += 5;` | `x = x + 5;` |
> | `x -= 5;` | `x = x - 5;` |
> | `x *= 5;` | `x = x * 5;` |
> | `x /= 5;` | `x = x / 5;` |
> | `x %= 5;` | `x = x % 5;` |

> [!warning] Note the parentheses
> `x *= a + b;` is equivalent to `x = x * (a + b);`
> 
> The entire right-hand expression is treated as one unit.

---


# Week 3: Strings & Formatting

> [!summary] What this covers
> Object vs primitive variables, the String class and its methods, printf formatting, parsing numeric strings with wrapper classes, and String.format.

## Contents

- [[#Object vs Primitive Variables]]
- [[#The String Class]]
- [[#Formatting Output (printf)]]
- [[#Parsing Numeric Strings (Wrapper Classes)]]
- [[#String.format Method]]

---

## Object vs Primitive Variables

> [!definition] Variable Types
> **Primitive Variables** — directly store data in their memory space.
> 
> **Reference Variables** — store the memory address (reference) of the object containing the data.

> [!info] Instantiation
> Use the `new` operator to create an instance of a class:
> ```java
> String name = new String("Lisa");
> ```

---

## The String Class

`String` is a predefined class in Java. You don't need to import it.

Two ways to create a String:
```java
String name = new String("Lisa");  // using new
String name = "Lisa";              // shorthand (more common)
```

> [!info] Method Call Syntax
> ```java
> stringVariable.methodName(arguments);
> ```

### Common String Methods

> [!abstract] String Methods
> | Method | What it does |
> |---|---|
> | `charAt(index)` | Returns the char at that position |
> | `indexOf(ch)` | Returns index of first occurrence of `ch` |
> | `length()` | Returns number of characters |
> | `substring(start, end)` | Returns substring from `start` to `end - 1` |
> | `toLowerCase()` | Converts to lowercase |
> | `toUpperCase()` | Converts to uppercase |
> | `replace(old, new)` | Replaces all occurrences of a character |

> [!example] String Methods in Action
> ```java
> String s = "Hello World";
> 
> s.charAt(0);           // 'H'
> s.indexOf('o');        // 4
> s.length();            // 11
> s.substring(0, 5);     // "Hello"
> s.toLowerCase();       // "hello world"
> s.replace('l', 'x');   // "Hexxo Worxd"
> ```

---

## Formatting Output (printf)

Used for formatted output to the console.

> [!info] Syntax
> ```java
> System.out.printf(formatString, argumentList);
> ```

### Format Specifier Syntax

`%[argument_index$][flags][width][.precision]conversion`

> [!abstract] Common Conversions
> | Specifier | Description |
> |:---:|---|
> | `%s` | String |
> | `%d` | Decimal integer |
> | `%f` | Floating-point (decimal) |
> | `%e` | Scientific notation |
> | `%n` | Platform-independent newline |

> [!example] printf Examples
> ```java
> double area = 45.6789;
> 
> System.out.printf("Area is %f%n", area);      // Area is 45.678900
> System.out.printf("Area is %.2f%n", area);    // Area is 45.68
> System.out.printf("Area is %10.2f%n", area);  // Area is      45.68 (width 10)
> 
> int num = 42;
> System.out.printf("Number: %d%n", num);       // Number: 42
> System.out.printf("Number: %5d%n", num);      // Number:    42 (width 5)
> ```

---

## Parsing Numeric Strings (Wrapper Classes)

Sometimes you have a number as a String and need to convert it to an actual number. Use wrapper classes for this.

> [!abstract] Parsing Methods
> | Wrapper Class | Method | Returns |
> |---|---|---|
> | `Integer` | `Integer.parseInt(str)` | `int` |
> | `Float` | `Float.parseFloat(str)` | `float` |
> | `Double` | `Double.parseDouble(str)` | `double` |

> [!example] Parsing Examples
> ```java
> String numStr = "123";
> int num = Integer.parseInt(numStr);     // 123
> 
> String piStr = "3.14159";
> double pi = Double.parseDouble(piStr);  // 3.14159
> ```

> [!warning] Watch out
> If the string isn't a valid number, you'll get a `NumberFormatException`.

---

## String.format Method

Similar to `printf`, but instead of printing, it returns a formatted string.

> [!info] Syntax
> ```java
> String result = String.format(formatString, arguments);
> ```

> [!example] String.format Examples
> ```java
> String str = String.format("%.2f", 15.674);   // "15.67"
> String msg = String.format("Hello, %s!", "World");  // "Hello, World!"
> ```

Useful when you want to store the formatted result rather than immediately printing it.

