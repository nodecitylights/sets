import { isProperSupersetOf } from '../src';

test('set A is correctly defined as a proper superset of set B', () => {
	expect(isProperSupersetOf(
		new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]),
		new Set([1, 2, 3, 4, 5])
	)).toBe(true);
});
