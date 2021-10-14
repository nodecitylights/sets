"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const containsAllElements_1 = __importDefault(require("./containsAllElements"));
/**
 * Checks if two sets are equal, where two sets have the same number
 * of elements, and same elements themselves
 *  - **Formal definition**: `A = B` means `∀z, (z ∈ x ⇔ z ∈ y)`
 *  - This method runs in *linear time*, or `O(n)`, where `n = |A|`
 *    (size of set A).
 *  - **Note**: This does not check for reference/entity equality,
 *    but rather value equality.
 * @example
 * ```ts
 * // {1, 2, 3, 4} = {1, 2, 3, 4}
 * areSetsEqual(new Set([1, 2, 3, 4]), new Set([1, 2, 3, 4])); // true
 *
 * // {hello, world} = {hello, world}
 * areSetsEqual(new Set(['hello', 'world']), new Set(['hello', 'world'])); // true
 * ```
 * @param a - Set A of type `<TElement>` elements
 * @param b - Set B of type `<TElement>` elements
 * @returns Whether `A = B` is true
 */
function areSetsEqual(a, b) {
    return a.size === b.size && (0, containsAllElements_1.default)(a, b);
}
exports.default = areSetsEqual;
//# sourceMappingURL=areSetsEqual.js.map