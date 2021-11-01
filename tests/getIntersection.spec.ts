import { getIntersection } from '../src';

test('intersection of two sets is computed correctly [1]', () => {
	expect(getIntersection<number>(
		new Set<number>([1, 2, 3]),
		new Set<number>([2, 3, 4])
	)).toStrictEqual(
		new Set<number>([2, 3])
	);
});

test('intersection of two sets is computed correctly [2]', () => {
	expect(getIntersection(
		new Set([8, 9, 10, 11, 12, 13, 14, 15]),
		new Set([14, 15, 16, 17, 18, 19, 20])
	)).toStrictEqual(new Set([14, 15]));
});


test('intersection of two sets without any common elements returns an empty set', () => {
	expect(getIntersection<number>(
		new Set<number>([1, 2, 3]),
		new Set<number>([4, 5, 6])
	)).toStrictEqual(
		new Set<number>([])
	);
});
