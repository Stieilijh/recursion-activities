const fibs = (n) => {
  arr = [0, 1];
  count = 2;
  while (count < n) {
    k = arr[arr.length - 1] + arr[arr.length - 2];
    arr = arr.concat([k]);
    count++;
  }
  return arr;
};

console.log("Fibs(10) = " + fibs(10));
