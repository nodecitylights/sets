"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const containsAllElements_1 = __importDefault(require("./containsAllElements"));
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
function isProperSubsetOf(a, b) {
    return a.size < b.size && (0, containsAllElements_1.default)(b, a);
}
exports.default = isProperSubsetOf;
//# sourceMappingURL=isProperSubsetOf.js.map