/*
Instructions

Create a conditional that checks if you're old enough to vote.
- isOldEnoughToVote(age)
- response will store true or false values

*/
let response;


function isOldEnoughToVote(age) {
  
  if (age >= 18) response = true;
  else response = false;

  return response;
}


console.log('results: ', isOldEnoughToVote(18));

// Don't edit the code below here
if (typeof module !== 'undefined') {
  module.exports = isOldEnoughToVote;
}
