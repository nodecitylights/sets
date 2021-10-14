"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
function getIntersection(a, b) {
    const intersection = new Set();
    for (const element of b) {
        if (a.has(element)) {
            intersection.add(element);
        }
    }
    return intersection;
}
exports.default = getIntersection;
//# sourceMappingURL=getIntersection.js.map