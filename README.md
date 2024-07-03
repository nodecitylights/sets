# @neoncitylights/sets
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![npm (scoped)](https://img.shields.io/npm/v/@neoncitylights/sets?style=flat-square)](https://www.npmjs.com/package/@neoncitylights/sets)
[![Codecov](https://img.shields.io/codecov/c/github/nodecitylights/sets?style=flat-square&logo=codecov&logoColor=%23fff)](https://codecov.io/gh/nodecitylights/sets)
[![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/nodecitylights/sets/.github%2Fworkflows%2Fmain.yml?style=flat-square)](https://github.com/nodecitylights/sets/actions/workflows/main.yml)

A library written in TypeScript implementing the mathematical branch known as set theory - a subset of discrete mathematics.

While there is a current proposal for adding new methods to the Set class, it is not formally recommended yet. This library provides functions to coincide with the `Set` class, as standardized by the *ECMAScript Language Specification*.

## Install
```bash
npm install @neoncitylights/sets
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
[Auto-generated API documentation is available](https://neoncitylights.github.io/ts-sets/).

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

## License

This library is licensed under the MIT license ([`LICENSE-MIT`](./LICENSE) or <http://opensource.org/licenses/MIT>).

### Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you, as defined in the MIT license, shall be licensed as above, without any additional terms or conditions.
