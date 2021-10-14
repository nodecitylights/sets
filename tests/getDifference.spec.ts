import {getDifference} from '../src';

test('difference of sets is computed correctly [1]', () => {
	expect(getDifference(
		new Set([1, 2, 3, 4, 5, 6, 7, 8]),
		new Set([1, 2, 3, 4])
	)).toStrictEqual(new Set([5, 6, 7, 8]));
});


test("difference of two sets is computed correctly [2]", () => {
	expect(getDifference(
		new Set<number>([1, 2, 3]),
		new Set<number>([2, 3, 4])
	)).toStrictEqual(
		new Set<number>([1])
	);
});
