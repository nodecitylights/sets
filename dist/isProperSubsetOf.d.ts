/**
 * Implementation of the proper subset operation, which checks if
 * set A is a proper subset of set B. A proper subset means
 * a set A is a subset of B, but is not equal to B.
 *  - **Formal definition**: `A ⊂ B`
 *  - This method runs in bilinear time, or `O(n * m)`, where `n = |A|`
 *    (size of set A), and `m = |B|` (set of size B)
 * @example
 * ```ts
 * // {1} ⊂ {1, 3}
 * isProperSubsetOf(new Set([1]), new Set([1, 3])); // true
 * ```
 * @param a - Set A of type `<TElement>` elements
 * @param b - Set B of type `<TElement>` elements
 * @returns Whether `A ⊂ B` is true
 */
export default function isProperSubsetOf<TElement>(a: Set<TElement>, b: Set<TElement>): boolean;
