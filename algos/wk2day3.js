/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
];
const expected_1 = 2;
/* 
  left to right diagonal: 1 + 5 + 9 = 15
/**
* From a Chipotle interview.
* encodeStr algo was also given in this interview (aaabbcdd => a3b2cd2).
*
* It ain't much, but it's honest work. A worker who measures water level fluctuations in a river is asked to find the
* largest fluctuation in water levels during a day, but only for rises in water levels.
*/

const riverLevels1 = [15, 17, 30];
const expected1 = 15; // 30 - 15 = 15

const riverLevels2 = [15, 17, 30, 14, 5, 16, 25, 9, 3];
const expected2 = 20; // 25 - 5 = 20

const riverLevels3 = [15, 17, 30, 20, 50, 16, 25, 9, 3];
const expected3 = 30; // 50 - 20 = 30

const riverLevels4 = [21, 18, 10, 11, 14, 9, 5, 13, 15, 7, 1, 6, 12, 4];
const expected4 = 11; // 12 - 1 = 11

const riverLevels5 = [1, 5];
const expected5 = 4;

const riverLevels6 = [5, 1];
const expected6 = -1;

const riverLevels7 = [9, 7, 7, 7];
const expected7 = -1;

const riverLevels8 = [42];
const expected8 = -1;

/**
 * It ain't much, but it's honest work. A worker who measures water level fluctuations in a river is asked to find the
 * largest fluctuation in water levels during a day, but only for rises in water levels.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} waterLevels Non-empty .
 * @returns {number} The max water-level rise amount or -1 if none.
 */
function measureWaterLevels(waterLevels) {
    let rise = 0;
    let maxRise = 0;
    for (let i = 0; i < waterLevels.length; i++) {
        if (waterLevels[i] > waterLevels[i + 1]) {
            rise += waterLevels[i] - waterLevels[i + 1];
        } else {
            if (rise > maxRise) {
                maxRise = rise;
            }
            rise = 0;
        }
    }
    if (rise > maxRise) {
        maxRise = rise;
        rise = 0;
        return maxRise;
    }
    return maxRise;
}
console.log(measureWaterLevels(riverLevels1));
console.log(measureWaterLevels(riverLevels2));
console.log(measureWaterLevels(riverLevels3));
console.log(measureWaterLevels(riverLevels4));
console.log(measureWaterLevels(riverLevels5));
console.log(measureWaterLevels(riverLevels6));
console.log(measureWaterLevels(riverLevels7));
console.log(measureWaterLevels(riverLevels8));

/*****************************************************************************/