# @neoncitylights/set-theory
An NPM package written in TypeScript, allowing to run operations based on the mathematical branch of set theory - a
subset of discrete mathematics.

## Install
```bash
npm run i @neoncitylights/set-theory
```

## Usage
| Notation      | Name                 | Meaning                                                                            | Method                               |
|---------------|----------------------|------------------------------------------------------------------------------------|--------------------------------------|
| A ∩ B = ϕ     | Disjoint sets        | Set A and B have no elements in common                                             | `areSetsDisjoint<TElement>()`        |
| \|A\| = \|B\| | Equivalent sets      | Set A and B both have the same number of elements                                  | `areSetsEquivalent<TElement>()`      |
| A = B         | Equal sets           | Set A and B both have the same elements and same length                            | `areSetsEqual<TElement>()`           |
| A ∪ B         | Union                | Elements that exist in either set A or set B                                       | `getUnion<TElement>()`               |
| A ∩ B         | Intersection         | Elements that exist in both set A and B                                            | `getIntersection<TElement>()`        |
| B \ A         | Difference           | Set of elements that are in set B but not in set A                                 | `getDifference<TElement>()`          |
| A △ B         | Symmetric difference | The set of A and B that contain elements in either set, but not their intersection | `getSymmetricDifference<TElement>()` |
| A ⊆ B         | Subset               | Elements of A are in set B                                                         | `isSubsetOf<TElement>()`             |
| A ⊇ B         | Superset             | All elements of B are in set A                                                     | `isSupersetOf<TElement>()`           |
| A ⊂ B         | Proper subset        | A is a subset of B, but A != B                                                     | `IsProperSubsetOf<TElement>()`       |
| A ⊃ B         | Proper superset      | A is a superset of B, but A != B                                                   | `IsProperSupersetOf<TElement>()`     |

## License
[MIT License](./LICENSE.txt)
