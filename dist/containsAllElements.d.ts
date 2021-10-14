/**
 * Checks if all elements of set B are contained within
 * set B.
 *  - This method runs in bilinear time on average, or `O(n * m)`, where
 *    `n = |A|` (size of set A), and `m = |B|` (size of set B).
 * @param a - Set A of type `<TElement>` elements
 * @param b - Set B of type `<TElement>` elements
 * @returns Whether A contains all elements of B
 */
export default function _containsAllElements<TElement>(a: Set<TElement>, b: Set<TElement>): boolean;
