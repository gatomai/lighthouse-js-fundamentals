function merge(arr1,arr2) {

  var cat = new Array();
  for ( var i = 0 ; i < arr1.length ; i++ ){
    cat.push(arr1[i]);
  }

  for ( var j = 0 ; j < arr2.length ; j++ ){
    cat.push(arr2[j]);
  }
  return cat.sort();
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);