/**
 * Checks if two sets are disjoint; that is, if both sets
 * have no elements in common.
 * - **Formal definition**: `A ∩ B = ϕ`
 * - This method runs in bilinear time, or `O(m * n)`,
 *   where `m = |B|` (size of set B) and `n = |A|` (size of set A).
 * @example
 * ```ts
 * // {1, 2, 3} ∩ {4, 5, 6} = ϕ
 * areSetsDisjoint(new Set([1, 2, 3]), new Set([4, 5, 6]); // true
 *
 * // {1, 2, 3} ∩ {3, 4, 5} ≠ ϕ
 * areSetsDisjoint(new Set([1, 2, 3]), new Set([3, 4, 5]); // false
 * ```
 * @param a - Set A of type `<TElement>` elements
 * @param b - Set B of type `<TElement>` elements
 * @returns Whether `A ∩ B = ϕ` is true
 */
export default function areSetsDisjoint<TElement>(a: Set<TElement>, b: Set<TElement>): boolean;
