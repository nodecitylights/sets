# @neoncitylights/set-theory
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![npm (scoped)](https://img.shields.io/npm/v/@neoncitylights/set-theory?style=flat-square)](https://www.npmjs.com/package/@neoncitylights/set-theory)
[![Codecov](https://img.shields.io/codecov/c/github/neoncitylights/ts-set-theory?style=flat-square&logo=codecov&logoColor=%23fff)](https://codecov.io/gh/neoncitylights/ts-set-theory)
[![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/neoncitylights/ts-set-theory/.github%2Fworkflows%2Fmain.yml?style=flat-square)](https://github.com/neoncitylights/ts-set-theory/actions/workflows/ci.yml)

A library written in TypeScript implementing the mathematical branch known as set theory - a subset of discrete mathematics.

While there is a current proposal for adding new methods to the Set class, it is not formally recommended yet. This library provides functions to coincide with the `Set` class, as standardized by the *ECMAScript Language Specification*.

## Install
```bash
npm install @neoncitylights/set-theory
```

## Usage
```ts
const a = new Set<number>([1, 2, 3, 4]);
const b = new Set<number>([4, 5, 6, 7]);
getIntersection(a, b); // new Set<number>([4])
getUnion(a, b); // new Set<number>([1, 2, 3, 4, 5, 6, 7])

const c = new Set<string>(["hello", "world"]);
const d = new Set<string>(["hello"]);
isSupersetOf(c, d); // true
isSubsetOf(d, c); // true
```

## Documentation
[Auto-generated API documentation is available](https://neoncitylights.github.io/ts-set-theory/).

### API Reference
#### Predicates
* `fn`: <a href="#areSetsDisjoint">#</a> predicates.**areSetsDisjoint**<*TElement*>(*a*, *b*): *boolean* • [source](./src/predicates.ts)
* `fn`: <a href="#areSetsEquivalent">#</a> predicates.**areSetsEquivalent**<*TElement*>(*a*, *b*): *boolean* • [source](./src/predicates.ts)
* `fn`: <a href="#areSetsEqual">#</a> predicates.**areSetsEqual**<*TElement*>(*a*, *b*): *boolean* • [source](./src/predicates.ts)
* `fn`: <a href="#isSubsetOf">#</a> predicates.**isSubsetOf**<*TElement*>(*a*, *b*): *boolean* • [source](./src/predicates.ts)
* `fn`: <a href="#isSupersetOf">#</a> predicates.**isSupersetOf**<*TElement*>(*a*, *b*): *boolean* • [source](./src/predicates.ts)
* `fn`: <a href="#isProperSubsetOf">#</a> predicates.**isProperSubsetOf**<*TElement*>(*a*, *b*): *boolean* • [source](./src/predicates.ts)
* `fn`: <a href="#isProperSupersetOf">#</a> predicates.**isProperSupersetOf**<*TElement*>(*a*, *b*): *boolean* • [source](./src/predicates.ts)

#### Operations
* `fn`: <a href="#getUnion">#</a> operations.**getUnion**<*TElement*>(*a*, *b*): Set<*TElement*> • [source](./src/operations.ts)
* `fn`: <a href="#getIntersection">#</a> operations.**getIntersection**<*TElement*>(*a*, *b*): Set<*TElement*> • [source](./src/operations.ts)
* `fn`: <a href="#getDifference">#</a> operations.**getDifference**<*TElement*>(*a*, *b*): Set<*TElement*> • [source](./src/operations.ts)
* `fn`: <a href="#getSymmetricDifference">#</a> operations.**getSymmetricDifference**<*TElement*>(*a*, *b*): Set<*TElement*> • [source](./src/operations.ts)

#### Similarity measuring algorithms
* `fn`: <a href="#getJaccardSimilarityCoefficient">#</a> similarity.**getJaccardSimilarityCoefficient**<*TElement*>(*a*, *b*): *number* • [source](./src/similarity.ts)
* `fn`: <a href="#getLogDice">#</a> similarity.**getLogDice**<*TElement*>(*a*, *b*): *number* • [source](./src/similarity.ts)
* `fn`: <a href="#getOverlapCoefficient">#</a> similarity.**getOverlapCoefficient**<*TElement*>(*a*, *b*): *number* • [source](./src/similarity.ts)
* `fn`: <a href="#getSorensenDiceCoefficient">#</a> similarity.**getSorensenDiceCoefficient**<*TElement*>(*a*, *b*): *number* • [source](./src/similarity.ts)

#### Types
* `T`: <a href="#SetFunction">#</a> types.**SetFunction**<*TElement*, *TResult*> • [source](./src/types.ts)
* `T`: <a href="#SetOperation">#</a> types.**SetOperation**<*TElement*> • [source](./src/types.ts)
* `T`: <a href="#SetPredicate">#</a> types.**SetPredicate**<*TElement*> • [source](./src/types.ts)
* `T`: <a href="#SetSimilarity">#</a> types.**SetSimilarity**<*TElement*> • [source](./src/types.ts)

### Set Theory 101
#### Set
A **set** is an unordered collection of unique elements. The type of elements can be anything, such as words, numbers, and even other sets. In math, the name of sets are usually denoted with a capital letter, like $A$, $B$, $C$, etc. They can be expressed in namely 2 different notations being "**Roster notation**" and "**Set-Builder notation**".
#### Roster notation
Sets are written with curly brackets at the start and end, and each element is separated by a comma.
$$A = \\{1, 2, 3, 4\\}$$

For expressing larger, finite sets, we can use an ellipsis in-between. They can also be at the beginning or end to indicate that the set is infinite.

$$
\begin{aligned}
B &= \\{ 1, 2, 3, \dots, 100 \\} \\
C &= \\{ 1, 3, 5, 7, 9, \dots \\}
\end{aligned}
$$

#### Set-builder notation
Sets are written by defining a variable, and declaring a predicate (a statement that must be true or false) for that variable.
For example, to express $\\{ 0, 1, 2, 3, \dots, 10 \\}$ in set-builder notation:

$$\\{ x|x \in \mathbb{Z} \land 0 \leq x \leq 10 \\}$$

To express $\\{ 1, 3, 5, 7, 9, \dots \\}$ in set-builder notation:

$$\\{ x| x_n = n + 2, 1 \le x \le \infty \\}$$

Compared to roster notation, set-builder notation is a way of more *rigorously*[^rigour-wiki] defining a set. However, it is important to note that depending on the audience, it can be less accessible to readers.

#### Cardinality
**Cardinality** is the formal term that represents the number of elements within a set. It is also known as the "*size*" of the element. Given a set named $A$, the cardinality can be expressed using pipes, via $|A|$.

$$
\begin{aligned}
A &= \\{ \text{hello}, \text{world} \\} \\
|A| &= 2
\end{aligned}
$$

#### Disjoint sets
**Disjoint sets** are sets that have no elements in common. Given two sets named $A$ and $B$, they are formally expressed as $A \cap B = \Phi$.

$$
\begin{aligned}
A &= \\{ 1, 2, 3, 4 \\} \\
B &= \\{ 5, 6, 7, 8 \\} \\
A \cap B &= \Phi
\end{aligned}
$$

#### Equivalent sets
**Equivalent sets** are two sets that have the same cardinality.

$$
\begin{aligned}
A &= \\{ 5, 6, 7, 8, 9, 10 \\} \\
B &= \\{ 11, 12, 13, 14, 15, 16 \\} \\
|A| &= |B|
\end{aligned}
$$

#### Equal sets
**Equal sets** are sets that have the same cardinality *and* the same elements.

$$
\begin{aligned}
A &= \\{ 1, 2, 3, 4, 5 \\} \\
B &= \\{ 1, 2, 3, 4, 5 \\} \\
A &= B
\end{aligned}
$$

#### Subset
A **subset** is a set where all elements of set $A$ are in set $B$.

$$
\begin{aligned}
A &= \\{ 1, 2, 3 \\} \\
B &= \\{ 1, 2, 3, 4, 5 \\} \\
A &\subseteq B
\end{aligned}
$$

#### Superset
A **superset** is a set where all elements of $B$ are in set $A$.

$$
\begin{aligned}
A &= \\{ 4, 5, 6 \\} \\
B &= \\{ 5, 6, 7, 8, 9 \\} \\
B &\supseteq A
\end{aligned}
$$

#### Proper subset
A **proper subset** is when set $A$ is a subset of $B$, but $A \neq B$.

$$
\\{ 1 \\} \subset \\{ 1, 3 \\}
$$

#### Proper superset
A **proper superset** is when set $A$ is a superset of $B$, but $A \neq B$.

$$
\\{ 2, 3, 9 \\} \supset \\{ 3, 9 \\}
$$

#### Intersection
The **intersection** is the set of elements that are the members of two sets.

$$
\begin{aligned}
A &= \\{ 1, 2, 3, 4, 5 \\} \\
B &= \\{ 3, 4, 5, 6, 7 \\} \\
A \cap B &= \\{ 3, 4, 5 \\}
\end{aligned}
$$

#### Union
The **union** is the set of all elements in a collection of sets.

$$
\begin{aligned}
A &= \\{ 1, 2, 3, 4 \\} \\
B &= \\{ 4, 5, 6, 7, 8 \\} \\
A \cup B &= \\{1, 2, 3, 4, 5, 6, 7, 8 \\}
\end{aligned}
$$

#### Difference
The **difference** (also known as the complement) is the set of all elements that are in set A that are not in set B.

$$
\begin{aligned}
A &= \\{ 1, 2, 3, 4 \\} \\
B &= \\{ 2, 3, 5, 6 \\} \\
A \setminus B &= \\{ 1, 4 \\}
\end{aligned}
$$

#### Symmetric difference
The **symmetric difference** is the set that belongs to one but not both of two sets.

$$
\begin{aligned}
A &= \\{ 2, 4, 5, 8 \\} \\
B &= \\{ 2, 6, 7, 8 \\} \\
A ~\Delta ~ B &= \\{ 4, 5, 6, 7 \\}
\end{aligned}
$$

## License

This library is licensed under the MIT license ([`LICENSE-MIT`](./LICENSE) or <http://opensource.org/licenses/MIT>).

### Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you, as defined in the MIT license, shall be licensed as above, without any additional terms or conditions.
