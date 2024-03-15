const isValid = function (s) {
  const validPairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  let stack = [];

  for (l of s) {
    if (validPairs.hasOwnProperty(l)) {
      if (stack && stack[stack.length - 1] === validPairs[l]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(l);
    }
  }
  return !stack.length;
};

console.log(isValid("()"), true);
console.log(isValid("()[]{}"), true);
console.log(isValid("(]"), false);

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//     Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true

// Example 2:

// Input: s = "()[]{}"
// Output: true

// Example 3:

// Input: s = "(]"
// Output: false

// Constraints:

//     1 <= s.length <= 104
//     s consists of parentheses only '()[]{}'.
