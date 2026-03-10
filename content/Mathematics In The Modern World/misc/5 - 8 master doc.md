Here is the comprehensive master document covering all the modules provided (Wallpaper Patterns, Sets and Number Systems, Propositional Logic, and Arguments/Validity). Every concept, mathematical definition, truth table, and example from the slides has been transcribed and formatted in detail.

---

# Mathematics in the Modern World (MMW) - Master Notes

## Module 5: Wallpaper Patterns

### 5.1 Introduction to Wallpaper Patterns
Understanding the fundamental elements of plane symmetries is crucial in crystallography, tiling, and wallpaper designs. 
**Definition:** A **Wallpaper Pattern** is a two-dimensional repeating pattern exhibiting translational symmetry and may include rotations, reflections, and glide reflections. They cover an infinite plane without gaps or overlaps.

The **International Union of Crystallography (IUC) Notation** is a classification system that categorizes wallpaper groups into 17 distinct groups based on their symmetry properties (lattice type, rotation order, mirror reflections, and glide reflections).

### 5.2 Basic Concepts
To classify wallpaper patterns, we must understand three foundational components: Rotation Centers, Lattices, and Unit Cells.

#### 1. Rotation Centers
Rotation centers are points around which the pattern can be rotated and still look identical.
*   **Order 1:** $360^\circ$ rotation (Trivial symmetry; every pattern has this).
*   **Order 2:** $180^\circ$ rotation (Half-turn).
*   **Order 3:** $120^\circ$ rotation (One-third turn).
*   **Order 4:** $90^\circ$ rotation (Quarter-turn).
*   **Order 6:** $60^\circ$ rotation (One-sixth turn).

#### 2. Lattices
A **lattice** is a repeating arrangement of points in a plane that defines the structure of a pattern. The five types of lattices are:
1.  **Oblique Lattice:** No perpendicular or equal-length sides, leading to a skewed appearance.
2.  **Rectangular Lattice:** Perpendicular but unequal sides, forming rectangles.
3.  **Square Lattice:** Perpendicular and equal sides, forming a grid of squares.
4.  **Hexagonal Lattice:** $120^\circ$ angles between points, resulting in a honeycomb-like structure.
5.  **Rhombic (Centered Rectangular) Lattice:** Forms diamond shapes.

**Primitive vs. Centered Lattices:**
*   **Primitive Lattice (p):** The smallest repeating unit does *not* contain additional lattice points inside. It has only one lattice point per unit cell (located at the corners).
*   **Centered Lattice (c):** The unit cell contains *additional lattice points* inside (often at the center of the cell edges or within the unit cell itself).

#### 3. Unit Cell
A **unit cell** is the smallest repeating structure (fundamental region) that, when repeated in space, can generate the entire lattice. It is the building block of periodic patterns.

### 5.3 The 17 Wallpaper Groups (IUC Notations)

Here is a breakdown of the wallpaper patterns detailed in the module:

**1. p111 (or p1)**
*   *Lattice:* Oblique (Primitive).
*   *Rotations:* None (Order 1 / $360^\circ$).
*   *Reflections/Glides:* 0 mirrors, 0 glides.
*   *Description:* The most basic pattern. Repeats solely by shifting in two independent directions.

**2. p1g1 (or pg)**
*   *Lattice:* Rectangular.
*   *Rotations:* None.
*   *Reflections/Glides:* 0 mirrors, 1 glide reflection.
*   *Description:* Repeats when shifted in one direction and then reflected. Common in woven textiles and brickwork.

**3. p1m1 (or pm)**
*   *Lattice:* Rectangular.
*   *Rotations:* None.
*   *Reflections/Glides:* 1 mirror reflection axis, 0 glide reflections.
*   *Description:* Mirrored elements running typically in one direction (horizontally or vertically).

**4. c1m1 (or cm)**
*   *Lattice:* Rectangular (Centered).
*   *Rotations:* None.
*   *Reflections/Glides:* 1 mirror, 1 glide reflection.
*   *Description:* Mirror lines and glide reflections alternate, creating a visually balanced and flowing design.

**5. p211 (or p2)**
*   *Lattice:* Oblique.
*   *Rotations:* $180^\circ$ (Order 2).
*   *Reflections/Glides:* 0 mirrors, 0 glides.
*   *Description:* Half-turn symmetry only. Motifs match themselves when flipped upside down, but no mirrors exist.

