"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const containsAllElements_1 = __importDefault(require("./containsAllElements"));
/**
 * Implementation of the superset operation, which checks if
 * set A is a superset of set B. A superset means all elements
 * of set B are elements of A.
 *  - **Formal definition**: `A ⊇ B`
 *  - This method runs in bilinear time, or `O(n * m)`, where `n = |A|`
 *    (size of set A), and `m = |B|` (set of size B)
 * @example
 * ```ts
 * // {1, 2, 3} ⊇ {1, 2, 3}
 * isSupersetOf(new Set([1, 2, 3]), new Set([1, 2, 3])) // true
 * ```
 * @param a - Set A of type `<TElement>` elements
 * @param b - Set B of type `<TElement>` elements
 * @returns Whether `A ⊇ B` is true
 */
function isSupersetOf(a, b) {
    return a.size >= b.size && (0, containsAllElements_1.default)(a, b);
}
exports.default = isSupersetOf;
//# sourceMappingURL=isSupersetOf.js.map