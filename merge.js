function mergeRecSort(a) {
  if (a.length < 2) {
    return a;
  }

  const leftLength = Math.floor(a.length / 2);
  let leftArray = a.slice(0, leftLength);
  let rightArray = a.slice(leftLength);

  //console.log(leftArray);
  //console.log(rightArray);

  return merge(mergeRecSort(leftArray), mergeRecSort(rightArray));
}

function merge(l, r) {
  let arr = [];

  while (l.length > 0 && r.length > 0) {
    if (l[0] > r[0]) {
      arr.push(r[0]);
      r.shift();
    } else {
      arr.push(l[0]);
      l.shift();
    }
  }

  while (l.length > 0) {
    arr.push(l[0]);
    l.shift();
  }

  while (r.length > 0) {
    arr.push(r[0]);
    r.shift();
  }

  return arr;
}

console.log(mergeRecSort([1, 5, 2, 4, 3, 9, 8, 6]));
