import getSymmetricDifference from '../src/getSymmetricDifference';

test("symmetric difference of two sets is computed correctly", () => {
	expect(getSymmetricDifference(
		new Set<number>([1, 2, 3]),
		new Set<number>([3, 4])
	)).toStrictEqual(
		new Set<number>([1, 2, 4])
	);
});
