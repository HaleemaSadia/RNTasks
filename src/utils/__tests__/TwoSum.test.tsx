import { twoSum } from '../../pages/TwoSumScreen';

describe('twoSum', () => {
  it('should return correct indices for valid pair', () => {
    expect(twoSum([1, 2, 3, 4, 6], 6)).toEqual([1, 3]); // 2 + 4 = 6
    expect(twoSum([1, 3, 5, 7], 8)).toEqual([0, 3]);    // 1 + 7 = 8
  });

  it('should return empty array if no valid pair exists', () => {
    expect(twoSum([1, 2, 3, 9], 20)).toEqual([]);
  });

  it('should work with negative numbers in sorted array', () => {
    expect(twoSum([-10, -3, 1, 4, 7], 1)).toEqual([1, 3]); // -3 + 4 = 1
  });

  it('should return early for smallest valid pair', () => {
    expect(twoSum([1, 2, 3, 4, 5, 6], 3)).toEqual([0, 1]); // 1 + 2 = 3
  });
});