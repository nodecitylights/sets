/**
 * Represents an intersection set operation, which are the
 * elements that exist in both set A and set B.
 *  - **Formal definition**: `A ∩ B = {x: x ∈ A & x ∈ B}`
 *  - This method runs in *bilinear time*, or `O(n * m)`, where
 *    `n = |B|` (size of set B) and `m = |A|` (size of set A).
 *  - This method has *no side effects*, returning a new
 *    `Set<TElement>` instance.
 * @example
 * ```ts
 * // {1, 2, 3, 4} ∩ {3, 4, 5, 6} = {3, 4}
 * getIntersection(new Set([1, 2, 3, 4]), new Set([3, 4, 5, 6])); // new Set([3, 4])
 * ```
 * @param a - Set A of type `<TElement>` elements
 * @param b - Set B of type `<B>` elements
 * @returns Intersection of A and B
 */
export default function getIntersection<TElement>(a: Set<TElement>, b: Set<TElement>): Set<TElement>;
