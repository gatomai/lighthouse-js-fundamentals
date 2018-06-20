function concat(arr1,arr2) {

  var cat = new Array();
  for ( var i = 0 ; i < arr1.length ; i++ ){
    cat.push(arr1[i]);
  }

  for ( var j = 0 ; j < arr2.length ; j++ ){
    cat.push(arr2[j]);
  }
  return cat;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);