import { describe, expect, test } from 'vitest';

import { getUnion } from '../src';

test('union of two sets is computed correctly', () => {
	expect(getUnion<number>(
		new Set<number>([1, 2, 3, 4]),
		new Set<number>([5, 6, 7, 8]),
	)).toStrictEqual(
		new Set<number>([1, 2, 3, 4, 5, 6, 7, 8]),
	);
});
