
 function min (array) {
  return Math.min.apply(null, array);
}

 function max (array) {
    return Math.max.apply(null, array);
}

function avg(array) {
    var sum = 0;
    for(var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
 }