**6. p2mm (or pmm)**
*   *Lattice:* Rectangular.
*   *Rotations:* $180^\circ$ (Order 2).
*   *Reflections/Glides:* 2 mirror reflection axes (horizontal and vertical), 0 glides.
*   *Description:* Highly symmetrical, resembling classical tiled floors.

**7. p2mg (or pmg)**
*   *Lattice:* Rectangular.
*   *Rotations:* $180^\circ$ (Order 2).
*   *Reflections/Glides:* 1 mirror, 1 glide reflection.
*   *Description:* Dynamic flow maintained by glide reflection while retaining $180^\circ$ balance.

**8. p2gg (or pgg)**
*   *Lattice:* Rectangular.
*   *Rotations:* $180^\circ$ (Order 2).
*   *Reflections/Glides:* 0 mirrors, 2 glide reflections.
*   *Description:* No standard mirror lines, but repeats via shifted reflections (glides) in two directions.

**9. c2mm (or cmm)**
*   *Lattice:* Rectangular (Centered) or Rhombic.
*   *Rotations:* $180^\circ$ (Order 2).
*   *Reflections/Glides:* 2 mirrors, 2 glides.
*   *Description:* Both vertical/horizontal mirrors and glides, creating highly balanced ornamental designs.

**10. p411 (or p4)**
*   *Lattice:* Square.
*   *Rotations:* $90^\circ$ (Order 4).
*   *Reflections/Glides:* 0 mirrors, 0 glides.
*   *Description:* Pinwheel-like pattern. Rotates by $90^\circ$ without any mirror reflections.

**11. p4mm (or p4m)**
*   *Lattice:* Square.
*   *Rotations:* $90^\circ$ (Order 4).
*   *Reflections/Glides:* 4 mirror reflections (horizontal, vertical, and diagonals).
*   *Description:* Highly structured tile patterns, resembling a kaleidoscope grid.

**12. p4gg (or p4g)**
*   *Lattice:* Square.
*   *Rotations:* $90^\circ$ (Order 4).
*   *Reflections/Glides:* 2 mirrors (typically diagonal), 2 glides.

**13. p311 (or p3)**
*   *Lattice:* Hexagonal.
*   *Rotations:* $120^\circ$ (Order 3).
*   *Reflections/Glides:* 0 mirrors, 0 glides.
*   *Description:* Triangular/hexagonal repeating pinwheels without mirror symmetry.

**14. p3m1**
*   *Lattice:* Hexagonal.
*   *Rotations:* $120^\circ$ (Order 3).
*   *Reflections/Glides:* 3 mirror reflections. All rotation centers lie ON the reflection lines.

**15. p31m**
*   *Lattice:* Hexagonal.
*   *Rotations:* $120^\circ$ (Order 3).
*   *Reflections/Glides:* 3 mirror reflections. SOME rotation centers do NOT lie on the reflection lines.

**16. p611 (or p6)**
*   *Lattice:* Hexagonal.
*   *Rotations:* $60^\circ$ (Order 6).
*   *Reflections/Glides:* 0 mirrors, 0 glides.
*   *Description:* Pure six-fold rotation, resembling spinning snowflakes without mirrors.

**17. p6mm (or p6m)**
*   *Lattice:* Hexagonal.
*   *Rotations:* $60^\circ$ (Order 6).
*   *Reflections/Glides:* 6 mirror reflections.
*   *Description:* The highest symmetry group. Found in perfect honeycomb structures and complex Islamic geometric patterns. Contains 2-fold, 3-fold, and 6-fold centers.

---

## Module 7: Sets, Set Operations, and Number Systems

