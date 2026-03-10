# MMW Modules 1 & 2 Review Quiz

> [!info] Instructions
> Answer the following questions to test your knowledge on Fibonacci, The Golden Ratio, and Fractals. 
> The **Answer Key** is located at the bottom of this document. Try not to peek!

---

## Part 1: History & Definitions (Identification)

1.  What is the real name of Fibonacci?
2.  In what year was the book *Liber Abaci* published?
3.  Which numeral system did Fibonacci introduce to Europe?
4.  Approximately when did Fibonacci live?
5.  Who is the ancient Greek sculptor after whom the Golden Ratio ($phi$) is named?
6.  The "Rabbit Problem" assumes that a pair of rabbits becomes productive after how many months?
7.  What term describes a pattern that looks the same at every scale (zoom in/out)?
8.  Who coined the term "Fractal" in 1980?

---

## Part 2: The Fibonacci Sequence

9.  What is the recursive formula for the Fibonacci sequence?
10. Given $F_0 = 0, F_1 = 1$, strictly following the sequence, what is $F_8$?
    *(Sequence: 0, 1, 1, 2...)*
11. If a male bee (drone) has 1 parent, how many great-grandparents does he have?
12. What does the ratio $\frac{F_{n}}{F_{n-1}}$ approximate as $n$ approaches infinity?
13. What is the **Lucas Number** sequence starting inputs? (Usually $L_1, L_2$...)

---

## Part 3: Applications (Nature, Body, Art)

**True or False**

14. The "Golden Angle" used by plants to pack seeds efficiently is approximately $137.5^\circ$.
15. A starfish typically has 6 arms, which is a Fibonacci number.
16. The dimensions of the DNA molecule ($34\text{ Å}$ by $21\text{ Å}$) are Fibonacci numbers.
17. The Parthenon in Athens was designed using Golden Rectangles.
18. The "Vitruvian Man" by Michelangelo illustrates the Golden Ratio in the human body.

**Matching Type (Flower Petals)**
*Match the flower to its typical petal count:*

| Flower | Petal Count Answer |
| :--- | :--- |
| 19. Lily | A. 13 |
| 20. Buttercup | B. 3 |
| 21. Corn Marigold | C. 5 |
| 22. Daisy | D. 34 |

---

## Part 4: Fractals & Math

23. Calculate the **Fractal Dimension ($D$)** of the **Sierpinski Triangle**.
    *   *Hint: It is made of 3 self-similar pieces ($n=3$), each scaled by a factor of 1/2 ($r=2$).*
    *   Formula: $D = \frac{\log n}{\log r}$
    *   (Round to 3 decimal places).

24. Calculate the **Fractal Dimension ($D$)** of the **Koch Snowflake**.
    *   *Hint: It uses 4 pieces ($n=4$), each scaled by 1/3 ($r=3$).*

25. What is the value of **Phi ($\phi$)** to 4 decimal places?

---

<br>
<br>
<br>
<br>
<br>

> [!warning] SPOILER ALERT
> Scroll down for the Answer Key.

<br>
<br>
<br>

---

## Answer Key

### Part 1: History & Definitions
1.  **Leonardo Pisano** (Leonardo of Pisa)
2.  **1202**
3.  **Hindu-Arabic** numeral system
4.  **1170–1250**
5.  **Phidias**
6.  **2 months** (They are born, mature for 1 month, then produce in the 2nd month).
7.  **Self-similarity**
8.  **Benoit Mandelbrot**

### Part 2: The Fibonacci Sequence
9.  **$F_n = F_{n-1} + F_{n-2}$**
10. **21**
    *   *Solution:* 0, 1, 1, 2, 3, 5, 8, 13, **21** ($F_8$ is the 9th term if starting 0, or 8th if starting 1. Usually in MMW context: 1, 1, 2, 3, 5, 8, 13, 21).
11. **2**
    *   *Solution:* Male (1) $\to$ Mother (1) $\to$ Grandparents (2) $\to$ G-Grandparents (3). Wait, let's trace:
        *   Male (Drone) has only a Mother (1).
        *   Mother (Queen) has 2 Parents (Male + Female).
        *   Those 2 parents:
            *   Male (Grandfather) has 1 (Mother).
            *   Female (Grandmother) has 2.
        *   Total Great-Grandparents = $1 + 2 = 3$.
        *   *Correction Check:* The sequence is 1, 1, 2, **3**, 5... 
        *   Generation 1: 1 (Self)
        *   Generation 2: 1 (Parent)
        *   Generation 3: 2 (G-Parents)
        *   Generation 4: **3 (G-G-Parents)**
12. **The Golden Ratio ($\phi$)**
13. **2, 1** (Sequence: 2, 1, 3, 4, 7, 11...)

### Part 3: Applications
14. **TRUE** ($360^\circ \times (1 - 1/\phi) \approx 137.5^\circ$)
15. **FALSE** (Starfish usually have 5 arms, which IS a Fibonacci number. 6 is not).
16. **TRUE** (34 and 21 are consecutive Fibonacci numbers).
17. **TRUE**
18. **FALSE** (It was **Leonardo da Vinci**, not Michelangelo).
19. **B (3)** - Lily
20. **C (5)** - Buttercup
21. **A (13)** - Corn Marigold
22. **D (34)** - Daisy

### Part 4: Fractals & Math
23. **1.585**
    *   $D = \frac{\log 3}{\log 2} \approx 1.58496$
24. **1.262**
    *   $D = \frac{\log 4}{\log 3} \approx 1.2618$
25. **1.6180**
