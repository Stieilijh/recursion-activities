const fibsRec = (n) => {
  if (n == 2) return [0, 1];

  arr = fibsRec(n - 1);
  m = arr[arr.length - 1] + arr[arr.length - 2];
  return arr.concat([m]);
};

console.log("FibsRec(10) = " + fibsRec(10));
