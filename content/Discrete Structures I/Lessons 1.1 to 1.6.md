# Propositional Logic

> [!summary] What this covers
> Propositions, logical connectives ($\neg,\ \land,\ \lor,\ \oplus,\ \to,\ \leftrightarrow$), truth tables, operator precedence, and bit operations.

## Contents

- [[#Introduction]]
- [[#Propositions]]
- [[#Propositional Variables and Truth Values]]
- [[#Logical Connectives]]
  - [[#Negation]]
  - [[#Conjunction]]
  - [[#Disjunction]]
  - [[#Exclusive Or (XOR)]]
- [[#Conditional Statements]]
  - [[#Converse, Contrapositive, and Inverse]]
- [[#Biconditionals]]
- [[#Truth Tables of Compound Propositions]]
- [[#Precedence of Logical Operators]]
- [[#Logic and Bit Operations]]
- [[#Historical Notes]]

---

## Introduction

So, logic gives precise meaning to mathematical statements, it's what helps us tell valid arguments from invalid ones. It's basically the foundation for understanding and constructing correct mathematical reasoning.

> [!tip] Applications
> Logic shows up everywhere in computer science: circuit design, program construction, correctness verification, and so on.

---

## Propositions

The basic unit of logic.

> [!definition] Proposition
> A declarative sentence that is either **true** or **false**, but not both.

> [!example] Example 1 — These are propositions
> | Statement | Truth Value |
> |---|:---:|
> | Washington, D.C., is the capital of the USA. | ✅ True |
> | Toronto is the capital of Canada. | ❌ False |
> | $1 + 1 = 2$ | ✅ True |
> | $2 + 2 = 3$ | ❌ False |

> [!example] Example 2 — These are NOT propositions
> 1. "What time is it?" — it's a question, not declarative
> 2. "Read this carefully." — that's a command, not declarative
> 3. $x + 1 = 2$ — can't say true or false without knowing $x$
> 4. $x + y = z$ — same deal, depends on the variables

---

## Propositional Variables and Truth Values

We use letters like $p, q, r, s$ to represent propositions — these are called propositional variables.

> [!info] Notation
> **T** = True, **F** = False. Simple enough.

> [!quote]+ Aristotle (384–322 B.C.E.)
> Born in Stagirus, northern Greece. His father was physician to the King of Macedonia. He was orphaned young, went to Athens at 17, and joined Plato's Academy for 20 years.
> 
> Interesting — he didn't get picked to succeed Plato when he died, so he ended up tutoring Alexander the Great and eventually founded his own school (the Lyceum). His followers were called "peripatetics" because he liked walking around while discussing philosophy.
> 
> Wrote systematic treatises on logic, philosophy, psychology, physics, natural history — foundational stuff that lasted centuries.

---

## Logical Connectives

This whole area is called **propositional calculus** or **propositional logic**.

**Compound propositions** are just new propositions formed from existing ones using **logical operators** (also called connectives).

> [!info]+ 📊 Logic Gates Overview
> ![[attachments/logic_gates.png]]
> *The symbols used in circuit design*

---

### Negation

> [!definition] Negation ($\neg$)
> $\neg p$ = "It is not the case that $p$" = "not $p$"
> 
> Just flips the truth value.

| $p$ | $\neg p$ |
|:---:|:---:|
| T | F |
| F | T |

> [!example] Example 3
> $p$ = "Michael's PC runs Linux"
> $\neg p$ = "Michael's PC does not run Linux"

> [!example] Example 4
> $p$ = "Vandana's smartphone has at least 32GB of memory"
> $\neg p$ = "Vandana's smartphone has less than 32GB of memory"

---

### Conjunction

> [!definition] Conjunction ($\land$)
> $p \land q$ = "$p$ and $q$"
> 
> Only true when **both** are true. Makes sense.

| $p$ | $q$ | $p \land q$ |
|:---:|:---:|:---:|
| T | T | T |
| T | F | F |
| F | T | F |
| F | F | F |

> [!example] Example 5
> $p$ = "Rebecca's PC has more than 16 GB free hard disk space"
> $q$ = "The processor in Rebecca's PC runs faster than 1 GHz"
> 
> $p \land q$ = "Rebecca's PC has more than 16 GB free hard disk space **and** the processor runs faster than 1 GHz."

---

### Disjunction

> [!definition] Disjunction ($\lor$)
> $p \lor q$ = "$p$ or $q$"
> 
> Only false when **both** are false. This is the **inclusive or** — true when at least one is true.

| $p$ | $q$ | $p \lor q$ |
|:---:|:---:|:---:|
| T | T | T |
| T | F | T |
| F | T | T |
| F | F | F |

> [!example] Example 6
> Same $p$ and $q$ from Example 5.
> 
> $p \lor q$ = "Rebecca's PC has at least 16 GB free **or** the processor runs faster than 1 GHz."
> 
> True if either condition holds, or if both do.

> [!tip] Inclusive vs. Exclusive "Or" in English
> Here's the thing — English is ambiguous about this:
> | Type | Example | Meaning |
> |---|---|---|
> | **Inclusive** | "Students who have taken calculus or CS can take this class." | Having both also counts |
> | **Exclusive** | "Soup or salad comes with an entrée." | One or the other, not both |

---

### Exclusive Or (XOR)

> [!abstract]+ 📊 OR vs XOR
> ![[attachments/or_vs_xor.png]]
> *∨ includes the overlap, ⊕ excludes it*

> [!definition] Exclusive Or ($\oplus$)
> $p \oplus q$ = true when **exactly one** of $p$ and $q$ is true. Not both.

| $p$ | $q$ | $p \oplus q$ |
|:---:|:---:|:---:|
| T | T | F |
| T | F | T |
| F | T | T |
| F | F | F |

> [!abstract] $\lor$ vs. $\oplus$ — the difference
> | | Inclusive ($\lor$) | Exclusive ($\oplus$) |
> |---|:---:|:---:|
> | Both true | T | **F** |
> | One true | T | T |
> | Both false | F | F |

---

## Conditional Statements

> [!definition] Conditional ($\to$)
> $p \to q$ = "If $p$, then $q$"
> 
> It's only false when $p$ is true and $q$ is false. Otherwise it's true.
> 
> $p$ = **hypothesis** (also called antecedent or premise)
> $q$ = **conclusion** (also called consequence)

| $p$ | $q$ | $p \to q$ |
|:---:|:---:|:---:|
| T | T | T |
| T | F | **F** |
| F | T | T |
| F | F | T |

> [!info] Different ways to say $p \to q$
> | | |
> |---|---|
> | if $p$, then $q$ | $p$ implies $q$ |
> | if $p$, $q$ | $p$ only if $q$ |
> | $p$ is sufficient for $q$ | a sufficient condition for $q$ is $p$ |
> | $q$ if $p$ | $q$ whenever $p$ |
> | $q$ when $p$ | $q$ is necessary for $p$ |
> | a necessary condition for $p$ is $q$ | $q$ follows from $p$ |
> | $q$ unless $\neg p$ | |

> [!example] Example 7
> $p$ = "Maria learns discrete mathematics"
> $q$ = "Maria will find a good job"
> 
> $p \to q$ = "If Maria learns discrete mathematics, then she will find a good job."
> 
> "Maria will find a good job **when** she learns discrete math." / "For Maria to get a good job, it's **sufficient** to learn discrete math." / "Maria will find a good job **unless** she doesn't learn discrete math."

> [!warning] About "only if" and "unless"
> "$p$ only if $q$" = $p \to q$
> Basically means $p$ can't be true when $q$ is false.
> 
> "$q$ unless $\neg p$" = $p \to q$
> If $\neg p$ is false (so $p$ is true), then $q$ has to be true.
> 
> ⚠️ Do NOT confuse "$p$ only if $q$" with "$q$ only if $p$". They're different!

> [!tip] Think of it like a promise
> Say a politician claims: "If I am elected, I will lower taxes."
> 
> | Scenario | Broken promise? |
> |---|:---:|
> | Elected, lowers taxes | ❌ Nope |
> | Elected, doesn't lower taxes | ✅ Yeah, that's a lie |
> | Not elected, lowers taxes anyway | ❌ Nope |
> | Not elected, doesn't lower taxes | ❌ Nope |
> 
> The promise only breaks when $p$ is true but $q$ is false.

> [!example] Example 8 — In programming
> ```
> if 2 + 2 = 4 then x := x + 1
> ```
> If $x = 0$ initially, what's $x$ after?
> 
> Well, $2 + 2 = 4$ is true, so the assignment runs. $x = 1$.

---

### Converse, Contrapositive, and Inverse

Given $p \to q$, there are three related statements worth knowing:

> [!tip]+ 📊 Relationship Map
> ![[attachments/conditional_relationships.png]]
> *Diagonal pairs are equivalent; horizontal/vertical pairs are not*

> [!abstract] Related Statements
> | Name | Statement | Equivalent to $p \to q$? |
> |---|:---:|:---:|
> | **Original** | $p \to q$ | — |
> | **Converse** | $q \to p$ | ❌ |
> | **Inverse** | $\neg p \to \neg q$ | ❌ |
> | **Contrapositive** | $\neg q \to \neg p$ | ✅ |

So the **contrapositive** is logically equivalent to the original, that's the important one. The converse and inverse are equivalent to *each other*, but not to the original.

Common mistake: assuming the converse or inverse means the same as the original. It doesn't.

> [!example] Example 9
> Original: "The home team wins whenever it is raining."
> Rewriting: "If it is raining, then the home team wins."
> 
> | Type | Statement | Equivalent? |
> |---|---|:---:|
> | Contrapositive | "If the home team doesn't win, it's not raining." | ✅ |
> | Converse | "If the home team wins, it is raining." | ❌ |
> | Inverse | "If it's not raining, the home team doesn't win." | ❌ |

---

## Biconditionals

> [!definition] Biconditional ($\leftrightarrow$)
> $p \leftrightarrow q$ = "$p$ if and only if $q$"
> 
> True when $p$ and $q$ have the **same truth value**. Both true or both false.

| $p$ | $q$ | $p \leftrightarrow q$ |
|:---:|:---:|:---:|
| T | T | T |
| T | F | F |
| F | T | F |
| F | F | T |

> [!info] Ways to say it
> "$p$ is necessary and sufficient for $q$"
> "if $p$ then $q$, and conversely"
> "$p$ iff $q$"
> 
> By the way, it has the same truth value as $(p \to q) \land (q \to p)$.

> [!example] Example 10
> $p$ = "You can take the flight"
> $q$ = "You buy a ticket"
> 
> $p \leftrightarrow q$ = "You can take the flight if and only if you buy a ticket."
> 
> | Scenario | Truth Value |
> |---|:---:|
> | Buy ticket, can fly | ✅ |
> | No ticket, can't fly | ✅ |
> | Free trip (no ticket but can fly) | ❌ |
> | Airline bumps you (ticket but can't fly) | ❌ |

> [!warning] Natural language can be sneaky
> "If you finish your meal, you can have dessert."
> 
> In everyday speech, this usually means "if and only if", no dessert otherwise. But in logic we need to be precise about whether we mean $\to$ or $\leftrightarrow$.

---

## Truth Tables of Compound Propositions

You can figure out complex expressions by building up step by step.

> [!example] Example 11
> Truth table for $(p \lor \neg q) \to (p \land q)$:
> 
> | $p$ | $q$ | $\neg q$ | $p \lor \neg q$ | $p \land q$ | $(p \lor \neg q) \to (p \land q)$ |
> |:---:|:---:|:---:|:---:|:---:|:---:|
> | T | T | F | T | T | **T** |
> | T | F | T | T | F | **F** |
> | F | T | F | F | F | **T** |
> | F | F | T | T | F | **F** |

---

## Precedence of Logical Operators

To avoid drowning in parentheses, operators follow a precedence order:

> [!info]+ 📊 Precedence Hierarchy
> ![[attachments/operator_precedence.png]]
> *Higher up = evaluated first*

> [!example] Examples
> | Expression | Actually means |
> |---|---|
> | $\neg p \land q$ | $(\neg p) \land q$ |
> | $p \land q \lor r$ | $(p \land q) \lor r$ |
> | $p \lor q \to r$ | $(p \lor q) \to r$ |
> 
> When in doubt, just throw in parentheses. Clarity helps.

---

## Logic and Bit Operations

Computers use **bits**, just 0 and 1.

> [!info] Truth values as bits
> | Truth | Bit |
> |:---:|:---:|
> | T | 1 |
> | F | 0 |
> 
> A **Boolean variable** holds true or false, which you can represent as a bit.

### Bit Operations

These work the same as logical connectives:

| $x$ | $y$ | OR | AND | XOR |
|:---:|:---:|:---:|:---:|:---:|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 | 0 |

### Bit Strings

> [!definition] Bit String
> Just a sequence of bits. The length is how many bits there are.

> [!example] Example 12
> `101010011` has length **9**.

> [!example] Example 13 — Bitwise operations
> Find OR, AND, XOR of `01 1011 0110` and `11 0001 1101`:
> ```
>      01 1011 0110
>      11 0001 1101
>      ────────────
> OR:  11 1011 1111
> AND: 01 0001 0100
> XOR: 10 1010 1011
> ```

---

## Historical Notes

> [!quote]+ George Boole (1815–1864)
> Son of a cobbler, born in Lincoln, England. His family was poor, but he became one of the most important mathematicians of the 1800s anyway.
> 
> Published *The Mathematical Analysis of Logic* in 1848, then *The Laws of Thought* in 1854 — that's where **Boolean algebra** comes from.
> 
> Died from pneumonia after giving a lecture while soaking wet from a rainstorm. Dedication, honestly.

> [!quote]+ John Wilder Tukey (1915–2000)
> Born in New Bedford, Massachusetts. Education at Brown, PhD from Princeton in 1939.
> 
> Made major contributions to statistics, co-invented the **Fast Fourier Transform**.
> 
> Fun fact: he coined the terms **"bit"** (1946) and **"software"**. Also received the National Medal of Science.

---

## Reference

> [!success] Connectives Summary
> | Connective | Symbol | Name | True when... |
> |---|:---:|---|---|
> | Negation | $\neg p$ | NOT | $p$ is false |
> | Conjunction | $p \land q$ | AND | Both true |
> | Disjunction | $p \lor q$ | OR | At least one true |
> | Exclusive Or | $p \oplus q$ | XOR | Exactly one true |
> | Conditional | $p \to q$ | IF-THEN | $p$ false OR $q$ true |
> | Biconditional | $p \leftrightarrow q$ | IFF | Same truth value |

---

## Exercises

> [!example] Exercise — Contrapositives
> ### a) If it snows today, I will ski tomorrow.
> **Contrapositive:** "If I do not ski tomorrow, then it did not snow today."
> 
> ### b) I come to class whenever there is going to be a quiz.
> **Contrapositive:** "If I do not come to class, then there is not going to be a quiz."

> [!example] Exercise — Translation
> **Statement:** "To use the wireless network in the airport you must pay the daily fee unless you are a subscriber to the service."
> 
> **Propositions:**
> - $w$: "You can use the wireless network in the airport"
> - $d$: "You pay the daily fee"
> - $s$: "You are a subscriber to the service"
> 
> **Answer:** $w \to (d \lor s)$
> 
> Alternatively: $(w \land \neg s) \to d$  "if you use the network and you're not a subscriber, then you pay." Both are logically equivalent.

> [!example] Exercise — Translation
> **Statement:** "You are eligible to be President of the U.S.A. only if you are at least 35 years old, were born in the U.S.A, or at the time of your birth both of your parents were citizens, and you have lived at least 14 years in the country."
> 
> **Propositions:**
> - $e$: "You are eligible to be President of the U.S.A."
> - $a$: "You are at least 35 years old"
> - $b$: "You were born in the U.S.A"
> - $p$: "At the time of your birth, both of your parents were citizens"
> - $r$: "You have lived at least 14 years in the U.S.A."
> 
> **Answer:** $e \to (a \land (b \lor p) \land r)$

# Applications of Propositional Logic

> [!summary] What this covers
> Translating English to logic, system specifications, propositional equivalences (tautologies, contradictions, De Morgan's Laws), and satisfiability.

## Contents

- [[#Translating English Sentences]]
- [[#System Specifications]]
- [[#Propositional Equivalences]]
- [[#De Morgan's Laws]]
- [[#Logical Equivalences]]
- [[#Equivalence Proofs]]
- [[#Propositional Satisfiability]]

---

## Translating English Sentences

Converting English to propositional logic:
1. Identify atomic propositions → assign variables
2. Determine the logical connectives

> [!example] Translation Example
> "If I go to Harry's or to the country, I will not go shopping."
> 
> Variables:
> - $p$: I go to Harry's
> - $q$: I go to the country
> - $r$: I will go shopping
> 
> **Logic:** $(p \lor q) \to \neg r$

> [!example] "Only if" Translation
> "You can access the Internet from campus **only if** you are a computer science major **or** you are **not** a freshman."
> 
> Variables:
> - $a$: You can access the internet from campus
> - $c$: You are a computer science major
> - $f$: You are a freshman
> 
> **Logic:** $a \to (c \lor \neg f)$

---

## System Specifications

Engineers take requirements in English and express them precisely using logic.

> [!example] System Spec Example
> "The automated reply cannot be sent when the file system is full."
> 
> - $x$: The automated reply can be sent
> - $y$: The file system is full
> 
> **Logic:** $y \to \neg x$

---

## Propositional Equivalences

> [!info]+ 📊 Tautology vs Contradiction
> ![[attachments/tautology_contradiction.png]]
> *A tautology is always true; a contradiction is always false*

> [!definition] Terms
> **Tautology** — a proposition that's always true (e.g., $p \lor \neg p$)
> 
> **Contradiction** — a proposition that's always false (e.g., $p \land \neg p$)
> 
> **Contingency** — neither tautology nor contradiction (depends on values)

| $p$ | $\neg p$ | $p \lor \neg p$ | $p \land \neg p$ |
| :-: | :------: | :-------------: | :--------------: |
|  T  |    F     |        T        |        F         |
|  F  |    T     |        T        |        F         |

### Logical Equivalence

Two propositions $p$ and $q$ are **logically equivalent** if $p \leftrightarrow q$ is a tautology.

We write: $p \equiv q$ or $p \Leftrightarrow q$

They're equivalent if their truth table columns match.

> [!example] Equivalence Example
> $\neg p \lor q$ is equivalent to $p \to q$:
> 
> | $p$ | $q$ | $\neg p$ | $\neg p \lor q$ | $p \to q$ |
> |:---:|:---:|:---:|:---:|:---:|
> | T | T | F | T | T |
> | T | F | F | F | F |
> | F | T | T | T | T |
> | F | F | T | T | T |

---
## De Morgan's Laws

Named after Augustus De Morgan (1806-1871).

> [!info]+ 📊 De Morgan's Laws
> ![[attachments/demorgan_laws.png]]
> *NOT distributes and flips the operator*
> Negation distributes and flips AND↔OR.

| $p$ | $q$ | $\neg p$ | $\neg q$ | $p \lor q$ | $\neg(p \lor q)$ | $\neg p \land \neg q$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| T | T | F | F | T | F | F |
| T | F | F | T | T | F | F |
| F | T | T | F | T | F | F |
| F | F | T | T | F | T | T |

---

## Logical Equivalences

> [!abstract] Fundamental Laws
> | Law | Equivalence |
> |---|---|
> | **Identity** | $p \land T \equiv p$, $p \lor F \equiv p$ |
> | **Domination** | $p \lor T \equiv T$, $p \land F \equiv F$ |
> | **Idempotent** | $p \lor p \equiv p$, $p \land p \equiv p$ |
> | **Double Negation** | $\neg(\neg p) \equiv p$ |
> | **Negation** | $p \lor \neg p \equiv T$, $p \land \neg p \equiv F$ |
> | **Commutative** | $p \lor q \equiv q \lor p$, $p \land q \equiv q \land p$ |
> | **Associative** | $(p \lor q) \lor r \equiv p \lor (q \lor r)$ |
> | **Distributive** | $p \lor (q \land r) \equiv (p \lor q) \land (p \lor r)$ |
> | **Absorption** | $p \lor (p \land q) \equiv p$, $p \land (p \lor q) \equiv p$ |

### Conditional Equivalences

> [!info] Involving $\to$
> - $p \to q \equiv \neg p \lor q$
> - $p \to q \equiv \neg q \to \neg p$ (contrapositive)
> - $\neg(p \to q) \equiv p \land \neg q$

### Biconditional Equivalences

> [!info] Involving $\leftrightarrow$
> - $p \leftrightarrow q \equiv (p \to q) \land (q \to p)$
> - $p \leftrightarrow q \equiv (p \land q) \lor (\neg p \land \neg q)$

---

## Equivalence Proofs

To prove $A \equiv B$, chain equivalences: $A \equiv A_1 \equiv \ldots \equiv B$

> [!example] Proof 1
> **Show:** $\neg(p \lor (\neg p \land q)) \equiv \neg p \land \neg q$
> 
> $$
> \begin{aligned}
> \neg(p \lor (\neg p \land q)) &\equiv \neg p \land \neg(\neg p \land q) & \text{(De Morgan)} \\
> &\equiv \neg p \land (p \lor \neg q) & \text{(De Morgan + Double Neg)} \\
> &\equiv (\neg p \land p) \lor (\neg p \land \neg q) & \text{(Distributive)} \\
> &\equiv F \lor (\neg p \land \neg q) & \text{(Negation law)} \\
> &\equiv \neg p \land \neg q & \text{(Identity)}
> \end{aligned}
> $$

> [!example] Proof 2 — Tautology
> **Show:** $(p \land q) \to (p \lor q)$ is a tautology
> 
> $$
> \begin{aligned}
> (p \land q) \to (p \lor q) &\equiv \neg(p \land q) \lor (p \lor q) \\
> &\equiv (\neg p \lor \neg q) \lor (p \lor q) & \text{(De Morgan)} \\
> &\equiv (\neg p \lor p) \lor (\neg q \lor q) & \text{(Rearrange)} \\
> &\equiv T \lor T \equiv T
> \end{aligned}
> $$

---
## Propositional Satisfiability

> [!definition] Satisfiability
> A compound proposition is **satisfiable** if some assignment of truth values makes it true.
> 
> If no assignment works, it's **unsatisfiable** (and its negation is a tautology).

> [!example] Satisfiability Examples
> **1.** $(p \lor \neg q) \land (q \lor \neg r) \land (r \lor \neg p)$
> ✅ Satisfiable — set $p, q, r$ all to T
> 
> **2.** $(p \lor q \lor r) \land (\neg p \lor \neg q \lor \neg r)$
> ✅ Satisfiable — set $p = T$, $q = F$
> 
> **3.** Combining 1 and 2:
> ❌ Not satisfiable — no assignment works

---
## Notation
> [!info] Shorthand
> $\bigvee_{j=1}^{n} p_j$ is used for $p_1 \lor p_2 \lor \ldots \lor p_n$
> 
> $\bigwedge_{j=1}^{n} p_j$ is used for $p_1 \land p_2 \land \ldots \land p_n$


>[!example] Exercise Answers
> **Prove:** $\neg (p \neg q) \lor (\neg p \land q) \equiv (\neg p \land \neg (\neg q)) \lor (\neg p \land \neg q)$ 
> $$
> \begin{aligned}
> &\equiv (\neg p \land \neg (\neg q)) \lor (\neg p \land \neg q) & \text{(De Morgan's Law)} \\
> &\equiv (\neg p \land q) \lor (\neg p \land \neg q) & \text{(Double Negation)} \\
> &\equiv \neg p \land (q \lor \neg q) & \text{(Distributive)} \\
> &\equiv \neg p \land T & \text{(Negation)} \\
> &\equiv \neg p & \text{(Identity)}
> \end{aligned}
> $$ 
# Predicates and Quantifiers

> [!summary] What this covers
> Predicate logic, propositional functions, universal ($\forall$) and existential ($\exists$) quantifiers, negating quantified expressions, and translating English to logic.

## Contents

- [[#Why Propositional Logic Isn't Enough]]
- [[#Predicate Logic Basics]]
- [[#Propositional Functions]]
- [[#Quantifiers]]
- [[#Negating Quantified Expressions]]
- [[#Translating English to Logic]]

---

## Why Propositional Logic Isn't Enough

Consider this classic argument:
- "All men are mortal."
- "Socrates is a man."
- Therefore: "Socrates is mortal."

This can't be represented in propositional logic. We need a language that talks about **objects**, their **properties**, and their **relations**. That's where predicate logic comes in.

---

## Predicate Logic Basics

Predicate logic introduces:

> [!info] New Features
> **Variables:** $x, y, z$ — represent objects from a domain
> 
> **Predicates:** $P(x), M(x)$ — properties that can be true or false
> 
> **Quantifiers:** $\forall$ (for all), $\exists$ (there exists)

---

## Propositional Functions

A **propositional function** contains variables and a predicate, like $P(x)$. It becomes a proposition (with a truth value) when the variable is replaced by a value from the domain.

> [!definition] Propositional Function
> $P(x)$ is the value of the propositional function $P$ at $x$.
> 
> The **domain** (often denoted $U$) is the set of possible values for the variable.

> [!example] Example
> Let $P(x)$ denote "$x > 0$" with domain = integers.
> 
> $P(-3)$ is **false**
> $P(0)$ is **false**
> $P(3)$ is **true**

> [!example] Multi-variable Example
> Let $R(x, y, z)$ denote "$x + y = z$" with $U$ = integers.
> 
> $R(2, -1, 5)$ → **F** (since $2 + (-1) = 1 \neq 5$)
> $R(3, 4, 7)$ → **T** (since $3 + 4 = 7$)
> $R(x, 3, z)$ → **Not a proposition** (variables aren't bound)

### Compound Expressions

Connectives from propositional logic carry over. If $P(x)$ denotes "$x > 0$":

| Expression | Value |
|---|:---:|
| $P(3) \lor P(-1)$ | T |
| $P(3) \land P(-1)$ | F |
| $P(3) \to P(-1)$ | F |
| $P(3) \to \neg P(-1)$ | T |

But expressions with free variables like $P(3) \land P(y)$ or $P(x) \to P(y)$ are **not propositions** until the variables are bound.

---
	
## Quantifiers

We need quantifiers to express words like "all" and "some."

> [!abstract] The Two Quantifiers
> | Symbol | Name | Meaning |
> |:---:|---|---|
> | $\forall$ | Universal | "For all" — $\forall x\, P(x)$ means $P(x)$ is true for **every** $x$ |
> | $\exists$ | Existential | "There exists" — $\exists x\, P(x)$ means $P(x)$ is true for **some** $x$ |
> 
> The quantifier **binds** the variable $x$.

### Universal Quantifier ($\forall$)

$\forall x\, P(x)$ is read "For all $x$, $P(x)$" or "For every $x$, $P(x)$."

> [!example] Universal Examples
> Let $P(x)$ = "$x > 0$"
> 
> If $U$ = integers: $\forall x\, P(x)$ is **false** (negative integers exist)
> 
> If $U$ = positive integers: $\forall x\, P(x)$ is **true**

### Existential Quantifier ($\exists$)

$\exists x\, P(x)$ is read "There exists an $x$ such that $P(x)$" or "For some $x$, $P(x)$."

> [!example] Existential Examples
> Let $P(x)$ = "$x > 0$"
> 
> If $U$ = integers: $\exists x\, P(x)$ is **true**
> 
> Let $P(x)$ = "$x < 0$"
> 
> If $U$ = positive integers: $\exists x\, P(x)$ is **false**

### Quantifiers as Conjunctions/Disjunctions

If the domain is finite, you can think of:
- $\forall x\, P(x)$ as $P(x_1) \land P(x_2) \land \ldots \land P(x_n)$
- $\exists x\, P(x)$ as $P(x_1) \lor P(x_2) \lor \ldots \lor P(x_n)$

### Precedence

Quantifiers $\forall$ and $\exists$ have **higher precedence** than all logical operators.

So $\forall x\, P(x) \lor Q(x)$ means $(\forall x\, P(x)) \lor Q(x)$, not $\forall x\, (P(x) \lor Q(x))$.

---

## Negating Quantified Expressions

> [!info]+ 📊 De Morgan's Laws for Quantifiers
> ![[attachments/quantifier_negation.png]]
> *Negation flips the quantifier and negates the predicate*

> [!abstract] De Morgan's Laws for Quantifiers
> | Statement | Equivalent |
> |---|---|
> | $\neg \forall x\, P(x)$ | $\exists x\, \neg P(x)$ |
> | $\neg \exists x\, P(x)$ | $\forall x\, \neg P(x)$ |
> 
> "Not all" = "There exists one that doesn't"
> "None exist" = "All don't"

> [!example] Negation Example
> Statement: "Every student in your class has taken Java."
> $\forall x\, J(x)$
> 
> Negation: "There is a student who has NOT taken Java."
> $\neg \forall x\, J(x) \equiv \exists x\, \neg J(x)$

---

## Translating English to Logic

The key is to first decide on the domain $U$.

> [!example] "Every student in this class has taken Java"
> **Option 1:** If $U$ = students in this class
> $\forall x\, J(x)$
> 
> **Option 2:** If $U$ = all people
> $\forall x\, (S(x) \to J(x))$
> where $S(x)$ = "$x$ is a student in this class"

> [!example] "Some student in this class has taken Java"
> **Option 1:** If $U$ = students in this class
> $\exists x\, J(x)$
> 
> **Option 2:** If $U$ = all people
> $\exists x\, (S(x) \land J(x))$

> [!warning] Pattern to Remember
> "All A are B" → $\forall x\, (A(x) \to B(x))$ — uses **implication**
> 
> "Some A are B" → $\exists x\, (A(x) \land B(x))$ — uses **conjunction**

### More Translation Examples

Using domain $U$ = {fleegles, snurds, thingamabobs}

| English | Logic |
|---|---|
| "Everything is a fleegle" | $\forall x\, F(x)$ |
| "Nothing is a snurd" | $\neg \exists x\, S(x) \equiv \forall x\, \neg S(x)$ |
| "All fleegles are snurds" | $\forall x\, (F(x) \to S(x))$ |
| "Some fleegles are thingamabobs" | $\exists x\, (F(x) \land T(x))$ |
| "No snurd is a thingamabob" | $\neg \exists x\, (S(x) \land T(x)) \equiv \forall x\, (\neg S(x) \lor \neg T(x))$ |
| "If any fleegle is a snurd, it's also a thingamabob" | $\forall x\, ((F(x) \land S(x)) \to T(x))$ |

---

## Returning to Socrates

Now we can express the classic argument:

Let $Man(x)$ = "$x$ is a man", $Mortal(x)$ = "$x$ is mortal", domain = all people.

> [!abstract] The Argument
> **Premise 1:** $\forall x\, (Man(x) \to Mortal(x))$ — "All men are mortal"
> 
> **Premise 2:** $Man(Socrates)$ — "Socrates is a man"
> 
> **Conclusion:** $Mortal(Socrates)$ — "Socrates is mortal"

---

## Exercises

Translate each statement into logical expressions using predicates, quantifiers, and logical connectives.

**Setup:** Let $U$ = all people, $F(x)$ = "$x$ is your friend", $P(x)$ = "$x$ is perfect"

> [!example] Exercise 1 — "No one is perfect."
> This means there does not exist anyone who is perfect.
> 
> $\neg \exists x\, P(x)$
> 
> Equivalently: $\forall x\, \neg P(x)$ — "Everyone is not perfect"

> [!example] Exercise 2 — "Not everyone is perfect."
> This means it is not the case that all people are perfect.
> 
> $\neg \forall x\, P(x)$
> 
> Equivalently: $\exists x\, \neg P(x)$ — "There exists someone who is not perfect"
> 
> Note: This is different from "No one is perfect" — here at least one person might still be perfect.

> [!example] Exercise 3 — "All your friends are perfect."
> For all $x$, if $x$ is your friend, then $x$ is perfect.
> 
> $\forall x\, (F(x) \to P(x))$
> 
> Uses implication because it's an "All A are B" statement.

> [!example] Exercise 4 — "At least one of your friends is perfect."
> There exists an $x$ such that $x$ is your friend AND $x$ is perfect.
> 
> $\exists x\, (F(x) \land P(x))$
> 
> Uses conjunction because it's a "Some A are B" statement.

> [!example] Exercise 5 — "Everyone is your friend and is perfect."
> For all $x$, $x$ is your friend AND $x$ is perfect.
> 
> $\forall x\, (F(x) \land P(x))$
> 
> This is stronger than Exercise 3 — it says everyone (not just friends) satisfies both properties.

> [!example] Exercise 6 — "Not everybody is your friend or someone is not perfect."
> This is a disjunction of two parts:
> - "Not everybody is your friend" = $\neg \forall x\, F(x)$
> - "Someone is not perfect" = $\exists x\, \neg P(x)$
> 
> $\neg \forall x\, F(x) \lor \exists x\, \neg P(x)$
> 
> Equivalently: $\exists x\, \neg F(x) \lor \exists x\, \neg P(x)$
# Nested Quantifiers

> [!summary] What this covers
> Nested quantifiers, order of quantifiers, translating between English and logic, and negating nested quantified expressions using De Morgan's Laws.

## Contents

- [[#Why Nest Quantifiers?]]
- [[#Order of Quantifiers]]
- [[#Quantifications of Two Variables]]
- [[#Translating Nested Quantifiers to English]]
- [[#Translating English to Predicate Logic]]
- [[#Negating Nested Quantifiers]]
- [[#Exercises]]

---

## Why Nest Quantifiers?

Sometimes one quantifier isn't enough. When we want to express more complex ideas, like "every real number has an inverse", we need to stack them.

> [!example] Basic Nested Quantifier
> "Every real number has an inverse" becomes:
> $$\forall x \exists y(x + y = 0)$$
> where the domain of $x$ and $y$ is the real numbers.
> 
> Breaking it down: For every $x$, there exists some $y$ such that $x + y = 0$.

Nested quantifiers can be viewed as nested propositional functions:
- $\forall x \exists y(x + y = 0)$ can be viewed as $\forall x\, Q(x)$
- where $Q(x)$ is $\exists y\, P(x, y)$
- where $P(x, y)$ is $(x + y = 0)$

Just layering predicates on top of each other. The outer quantifier "wraps" the inner one.

---

## Order of Quantifiers

The **order matters** when using different quantifiers. If they're the same quantifiers you can swap them. If they're different ones, you can't.

> [!info]+ 📊 Quantifier Order Overview
> ![[attachments/quantifier_order.png]]
> *Same quantifiers can swap; mixed quantifiers cannot*

> [!info] When Order Doesn't Matter
> $\forall x \forall y\, P(x,y) \equiv \forall y \forall x\, P(x,y)$
> 
> $\exists x \exists y\, P(x,y) \equiv \exists y \exists x\, P(x,y)$
> 
> Same type of quantifier = order is interchangeable.

> [!warning] When Order DOES Matter
> $\forall x \exists y\, P(x,y) \not\equiv \exists y \forall x\, P(x,y)$
> 
> Mixing $\forall$ and $\exists$ = order changes the meaning!

> [!example] Order Matters
> Let $Q(x,y)$ be "$x + y = 0$" with $U$ = real numbers.
> 
> | Statement | Meaning | Truth Value |
> |---|---|:---:|
> | $\forall x \exists y\, Q(x,y)$ | "For every $x$, there's a $y$ making $x + y = 0$" | ✅ True |
> | $\exists y \forall x\, Q(x,y)$ | "There's one $y$ that works for ALL $x$" | ❌ False |
> 
> The first is true because every number has an inverse. The second is false because no single $y$ can be the inverse of *every* $x$.

### Practice Problems

> [!example] Example 1: Multiplication by Zero
> Let $U$ = real numbers, $P(x,y) : x \cdot y = 0$
> 
> | Statement | Truth Value | Why? |
> |---|:---:|---|
> | $\forall x \forall y\, P(x,y)$ | ❌ False | Not every pair multiplies to 0 (e.g., $2 \cdot 3 \neq 0$) |
> | $\forall x \exists y\, P(x,y)$ | ✅ True | For any $x$, just pick $y = 0$ |
> | $\exists x \forall y\, P(x,y)$ | ✅ True | $x = 0$ works for all $y$ |
> | $\exists x \exists y\, P(x,y)$ | ✅ True | $x = 0, y = 0$ works |

> [!example] Example 2: Division Equals One
> Let $U$ = real numbers, $P(x,y) : x / y = 1$
> 
> | Statement | Truth Value | Why? |
> |---|:---:|---|
> | $\forall x \forall y\, P(x,y)$ | ❌ False | Obviously not all divisions equal 1 |
> | $\forall x \exists y\, P(x,y)$ | ❌ False | $x = 0$ has no $y$ such that $0/y = 1$ |
> | $\exists x \forall y\, P(x,y)$ | ❌ False | No single $x$ divided by all $y$ gives 1 |
> | $\exists x \exists y\, P(x,y)$ | ✅ True | $x = 1, y = 1$ works |

---

## Quantifications of Two Variables

Different quantifier combinations have different "strengths." $\forall x \forall y$ is the strongest claim (must hold for all pairs), while $\exists x \exists y$ is the weakest (just needs one pair to work).

> [!info]+ 📊 Two Variable Quantification Grid
> ![[attachments/quantification_grid.png]]
> *Stronger claims at top-left, weaker at bottom-right*

> [!abstract] Truth Conditions Summary
> | Statement | When True | When False |
> |:---|:---|:---|
> | $\forall x \forall y\, P(x,y)$ | $P(x,y)$ is true for **every** pair $x, y$ | There exists a pair where $P(x,y)$ is false |
> | $\forall x \exists y\, P(x,y)$ | For every $x$, there's **some** $y$ making it true | There's an $x$ with no suitable $y$ |
> | $\exists x \forall y\, P(x,y)$ | There's an $x$ that works for **all** $y$ | For every $x$, some $y$ makes it false |
> | $\exists x \exists y\, P(x,y)$ | There's **at least one** pair where it's true | It's false for every pair |

> [!tip] Reading Tip
> Read left to right, inside to outside. "$\forall x \exists y$" = "For every $x$, there exists a $y$..."

---

## Translating Nested Quantifiers to English

Going from symbols to words. Work from the outermost quantifier inward, translating each piece. The structure of the formula mirrors the structure of the English sentence.

> [!example] Translation Example
> $$\forall x (C(x) \lor \exists y (C(y) \land F(x, y)))$$
> 
> Where:
> - $C(x)$ = "$x$ has a computer"
> - $F(x,y)$ = "$x$ and $y$ are friends"
> - Domain = all students in your school
> 
> **Translation:** "Every student in your school has a computer or has a friend who has a computer."
> 
> Breaking it down:
> - $\forall x$ → "For every student..."
> - $C(x) \lor ...$ → "...either they have a computer OR..."
> - $\exists y (C(y) \land F(x, y))$ → "...there exists someone who has a computer AND is their friend"

---

## Translating English to Predicate Logic

Going the other direction. The trick is to identify the quantifiers hiding in plain English. Words like "every," "all," "any" suggest $\forall$. Words like "some," "there exists," "at least one" suggest $\exists$.

> [!example] Math Statement Translation
> **English:** "The sum of two positive integers is always positive."
> 
> **Step 1:** Make the quantifiers explicit
> → "For every two integers, if they are both positive, then their sum is positive."
> 
> **Step 2:** Introduce variables and domain
> → "For all integers $x$ and $y$, if $x > 0$ and $y > 0$, then $x + y > 0$."
> 
> **Step 3:** Write in logic
> $$\forall x \forall y ((x > 0) \land (y > 0) \to (x + y > 0))$$
> where the domain is all integers.

> [!example] Complex Translation: Airlines
> **English:** "There is a woman who has taken a flight on every airline in the world."
> 
> **Setup:**
> - $P(w,f)$ = "$w$ has taken flight $f$"
> - $Q(f,a)$ = "$f$ is a flight on airline $a$"
> - Domain of $w$ = all women
> - Domain of $f$ = all flights
> - Domain of $a$ = all airlines
> 
> **Logic:**
> $$\exists w \forall a \exists f (P(w,f) \land Q(f,a))$$
> 
> Read it: "There exists a woman such that for every airline, there exists a flight that she has taken AND that flight is on that airline."

### Quick Translation Practice

> [!example] Common Patterns
> | English | Logic |
> |---|---|
> | "Brothers are siblings." | $\forall x \forall y (B(x,y) \to S(x,y))$ |
> | "Siblinghood is symmetric." | $\forall x \forall y (S(x,y) \to S(y,x))$ |
> | "Everybody loves somebody." | $\forall x \exists y\, L(x,y)$ |
> | "There is someone who is loved by everyone." | $\exists y \forall x\, L(x,y)$ |
> | "There is someone who loves someone." | $\exists x \exists y\, L(x,y)$ |
> | "Everyone loves himself." | $\forall x\, L(x,x)$ |

Notice how "everybody loves somebody" ($\forall x \exists y$) is very different from "there is someone loved by everyone" ($\exists y \forall x$). The first says each person has *their own* someone; the second says there's *one person* loved by all.

---

## Negating Nested Quantifiers

Same idea as before with De Morgan's Laws for quantifiers, but now we apply them repeatedly. Each time we push the negation past a quantifier, we flip it ($\forall \leftrightarrow \exists$). Keep going until the negation reaches the innermost predicate.

> [!info]+ 📊 Negation Flow
> ![[attachments/nested_quantifier_negation.png]]
> *Push negation inward, flipping quantifiers as you go*

> [!abstract] De Morgan's for Nested Quantifiers
> Push negation inward:
> - $\neg \forall$ becomes $\exists \neg$
> - $\neg \exists$ becomes $\forall \neg$
> 
> Keep going until the negation reaches the predicate, then apply regular De Morgan's.

> [!example] Full Negation Walkthrough
> **Original:** "There is a woman who has taken a flight on every airline."
> $$\exists w \forall a \exists f (P(w,f) \land Q(f,a))$$
> 
> **Negation:** "There does NOT exist such a woman."
> $$\neg \exists w \forall a \exists f (P(w,f) \land Q(f,a))$$
> 
> **Push the negation inward step by step:**
> 
> | Step | Expression | Rule Applied |
> |:---:|---|---|
> | 1 | $\neg \exists w \forall a \exists f (P(w,f) \land Q(f,a))$ | Start |
> | 2 | $\forall w \neg \forall a \exists f (P(w,f) \land Q(f,a))$ | $\neg\exists \to \forall\neg$ |
> | 3 | $\forall w \exists a \neg \exists f (P(w,f) \land Q(f,a))$ | $\neg\forall \to \exists\neg$ |
> | 4 | $\forall w \exists a \forall f \neg (P(w,f) \land Q(f,a))$ | $\neg\exists \to \forall\neg$ |
> | 5 | $\forall w \exists a \forall f (\neg P(w,f) \lor \neg Q(f,a))$ | De Morgan's for $\land$ |
> 
> **Back to English:**
> "For every woman, there is an airline such that for all flights, this woman has not taken that flight OR that flight is not on this airline."
> 
> Basically: No matter which woman you pick, you can find an airline she hasn't fully covered.

---

## Exercises

> [!example] Exercise 1: Evaluate Truth Values
> Let $U$ = positive integers, $P(x,y) : x \leq y$
> 
> Determine the truth value:
> 1. $\forall x \forall y\, P(x,y)$ → **False** (not all pairs satisfy $x \leq y$)
> 2. $\forall x \exists y\, P(x,y)$ → **True** (for any $x$, pick $y = x$)
> 3. $\exists x \forall y\, P(x,y)$ → **True** ($x = 1$ works, since $1 \leq y$ for all positive $y$)
> 4. $\exists x \exists y\, P(x,y)$ → **True** ($x = 1, y = 2$ works)

> [!example] Exercise 2: Translate to Logic
> "Every student has taken at least one course."
> 
> Let $S(x)$ = "$x$ is a student", $C(y)$ = "$y$ is a course", $T(x,y)$ = "$x$ has taken $y$"
> 
> **Answer:** $\forall x (S(x) \to \exists y (C(y) \land T(x,y)))$

> [!example] Exercise 3: Negate and Simplify
> Negate: $\forall x \exists y\, P(x,y)$
> 
> **Answer:**
> $$\neg \forall x \exists y\, P(x,y) \equiv \exists x \neg \exists y\, P(x,y) \equiv \exists x \forall y \neg P(x,y)$$
> 
> "There exists an $x$ such that for all $y$, $P(x,y)$ is false."
# Rules of Inference

> [!summary] What this covers
> Valid arguments, rules of inference for propositional logic (Modus Ponens, Modus Tollens, etc.), rules of inference for quantified statements (UI, UG, EI, EG), and constructing valid arguments.

## Contents

- [[#Arguments and Validity]]
- [[#Rules of Inference for Propositional Logic]]
- [[#Building Valid Arguments]]
- [[#Rules of Inference for Quantified Statements]]
- [[#Quantified Argument Examples]]

---

## Arguments and Validity

Recall the Socrates example from predicate logic:
- "All men are mortal."
- "Socrates is a man."
- Therefore: "Socrates is mortal."

We intuitively know this conclusion follows from the premises. But how do we *formally* justify it? That's what rules of inference are for. They give us a rigorous way to derive conclusions from premises.

This can be expressed as an argument with premises above the line and conclusion below:

$$\frac{\forall x(Man(x) \to Mortal(x)) \\ Man(Socrates)}{\therefore Mortal(Socrates)}$$

> [!definition] Argument
> A sequence of propositions where all but the final one are **premises** and the last is the **conclusion**.
> 
> An argument is **valid** if the premises imply the conclusion.

> [!info] Validity as Tautology
> If premises are $p_1, p_2, \ldots, p_n$ and conclusion is $q$, then the argument is valid if:
> $$(p_1 \land p_2 \land \ldots \land p_n) \to q$$
> is a tautology.
> 
> So basically, "if all premises are true, the conclusion *must* be true."

We construct valid arguments in two stages:
1. **Propositional Logic:** Basic inference rules
2. **Predicate Logic:** Propositional rules + rules for quantifiers

---

## Rules of Inference for Propositional Logic

These are the building blocks for constructing valid arguments. Each rule is a simple, proven argument form that we can apply whenever the pattern matches.

> [!info]+ 📊 Rules Overview
> ![[attachments/inference_rules.png]]
> *Propositional rules on left, quantifier rules on right*

### Modus Ponens

The most common and intuitive rule. "If P then Q. P is true. So Q must be true."

$$\frac{p \to q \\ p}{\therefore q}$$

> [!info] Corresponding Tautology
> $(p \land (p \to q)) \to q$

> [!example] Modus Ponens
> - $p$: "It is snowing."
> - $q$: "I will study discrete math."
> 
> "If it is snowing, then I will study discrete math."
> "It is snowing."
> **Therefore:** "I will study discrete math."
> 
> The condition was met, so the consequence follows. Simple as that.

---

### Modus Tollens

The "contrapositive reasoning" rule. If P implies Q, and Q is false, then P must have been false too. Otherwise, P being true would have made Q true (contradiction).

$$\frac{p \to q \\ \neg q}{\therefore \neg p}$$

> [!info] Corresponding Tautology
> $(\neg q \land (p \to q)) \to \neg p$

> [!example] Modus Tollens
> - $p$: "It is snowing."
> - $q$: "I will study discrete math."
> 
> "If it is snowing, then I will study discrete math."
> "I will not study discrete math."
> **Therefore:** "It is not snowing."
> 
> The consequence didn't happen, so the condition couldn't have been true. Reasoning backwards.

---

### Hypothetical Syllogism

Chaining implications together. If A leads to B, and B leads to C, then A leads to C. Lets you skip the middle step.

$$\frac{p \to q \\ q \to r}{\therefore p \to r}$$

> [!info] Corresponding Tautology
> $((p \to q) \land (q \to r)) \to (p \to r)$

> [!example] Hypothetical Syllogism
> - $p$: "It snows."
> - $q$: "I will study discrete math."
> - $r$: "I will get an A."
> 
> "If it snows, then I will study discrete math."
> "If I study discrete math, I will get an A."
> **Therefore:** "If it snows, I will get an A."
> 
> Chained the implications together. The middle step ($q$) served as a bridge.

### Disjunctive Syllogism

Process of elimination. If it's one or the other, and it's not this one, then it must be that one.

$$\frac{p \lor q \\ \neg p}{\therefore q}$$

> [!info] Corresponding Tautology
> $(\neg p \land (p \lor q)) \to q$

> [!example] Disjunctive Syllogism
> - $p$: "I will study discrete math."
> - $q$: "I will study English literature."
> 
> "I will study discrete math or I will study English literature."
> "I will not study discrete math."
> **Therefore:** "I will study English literature."
> 
> One option was eliminated, so the other must be true.

### Addition

$$\frac{p}{\therefore p \lor q}$$

> [!info] Corresponding Tautology
> $p \to (p \lor q)$

If something is true, you can OR it with *anything* and it's still true. Seems almost too easy, but it's useful when you need to introduce a new proposition into an argument.

> [!example] Addition
> - $p$: "I will study discrete math."
> - $q$: "I will visit Las Vegas."
> 
> "I will study discrete math."
> **Therefore:** "I will study discrete math or I will visit Las Vegas."
> 
> We didn't prove anything about Las Vegas, but the OR statement is still true because the first part is.

### Simplification

$$\frac{p \land q}{\therefore p}$$

> [!info] Corresponding Tautology
> $(p \land q) \to p$

If a conjunction is true, then each part must be true. You can "extract" either side from an AND.

> [!example] Simplification
> - $p$: "I will study discrete math."
> - $q$: "I will study English literature."
> 
> "I will study discrete math and English literature."
> **Therefore:** "I will study discrete math."
> 
> If you committed to both, you definitely committed to each one individually.

### Conjunction

$$\frac{p \\ q}{\therefore p \land q}$$

> [!info] Corresponding Tautology
> $((p) \land (q)) \to (p \land q)$

If two things are separately true, you can combine them with AND. The reverse of simplification.

> [!example] Conjunction
> - $p$: "I will study discrete math."
> - $q$: "I will study English literature."
> 
> "I will study discrete math."
> "I will study English literature."
> **Therefore:** "I will study discrete math and I will study English literature."
> 
> Two separate facts combine into one.

### Resolution

$$\frac{\neg p \lor r \\ p \lor q}{\therefore q \lor r}$$

> [!info] Corresponding Tautology
> $((\neg p \lor r) \land (p \lor q)) \to (q \lor r)$

This one's trickier. The idea: $p$ and $\neg p$ "cancel out" because one of them must be false. Whatever's left on each side ($q$ and $r$) gets ORed together.

> [!example] Resolution
> - $p$: "I will study discrete math."
> - $q$: "I will study databases."
> - $r$: "I will study English literature."
> 
> "I will not study discrete math or I will study English literature."
> "I will study discrete math or I will study databases."
> **Therefore:** "I will study databases or I will study English literature."
> 
> Either $p$ is true or it isn't. If it is, then $r$ follows from the first statement. If it isn't, then $q$ follows from the second. Either way, we get $q \lor r$.

> [!tip] Application
> Resolution plays an important role in AI and is used in Prolog. It's the basis for automated theorem proving.

---

## Summary Table

> [!abstract] Rules of Inference Reference
> | Rule | Form | What it means |
> |---|---|---|
> | Modus Ponens | $p \to q, p \Rightarrow q$ | Condition met, consequence follows |
> | Modus Tollens | $p \to q, \neg q \Rightarrow \neg p$ | Consequence failed, condition was false |
> | Hypothetical Syllogism | $p \to q, q \to r \Rightarrow p \to r$ | Chain implications together |
> | Disjunctive Syllogism | $p \lor q, \neg p \Rightarrow q$ | Process of elimination |
> | Addition | $p \Rightarrow p \lor q$ | Add anything via OR |
> | Simplification | $p \land q \Rightarrow p$ | Extract from AND |
> | Conjunction | $p, q \Rightarrow p \land q$ | Combine via AND |
> | Resolution | $\neg p \lor r, p \lor q \Rightarrow q \lor r$ | Cancel out $p$ and $\neg p$ |

---

## Building Valid Arguments

A valid argument is a sequence of statements where each is either:
- A premise, OR
- Follows from previous statements by rules of inference

The last statement is the conclusion. Each step must be justified by citing which rule and which previous steps you used.

> [!example] Example 1: Simple Argument
> From $p \land (p \to q)$, show that $q$ is a conclusion.
> 
> | Step | Reason |
> |---|---|
> | 1. $p \land (p \to q)$ | Premise |
> | 2. $p$ | Simplification using (1) |
> | 3. $p \to q$ | Simplification using (1) |
> | 4. $q$ | Modus Ponens using (2) and (3) |
> 
> We break apart the conjunction, then apply Modus Ponens to get the result.

> [!example] Example 2: Weather and Activities
> **Hypotheses:**
> - "It is not sunny this afternoon and it is colder than yesterday."
> - "We will go swimming only if it is sunny."
> - "If we do not go swimming, then we will take a canoe trip."
> - "If we take a canoe trip, then we will be home by sunset."
> 
> **Conclusion:** "We will be home by sunset."
> 
> **Variables:**
> - $p$: "It is sunny this afternoon."
> - $q$: "It is colder than yesterday."
> - $r$: "We will go swimming."
> - $s$: "We will take a canoe trip."
> - $t$: "We will be home by sunset."
> 
> **Translation:** $\neg p \land q$, $r \to p$, $\neg r \to s$, $s \to t$
> 
> | Step | Reason |
> |---|---|
> | 1. $\neg p \land q$ | Premise |
> | 2. $\neg p$ | Simplification using (1) |
> | 3. $r \to p$ | Premise |
> | 4. $\neg r$ | Modus Tollens using (2) and (3) |
> | 5. $\neg r \to s$ | Premise |
> | 6. $s$ | Modus Ponens using (4) and (5) |
> | 7. $s \to t$ | Premise |
> | 8. $t$ | Modus Ponens using (6) and (7) |
> 
> The main insight: we use Modus Tollens at step 4. Since $r \to p$ and $\neg p$, we conclude $\neg r$. Then we chain forward with Modus Ponens.

---

## Rules of Inference for Quantified Statements

For quantified statements, we need additional rules beyond propositional logic. These let us move between "for all" / "there exists" statements and specific instances.

### Universal Instantiation (UI)

$$\frac{\forall x\, P(x)}{\therefore P(c)}$$

If something holds for *all* $x$, it certainly holds for any specific $c$ we pick. This is how we go from general statements to specific ones.

> [!example] UI Example
> Domain: all dogs. Fido is a dog.
> 
> "All dogs are cuddly."
> **Therefore:** "Fido is cuddly."

---

### Universal Generalization (UG)

$$\frac{P(c) \text{ for an arbitrary } c}{\therefore \forall x\, P(x)}$$

If something holds for an *arbitrary* element (not a specific one we chose for special properties), then it holds for all elements.

> [!warning] Be careful
> The element $c$ must be truly arbitrary, not specially chosen. This is used often implicitly in mathematical proofs when we say "let $x$ be any element..."

---

### Existential Instantiation (EI)

$$\frac{\exists x\, P(x)}{\therefore P(c) \text{ for some element } c}$$

If we know something exists with a property, we can give it a name and work with it. We just can't assume anything else about it besides what we know.

> [!example] EI Example
> "There is someone who got an A in the course."
> **Therefore:** "Let's call her $a$ and say that $a$ got an A."

---

### Existential Generalization (EG)

$$\frac{P(c) \text{ for some element } c}{\therefore \exists x\, P(x)}$$

If a specific element has a property, then *something* has that property. We can go from specific to existential.

> [!example] EG Example
> "Michelle got an A in the class."
> **Therefore:** "Someone got an A in the class."

---

## Quantifier Rules Summary

> [!abstract] Quantifier Inference Rules
> | Rule | Form | Direction |
> |---|---|---|
> | Universal Instantiation (UI) | $\forall x\, P(x) \Rightarrow P(c)$ | General → Specific |
> | Universal Generalization (UG) | $P(c)$ arbitrary $\Rightarrow \forall x\, P(x)$ | Specific → General |
> | Existential Instantiation (EI) | $\exists x\, P(x) \Rightarrow P(c)$ for some $c$ | Name the witness |
> | Existential Generalization (EG) | $P(c) \Rightarrow \exists x\, P(x)$ | Specific → Exists |

The pattern: UI and EI go from quantified to specific. UG and EG go from specific to quantified.

---

## Quantified Argument Examples

> [!example] Example 1: John Smith Has Two Legs
> **Premises:**
> - "Every man has two legs."
> - "John Smith is a man."
> 
> **Conclusion:** "John Smith has two legs."
> 
> Let $M(x)$ = "$x$ is a man", $L(x)$ = "$x$ has two legs", $J$ = John Smith.
> 
> | Step | Reason |
> |---|---|
> | 1. $\forall x(M(x) \to L(x))$ | Premise |
> | 2. $M(J) \to L(J)$ | UI from (1) |
> | 3. $M(J)$ | Premise |
> | 4. $L(J)$ | Modus Ponens using (2) and (3) |
> 
> We use UI to instantiate the universal statement for John specifically, then apply Modus Ponens.

> [!example] Example 2: Class and Book
> **Premises:**
> - "A student in this class has not read the book."
> - "Everyone in this class passed the first exam."
> 
> **Conclusion:** "Someone who passed the first exam has not read the book."
> 
> Let $C(x)$ = "$x$ is in this class", $B(x)$ = "$x$ has read the book", $P(x)$ = "$x$ passed the first exam."
> 
> $$\frac{\exists x(C(x) \land \neg B(x)) \\ \forall x(C(x) \to P(x))}{\therefore \exists x(P(x) \land \neg B(x))}$$
> 
> | Step | Reason |
> |---|---|
> | 1. $\exists x(C(x) \land \neg B(x))$ | Premise |
> | 2. $C(a) \land \neg B(a)$ | EI from (1) |
> | 3. $C(a)$ | Simplification from (2) |
> | 4. $\forall x(C(x) \to P(x))$ | Premise |
> | 5. $C(a) \to P(a)$ | UI from (4) |
> | 6. $P(a)$ | MP from (3) and (5) |
> | 7. $\neg B(a)$ | Simplification from (2) |
> | 8. $P(a) \land \neg B(a)$ | Conjunction from (6) and (7) |
> | 9. $\exists x(P(x) \land \neg B(x))$ | EG from (8) |
> 
> Key moves: Use EI to name the student who hasn't read the book. Use UI to apply the "everyone passed" rule to that specific student. Then recombine and generalize back with EG.

---

## Returning to Socrates

Now we can formally prove the Socrates argument:

$$\frac{\forall x(Man(x) \to Mortal(x)) \\ Man(Socrates)}{\therefore Mortal(Socrates)}$$

| Step | Reason |
|---|---|
| 1. $\forall x(Man(x) \to Mortal(x))$ | Premise |
| 2. $Man(Socrates) \to Mortal(Socrates)$ | UI from (1) |
| 3. $Man(Socrates)$ | Premise |
| 4. $Mortal(Socrates)$ | MP from (2) and (3) |

Just UI + Modus Ponens. This pattern is so common it gets its own name.

---

## Universal Modus Ponens

Combines universal instantiation and modus ponens into one step:

$$\frac{\forall x(P(x) \to Q(x)) \\ P(a)}{\therefore Q(a)}$$

where $a$ is a particular element in the domain.

Saves a step in proofs. Instead of explicitly doing UI then MP, you can just do UMP directly. This is what we really used in the Socrates example.
