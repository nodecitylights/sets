import {areSetsEquivalent} from '../src';

test('two empty sets are equivalent to each other', () => {
	expect(areSetsEquivalent<number>(
		new Set<number>(),
		new Set<number>()
	)).toBe(true)
});

test('two sets of same length are equivalent to each other', () => {
	expect(areSetsEquivalent<number>(
		new Set<number>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
		new Set<number>([11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
	)).toBe(true)
})
