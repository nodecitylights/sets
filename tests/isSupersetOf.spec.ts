import { isSupersetOf } from '../src';

test('set A is a superset of set B', () => {
	expect(isSupersetOf(
		new Set([1, 2, 3, 4, 5, 7]),
		new Set([1, 3, 7])
	)).toBe(true);
});
