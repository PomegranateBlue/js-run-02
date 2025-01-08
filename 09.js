/**
 * Q: 배열 reduce - 객체 목록 통계
 *
 * - `calculateStatistics` 함수를 작성하세요.
 *   1. users 배열이 [{ age: 10 }, { age: 30 }, ...] 형태라고 가정
 *   2. 평균 나이와 최대 나이를 계산 후 { averageAge, maxAge } 반환
 *   3. reduce를 사용
 *
 * @param {{age:number}[]} users
 * @returns {{ averageAge: number, maxAge: number }}
 */

// TODO: calculateStatistics 함수를 작성하세요.
function calculateStatistics(users) {
  // TODO
  if (users.length !== 0 && users.filter(({ age }) => age > 0)) {
    let newArr = [];
    let maxAge = 0;
    let averageAge = 0;
    newArr = users.map(({ age }) => age);
    averageAge = newArr.reduce((acc, curr) => acc + curr) / newArr.length;
    maxAge = Math.max(...newArr);
  }
  return { averageAge, maxAge };
}

// const arr1 = [{ age: 20 }, { age: 30 }, { age: 40 }, { age: 25 }, { age: 35 }];
// console.log(calculateStatistics(arr1));
// export를 수정하지 마세요.
export { calculateStatistics };
