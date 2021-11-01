import { areSetsDisjoint } from '../src';

describe('disjoint sets', () => {
	test('two sets are disjoint to each other', () => {
		expect(areSetsDisjoint(
			new Set<number>([1, 2, 3]),
			new Set<number>([4, 5, 6])
		)).toBe(true);
	});

	test('two sets are not disjoint to each other', () => {
		expect(areSetsDisjoint(
			new Set<number>([1, 2, 3]),
			new Set<number>([3, 4, 5])
		)).toBe(false);
	});
});
