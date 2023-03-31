function fibs(n) {
  let a = 0;
  let b = 1;
  let arr = [];

  if (n < 0) {
    return "Enter a valid number";
  }

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      arr.push(0);
    } else {
      arr.push(b);
      let c = b;
      b = a + b;
      a = c;
    }
  }
  return arr;
}

//console.log(fibs(8));

///-------------------------------------------------------------------------------

function fibsRec(n, sequence) {
  if (n < 1) {
    return "Enter a valid number";
  }

  if (n < 3) {
    return sequence.slice(0, n);
  } else {
    newNumber = sequence.at(-1) + sequence.at(-2);
    sequence.push(newNumber);
    return fibs(n, sequence);
  }
}
console.log(fibsRec(8, [0, 1]));
