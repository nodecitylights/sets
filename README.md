# @neoncitylights/set-theory
[![GitHub license](https://img.shields.io/github/license/neoncitylights/ts-set-theory)](https://github.com/neoncitylights/ts-set-theory/blob/main/LICENSE.txt)
[![npm version](https://badge.fury.io/js/@neoncitylights%2Fset-theory.svg)](https://badge.fury.io/js/@neoncitylights%2Fset-theory)
[![codecov](https://codecov.io/gh/neoncitylights/ts-set-theory/branch/main/graph/badge.svg?token=PmaGuYKnEo)](https://codecov.io/gh/neoncitylights/ts-set-theory)
[![Node.js workflow](https://github.com/neoncitylights/ts-set-theory/actions/workflows/main.yml/badge.svg)](https://github.com/neoncitylights/ts-set-theory/actions/workflows/main.yml)

A library written in TypeScript implementing the mathematical branch known as set theory - a subset of discrete mathematics. While there is a current proposal for adding new methods to the Set class[^ecma-set-methods-proposal], it is not formally recommended yet. This extends the current `Set` class[^mdn-set] as standardized by the ECMAScript Language Specification. [^ecma-spec] 

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
### API Reference
#### Predicates
* <a href="#areSetsDisjoint">#</a> predicates.**areSetsDisjoint**<*TElement*>(*a*, *b*): *boolean* • [source](./src/predicates.ts)
* <a href="#areSetsEquivalent">#</a> predicates.**areSetsEquivalent**<*TElement*>(*a*, *b*): *boolean* • [source](./src/predicates.ts)
* <a href="#areSetsEqual">#</a> predicates.**areSetsEqual**<*TElement*>(*a*, *b*): *boolean* • [source](./src/predicates.ts)
* <a href="#isSubsetOf">#</a> predicates.**isSubsetOf**<*TElement*>(*a*, *b*): *boolean* • [source](./src/predicates.ts)
* <a href="#isSupersetOf">#</a> predicates.**isSupersetOf**<*TElement*>(*a*, *b*): *boolean* • [source](./src/predicates.ts)
* <a href="#isProperSubsetOf">#</a> predicates.**isProperSubsetOf**<*TElement*>(*a*, *b*): *boolean* • [source](./src/predicates.ts)
* <a href="#isProperSupersetOf">#</a> predicates.**isProperSupersetOf**<*TElement*>(*a*, *b*): *boolean* • [source](./src/predicates.ts)

#### Operations
* <a href="#getUnion">#</a> operations.**getUnion**<*TElement*>(*a*, *b*): Set<*TElement*> • [source](./src/operations.ts)
* <a href="#getIntersection">#</a> operations.**getIntersection**<*TElement*>(*a*, *b*): Set<*TElement*> • [source](./src/operations.ts)
* <a href="#getDifference">#</a> operations.**getDifference**<*TElement*>(*a*, *b*): Set<*TElement*> • [source](./src/operations.ts)
* <a href="#getSymmetricDifference">#</a> operations.**getSymmetricDifference**<*TElement*>(*a*, *b*): Set<*TElement*> • [source](./src/operations.ts)

#### Similarity measuring algorithms
* <a href="#getJaccardSimilarityCoefficient">#</a> similarity.**getJaccardSimilarityCoefficient**<*TElement*>(*a*, *b*): *number* • [source](./src/similarity.ts)
* <a href="#getLogDice">#</a> similarity.**getLogDice**<*TElement*>(*a*, *b*): *number* • [source](./src/similarity.ts)
* <a href="#getOverlapCoefficient">#</a> similarity.**getOverlapCoefficient**<*TElement*>(*a*, *b*): *number* • [source](./src/similarity.ts)
* <a href="#getSorensenDiceCoefficient">#</a> similarity.**getSorensenDiceCoefficient**<*TElement*>(*a*, *b*): *number* • [source](./src/similarity.ts)

## Set Theory 101
### Cardinality
The formal term that represents the number of elements within a set. It is also known as the "*size*" of the element. Given a set named A, the cardinality can be expressed using pipes, via |A|.
```text
 A = {"hello", "world"}
|A| = 2
```
### Disjoint sets
Sets that have no elements in common. They are formally expressed as `A ∩ B = ϕ`.
```text
A = {1, 2, 3, 4}
B = {5, 6, 7, 8}
A ∩ B = ϕ
```
### Equivalent sets
**Equivalent sets** are two sets that have the same cardinality.
```text
 A = {5, 6, 7, 8, 9, 10}
 B = {11, 12, 13, 14, 15, 16}
|A| = |B|
```
### Subset
A **subset** is a set where all elements of set A are in set B.
```text
A = {1, 2, 3}
B = {1, 2, 3, 4, 5}
A ⊆ B
```
### Superset
A **superset** is a set where all elements of B are in set A.
```text
A = {4, 5, 6}
B = {5, 6, 7, 8, 9}
B ⊇ A
```
### Proper subset
A **proper subset** is when set A is a subset of B, but A != B.
```text
{1} ⊂ {3}
```
### Proper superset
A **proper superset** is when set A is a superset of B, but A != B.
```text
{2, 3, 9} ⊃ {3, 9}
```
### Intersection
The **intersection** is the set of elements that are the members of two sets.
```text
A = {1, 2, 3, 4, 5}
B = {3, 4, 5, 6, 7}
A ∩ B = {3, 4, 5}
```
### Union
The **union** is the set of all elements in a collection of sets.
```text
A = {1, 2, 3, 4}
B = {4, 5, 6, 7, 8}
A ∪ B = {1, 2, 3, 4, 5, 6, 7, 8}
```
### Difference
The **difference** (also known as the complement) is the set of all elements that are in set A that are not in set B.
```text
A = {1, 2, 3, 4}
B = {2, 3, 5, 6}
A \ B = {1, 4}
```
### Symmetric difference
The **symmetric difference** is the set that belongs to one but not both of two sets.
```text
A = {2, 4, 5, 8}
B = {2, 6, 7, 8}
A △ B = {4, 5, 6, 7}
```

## Symbols
| Character | Code point | Name                  |
|-----------|------------|-----------------------|
| `⊆`       | `U+2286`   | Subset                |
| `⊇`       | `U+2287`   | Superset              |
| `⊂`       | `U+2282`   | Proper subset         |
| `⊃`       | `U+2283`   | Proper superset       |
| `∅`       | `U+03D5`   | Empty set             |
| `∈`       | `U+2208`   | Element of            |
| `∉`       | `U+2209`   | Not element of        |
| `∩`       | `U+2229`   | Intersection          |
| `∪`       | `U+222A`   | Union                 |
| `\`       | `U+005C`   | Complement/difference |
| `△`       | `U+25B3`   | Symmetric difference  |
| `⊖`       | `U+2296`   | Symmetric difference  |
| `×`       | `U+00D7`   | Cartesian product     |

## License
This library is licensed under the [MIT License](./LICENSE).

[^mdn-set]: MDN Web Docs Contributors. “Set - Javascript: MDN.” JavaScript | MDN, Mozilla, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set. 
[^ecma-spec]: TC39. “Draft ECMA-262 / October 30, 2021.” ECMAScript® 2022 Language&nbsp;Specification, ECMA International, 30 Oct. 2021, https://tc39.es/ecma262/#sec-set-objects. 
[^ecma-set-methods-proposal]: Wadas, Michał, and Sathya Gunasekaran. “New Set Methods.” New Set Methods, TC39, https://tc39.es/proposal-set-methods/. 
