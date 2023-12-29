import { describe, expect, test } from 'vitest';

import { isSubsetOf } from '../src';

test('set A is correctly defined as a subset of B', () => {
	expect(isSubsetOf(
		new Set([1, 2, 3, 4, 5]),
		new Set([1, 2, 3, 4, 5, 9]),
	)).toBe(true);
});
