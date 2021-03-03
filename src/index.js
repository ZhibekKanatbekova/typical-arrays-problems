
exports.min = function min (array) {
   if (Array.isArray(array) && array.length ) {
       return Math.min(...array);
   } else {
       return 0;
   }
}

exports.max = function max (array) {
 if (Array.isArray(array) && array.length) {
     return Math.max(...array);
 } else {
     return 0;
 }

}

exports.avg = function avg (array) {
   if (Array.isArray(array) && array.length) {
       let sum = array.reduce((acc, rec) => {
           return acc + rec;
       }, 0);
       let len = array.length;
       return sum / len;
   } else {
       return 0;
   }
}
