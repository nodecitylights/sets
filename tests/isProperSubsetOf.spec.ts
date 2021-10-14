import isProperSubsetOf from '../src/isProperSubsetOf';

test('set A is correctly computed as a proper subset of set B', () => {
	expect(isProperSubsetOf(
		new Set([1, 2, 3, 4, 5]),
		new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])
	)).toBe(true);
});
