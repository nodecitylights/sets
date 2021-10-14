"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const containsAllElements_1 = __importDefault(require("./containsAllElements"));
/**
 * Implementation of the proper superset operation in set theory,
 * which checks if set A is a superset of set B. A proper superset
 * means a set A is a superset of B, but B is not equal to A.
 *  - **Formal definition**: `A ⊃ B`
 *  - This method runs in bilinear time, or `O(n * m)`, where `n = |A|`
 *    (size of set A), and `m = |B|` (set of size B)
 * @example
 * ```ts
 * // {2, 3, 9} ⊃ {3, 9}
 * isProperSupersetOf(new Set([2, 3, 9]), new Set([3, 9])); // true
 * ```
 * @param a - Set A of type `<TElement>` elements
 * @param b - Set B of type `<B>` elements
 * @returns Whether `A ⊃ B` is true
 */
function isProperSupersetOf(a, b) {
    return a.size > b.size && (0, containsAllElements_1.default)(a, b);
}
exports.default = isProperSupersetOf;
//# sourceMappingURL=isProperSupersetOf.js.map