### 7.1 Number Systems
*   **Whole Numbers ($\mathbb{W}$):** $\mathbb{W} = \{0, 1, 2, 3, 4, 5, \dots\}$. Note: $0$ is unsigned (neither positive nor negative).
*   **Natural Numbers ($\mathbb{N}$):** $\mathbb{N} = \{1, 2, 3, 4, 5, \dots\}$. Also called counting numbers or positive integers.
*   **Integers ($\mathbb{Z}$):** $\mathbb{Z} = \{\dots, -3, -2, -1, 0, 1, 2, 3, \dots\}$. Includes negatives, zero, and positives. $\mathbb{N} \subseteq \mathbb{Z}$.
*   **Rational Numbers ($\mathbb{Q}$):** Numbers expressed as a fraction $m/n$ where $m, n \in \mathbb{Z}$ and $n \neq 0$. Example: $-5/3, 7/11, -10, 0$.
*   **Irrational Numbers ($\mathbb{Q}'$):** Numbers with non-terminating, non-repeating decimals. Example: $\sqrt{2}, \sqrt[3]{5}, \pi$. Note: $\mathbb{Q} \cap \mathbb{Q}' = \emptyset$.
*   **Real Numbers ($\mathbb{R}$):** $\mathbb{Q} \cup \mathbb{Q}' = \mathbb{R}$. The hierarchy is: $\mathbb{N} \subseteq \mathbb{Z} \subseteq \mathbb{Q} \subseteq \mathbb{R}$.

**Properties of Integers:**
*   **Factors/Divisors:** If $a,b,c$ are non-zero integers and $ab=c$, then $a$ and $b$ are factors of $c$. $c$ is a multiple of $a$ and $b$.
*   **Prime Numbers:** Integer $>1$ whose only factors are $1$ and itself. $\{2, 3, 5, 7, 11, 13, 17, \dots\}$.
*   **Even Numbers:** Integer divisible by 2. Form $m = 2n$. Examples: $-8, 0, 44$.
*   **Odd Numbers:** Not divisible by 2. Form $m = 2n + 1$. Examples: $-11, 3, 101$.

### 7.2 Sets and Definitions
A **set** is a collection of clearly defined objects called **elements**. Sets are denoted by capital letters ($A, B$), and elements by lowercase letters ($a, b, x$).
*   $x \in A$: "$x$ is an element of $A$"
*   $x \notin A$: "$x$ is not an element of $A$"

**Methods of Describing a Set:**
1.  **Roster Method:** Tabulating distinct elements separated by commas inside braces. 
    *Example:* $M = \{\text{March}, \text{May}\}$
2.  **Rule Method / Set-Builder Notation:** Uses a descriptive phrase.
    *Example:* $A = \{x \mid x \text{ is a vowel of the English Alphabet}\}$

**Types of Sets:**
*   **Empty (Null) Set ($\emptyset$ or $\{\}$):** Contains no elements. (e.g., $\{x \mid x \text{ is a human living on Mars}\}$).
*   **Universal Set ($U$):** Contains all elements in a single discussion.
*   **Finite Set:** Empty or equivalent to $\{1, 2, \dots n\}$ for some integer $n$.
*   **Infinite Set:** A set that is not finite.
*   **Cardinality ($|A|$):** The number of elements in finite set $A$.

**Set Relations:**
*   **Subset ($A \subseteq B$):** Every element of $A$ is in $B$. (The empty set is a subset of all sets). A set of $n$ elements has $2^n$ distinct subsets.
*   **Proper Subset ($A \subset B$):** $A \subseteq B$ and $A \neq B$.
*   **Equality ($A = B$):** Sets have exactly the same elements ($A \subseteq B$ and $B \subseteq A$).
*   **Equivalent Sets ($A \sim B$):** Sets have a one-to-one correspondence (same cardinality $|A| = |B|$).

### 7.3 Set Operations
*   **Union ($A \cup B$):** Elements that belong to either $A$ or $B$ or both. $\{x \mid x \in A \lor x \in B\}$.
*   **Intersection ($A \cap B$):** Elements that belong to BOTH $A$ and $B$. $\{x \mid x \in A \land x \in B\}$.
*   **Disjoint Sets:** If $A \cap B = \emptyset$.
*   **Complement ($A'$ or $A^c$):** Elements in $U$ that are NOT in $A$. $\{x \in U \mid x \notin A\}$.
*   **Difference ($A - B$ or $A \setminus B$):** Elements in $A$ that are not in $B$. $\{x \mid x \in A \land x \notin B\}$.
*   **Cartesian Product ($A \times B$):** Set of all ordered pairs $(a,b)$. $\{(a,b) \mid a \in A \land b \in B\}$. Note: $A \times B \neq B \times A$.

### 7.4 Venn Diagram Word Problem Example
**Problem:** In a survey of 150 students:
*   80 have laptops (L)
*   110 have cell phones (C)
*   125 have iPods (I)
*   62 have laptop & cell phone ($L \cap C$)
*   58 have laptop & iPod ($L \cap I$)
*   98 have cell phone & iPod ($C \cap I$)
*   50 have all three ($L \cap C \cap I$)

**Venn Diagram Breakdown:**
1.  Center intersection ($L \cap C \cap I$) = **50**
2.  Laptop & Cell only ($L \cap C$ only) = $62 - 50 =$ **12**
3.  Laptop & iPod only ($L \cap I$ only) = $58 - 50 =$ **8**
4.  Cell & iPod only ($C \cap I$ only) = $98 - 50 =$ **48**
5.  Laptop only = $80 - (12 + 50 + 8) =$ **10**
6.  Cell phone only = $110 - (12 + 50 + 48) =$ **0**
7.  iPod only = $125 - (8 + 50 + 48) =$ **19**
8.  Total accounted for = $50 + 12 + 8 + 48 + 10 + 0 + 19 = 147$
9.  None of the items = $150 - 147 =$ **3**

**Answers:**
*   a. How many have just a cell phone? **0**
*   b. How many have none? **3**
*   c. How many have an iPod and laptop but not a cellphone? **8**

> **Image:** (Image here of: Tikzjax 3-circle Venn diagram labeled A, B, C corresponding to Laptops, Cellphones, iPods. Intersections contain the numbers calculated above: Center=50, A&B=12, A&C=8, B&C=48, A=10, B=0, C=19, Outside=3.)

---

## Module 7/8: Propositional Calculus and Bits Operations

### 8.1 Bit Operations and Conversions
A **Bit** (Binary Digit) is a symbol with two possible values: 0 (False) and 1 (True). A **Byte** is 8 bits.

**Bitwise Operators:**
*   **AND ($\land$):** 1 if both are 1, else 0.
*   **OR ($\lor$):** 1 if either is 1, else 0.
*   **XOR ($\oplus$):** 1 if strictly one is 1 (differing bits), else 0.

**Bitwise Calculation Example:**
Find bitwise OR, AND, XOR of $A = 1100101$ and $B = 0001101$ (padding with zero to match length).
*   $A \lor B = 1101101$
*   $A \land B = 0000101$
*   $A \oplus B = 1101000$

**Base-2 to Base-10 (Binary to Decimal):**
Using place values: 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1
*   $1100101 = 64 + 32 + 4 + 1 = \mathbf{101}$
*   $1000111 = 64 + 4 + 2 + 1 = \mathbf{71}$
*   $111 = 4 + 2 + 1 = \mathbf{7}$
*   $1011 = 8 + 2 + 1 = \mathbf{11}$

**Decimal to Binary:**
*   $38 = \mathbf{100110}$ ($32+4+2$)
*   $145 = \mathbf{10010001}$ ($128+16+1$)
*   $77 = \mathbf{1001101}$ ($64+8+4+1$)
*   $9 = \mathbf{1001}$ ($8+1$)

**Compound Bitwise Example:** Evaluate $(1010 \oplus 11011) \lor 1000$
1. Pad 1010 to match length: $01010 \oplus 11011 = 10001$
2. $10001 \lor 01000 = 11001$
3. Convert to decimal: $16 + 8 + 1 = \mathbf{25}$

---

## Module 8: Symbolic Logic, Arguments, and Validity

### 8.2 Propositional Functions and Quantifiers
A **Propositional Function** (Predicate/Open Sentence) is a statement with a variable, denoted $P(x)$, whose truth depends on the value of $x$. The set of allowed values is the **Domain of Discourse**. 

*   *Example:* $Q(x): x + 5 = 10$ over $\mathbb{Z}$.
    *   If $x = 5$, $Q(5)$ is True. This is the **Truth Set**.

**Quantifiers** express the quantity/scope of the variable:
1.  **Universal Quantifier ($\forall$):** "For all", "For every".
    *   $\forall x \in D, P(x)$ is true if $P(x)$ is true for *every* element in the domain.
    *   *Example:* $\forall x \in \mathbb{R}, x+1 > x$. (True).
2.  **Existential Quantifier ($\exists$):** "There exists", "For some".
    *   $\exists x \in D, P(x)$ is true if there is *at least one* element making it true.
    *   *Example:* $\exists x \in \mathbb{Z}, \sqrt{x} \in \mathbb{Z}$. (True, e.g., $x=4$).

### 8.3 Negating Quantified Statements
To negate a quantified statement, change the quantifier and negate the predicate.
*   **Statement:** All $X$ are $Y$ ($\forall x, Y(x)$) $\implies$ **Negation:** Some $X$ are not $Y$ ($\exists x, \sim Y(x)$)
*   **Statement:** Some $X$ are $Y$ ($\exists x, Y(x)$) $\implies$ **Negation:** No $X$ are $Y$ ($\forall x, \sim Y(x)$)

*Examples:*
*   "All successful brands invest in social media." $\implies$ "Some successful brands do not invest in social media."
*   "No employees are late to meetings." $\implies$ "Some employees are late to meetings."
*   "Some online learners attend physical classes." $\implies$ "No online learners attend physical classes."

### 8.4 Arguments and Validity
An **argument** consists of **premises** (statements assumed true) and a **conclusion**.
*   **Valid:** If whenever the premises are true, the conclusion is *guaranteed* to be true.
*   **Invalid:** If there is at least one case where premises are true, but the conclusion is false.

**Method 1: Checking Validity via Truth Tables**
1.  Symbolize the argument.
2.  Create a truth table for all components.
3.  Check rows where *all premises are True*. If the conclusion is True in *all* such rows, it is Valid.

*Example 1:*
*   Premise 1: $p \rightarrow q$ (If a number is even, it is divisible by 2)
*   Premise 2: $p$ (8 is even)
*   Conclusion: $\therefore q$ (8 is divisible by 2)
*   *Table Check:* The only row where $p \rightarrow q$ is T and $p$ is T is the first row. In this row, $q$ is also T. **Valid (Modus Ponens)**.

*Example 2:*
*   Premise 1: $p \rightarrow q$ (If interest rates rise, investment decreases)
*   Premise 2: $\sim p$ (Interest rates did not rise)
*   Conclusion: $\therefore \sim q$ (Investment did not decrease)
*   *Table Check:* Look at row where $p=F, q=T$. $p \rightarrow q$ is True, $\sim p$ is True. But the conclusion $\sim q$ is False! **Invalid (Fallacy of the Inverse)**.

**Rules of Inference:**
1.  **Modus Ponens:** $p \rightarrow q, p \vdash q$
2.  **Modus Tollens:** $p \rightarrow q, \sim q \vdash \sim p$
3.  **Addition:** $p \vdash p \lor q$
4.  **Simplification:** $p \land q \vdash p$
5.  **Conjunction:** $p, q \vdash p \land q$
6.  **Hypothetical Syllogism:** $p \rightarrow q, q \rightarrow r \vdash p \rightarrow r$
7.  **Disjunctive Syllogism:** $p \lor q, \sim p \vdash q$

### 8.5 Euler Diagrams for Arguments
**Euler Diagrams** visually map categories using circles (sets) to test validity.

**Drawing Rules:**
*   "All P are Q" $\implies$ Circle P is completely inside Circle Q.
*   "Some P are Q" $\implies$ Circle P overlaps Circle Q.
*   "No P are Q" $\implies$ Circle P and Circle Q are completely separate.

**Testing Validity:** Draw the premises. If the conclusion is undeniably forced by the diagram, it is Valid. If you can draw a diagram that satisfies the premises but *breaks* the conclusion, it is Invalid.

*Example 1 (Valid):*
*   All CEOs are business leaders. (CEO circle inside Business Leaders circle)
*   Elon is a CEO. (Dot 'Elon' inside CEO circle)
*   Therefore, Elon is a business leader.
*   *Result:* The dot 'Elon' is forced to be inside Business Leaders. **Valid**.

> **Image:** (Image here of: Tikzjax Euler diagram. A large circle labeled "Business Leaders". A smaller circle inside it labeled "CEO". A dot inside the CEO circle labeled "Elon". Validates the argument.)

*Example 2 (Invalid):*
*   Some accountants are auditors. (Accountants and Auditors circles overlap).
*   Maria is an accountant. (Dot 'Maria' is inside the Accountants circle).
*   Therefore, Maria is an auditor.
*   *Result:* We can place the dot 'Maria' in the Accountant circle but *outside* the overlap. The conclusion is not guaranteed. **Invalid**.

> **Image:** (Image here of: Tikzjax Euler diagram. Two overlapping circles labeled "Accountants" and "Auditors". A dot labeled "Maria" is placed inside the "Accountants" circle but outside the overlapping region, proving the argument is invalid.)

*Example 3 (Valid):*
*   All nurses are healthcare workers. (Nurses $\subset$ Healthcare Workers).
*   Not all healthcare workers are nurses. (There are elements in HW outside Nurses).
*   Therefore, some healthcare workers are not nurses.
*   *Result:* The diagram intrinsically shows space inside HW that is outside Nurses. **Valid**.