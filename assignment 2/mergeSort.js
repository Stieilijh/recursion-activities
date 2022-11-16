const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let midpoint = Math.floor(arr.length / 2);
  return merge(
    mergeSort(arr.slice(0, midpoint)),
    mergeSort(arr.slice(midpoint))
  );
};

const merge = (arr1, arr2) => {
  let result = [];
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      let ele = arr1.shift();
      result.push(ele);
    } else {
      let ele = arr2.shift();
      result.push(ele);
    }
  }
  result = result.concat(arr1, arr2);
  return result;
};
console.log(mergeSort([6, 4, 3, 5, 7, 1, 2, 10, 9]));
