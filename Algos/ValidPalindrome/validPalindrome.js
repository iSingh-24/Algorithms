const isValid = (s) => {
  //set up an opposites obj

  const opposites = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  //have a stack to check for the last entry in case a closing brace was given

  let stack = [];

  //iterate through the chars and if any char is an opening brace, push it into the stack
  //if any character is a closing brace, check the last char pushed into the stack to compare if it's
  //a corresponding opening brace

  for (let char of s) {
    if (char in opposites) {
      stack.push(char);
    } else {
      //check to see if the last opening brace is the corresponding brace to the closing brace we're currently checking
      if (opposites[stack.pop()] !== char) {
        return false;
      }
    }
  }

  return !stack.length; //we return !stack.length because if the length of the stack is 0 its still true, but lets say if the stack has any remaining braces in it, that means it's false since they didn't pair up accordingly as a valid palindrome
};
