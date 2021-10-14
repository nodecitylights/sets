/**
 * Compares the cardinality of two sets; that is, compares
 * the size of the two sets to see if they are equal.
 *  - **Formal definition**: `|A| = |B|`
 *  - This method runs in *constant time*, or `O(1)`.
 * @example
 * ```ts
 * // |{A, B, C}| = |{D, E, F}|
 * areSetsEquivalent(new Set(['A', 'B', 'C']), new Set(['D', 'E', 'F'])); // true
 * ```
 * @param a - Set A of type `<TElement>` elements
 * @param b - Set B of type `<TElement>` elements
 * @returns Whether `|A| = |B|` is true
 */
export default function areSetsEquivalent<TElement>(a: Set<TElement>, b: Set<TElement>): boolean;
