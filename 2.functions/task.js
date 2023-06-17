function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (let i =0; i < arr.length; i++) {
      if (max < arr[i]) {
        max = arr[i] ;
      }
      if (min > arr[i]){
        min = arr[i];
      }
      sum += arr[i];
  }
  const avg = +(sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
 
}

function summElementsWorker(...arr) {
  if (arr.length === 0){
    return 0;
  }
  let sum = 0;
  for (let i =0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0){
    return 0;
  }
  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max){
      max = arr[i];
    }
    if (arr[i] < min){
      min = arr[i]
    }
  }
  const dif = max - min;
  return dif;
}


function differenceEvenOddWorker(...arr) {
  if (arr.length === 0){
    return 0;
  }
  sumEvenElement = 0;
  sumOddElement = 0;
  for (let i =0; i < arr.length; i++) {
    if (arr[i] % 2 ===0){
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i]; 
    }
  }
  dif = sumEvenElement - sumOddElement;
  return dif;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0){
    return 0;
  }
  sumEvenElement = 0;
  countEvenElement = 0;
  for (let i =0; i < arr.length; i++) {
    if (arr[i] % 2 === 0){
      sumEvenElement += arr[i];
      countEvenElement ++;
    } 
}
return countEvenElement === 0 ? 0 : sumEvenElement / countEvenElement;
}


function makeWork (arrOfArr, func) {
let maxWorkerResult = -Infinity;
for (let i = 0; i < arrOfArr.length; i++){
  const result = func(...arrOfArr[i]);
if (result > maxWorkerResult) {
  maxWorkerResult = result;
}
}

return maxWorkerResult;
}
