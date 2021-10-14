import {areSetsEqual} from '../src';

test('two sets are equal to each other', () => {
	expect(areSetsEqual(
		new Set([1, 2, 3, 4, 5]),
		new Set([1, 2, 3, 4, 5])
	)).toBe(true);
});

test('two empty sets are equal to each other', () => {
	expect(areSetsEqual<number>(
		new Set<number>([]),
		new Set<number>([])
	)).toBe(true)
})
