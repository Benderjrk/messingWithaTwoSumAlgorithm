function twoSum(numArray, sum) {
  var
    pairs,
    hashtable;
  //array for the actual pairs
  pairs = [];
  // array to push numbers to be compared to.
  hashtable = [];

// loop through the numArray
  for(var i = 0; i < numArray.length; i++) {
    var
      currNum,
      counterpart;
    // get current number
    currNum = numArray[i];
    // create couterpart meaning remainer of sum - number
    counterpart = sum - currNum;
    // get the index of the remainder on the hashtable using indexOf to return anything but -1
    if(hashtable.indexOf(counterpart) !== -1) {
      // push to pairs array
      pairs.push([ currNum, counterpart ]);
    }
    // push to hash array to be compared
    hashtable.push(currNum);
  }
  //return pairs array
  return pairs;
}

//-------testing
var
  numbers,
  sum;


//test one

numbers = [1, 6, 4, 5, 3, 3];
sum = 7;

console.log(twoSum(numbers, sum));

//test two

numbers = [40, 11, 19, 17, -12 ];
sum = 28;

console.log(twoSum(numbers, sum));
